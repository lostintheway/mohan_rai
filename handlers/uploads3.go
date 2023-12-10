package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"mohanrai/utils"
	"net/http"
	"os"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

func UploadToCloudFlare(w http.ResponseWriter, r *http.Request) {
	var bucketName = "mohanrai"

	r2Resolver := aws.EndpointResolverWithOptionsFunc(func(service, region string, options ...interface{}) (aws.Endpoint, error) {
		return aws.Endpoint{
			URL: fmt.Sprintf("https://%s.r2.cloudflarestorage.com/mohanrai", "f7dba8eff346c20b4e0274e76b1348e4"),
		}, nil
	})

	cfg, err := config.LoadDefaultConfig(context.TODO(),
		config.WithEndpointResolverWithOptions(r2Resolver),
		config.WithCredentialsProvider(credentials.NewStaticCredentialsProvider(os.Getenv("S3_KEY"), os.Getenv("S3_SECRET"), "")),
		config.WithRegion("auto"),
	)
	if err != nil {
		log.Fatal(err)
	}

	// Open the file to upload
	file, handler, err := r.FormFile("file")
	fmt.Println(file)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	defer file.Close()

	// Create an S3 client
	client := s3.NewFromConfig(cfg)

	// Set the parameters for the S3 upload
	newfileName := utils.RefactorFileName(handler.Filename)
	params, err := client.PutObject(context.TODO(), &s3.PutObjectInput{
		Bucket: &bucketName,

		Key:  aws.String(newfileName),
		Body: file,
	})
	if err != nil {
		log.Println("Failed to upload file, ", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the content type to JSON and write the response
	w.Header().Set("Content-Type", "application/json")

	data := map[string]string{
		"filename":  newfileName,
		"versionID": *params.VersionId,
		"url":       "https://pub-0198217282574dada06155209c57c678.r2.dev/" + newfileName,
	}

	json.NewEncoder(w).Encode(data)
}
