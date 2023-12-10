s3manager := s3.NewFromConfig(cfg)

    // uploader := s3manager.NewUploader(cfg)

    // Retrieve file from posted form-data
    file, _, err := r.FormFile("file")
    if err != nil {
    	http.Error(w, err.Error(), http.StatusBadRequest)
    	return
    }
    defer file.Close()

    // Upload the file to S3.
    result, err := s3manager.PutObject(context.TODO(), &s3.PutObjectInput{
    	Bucket: aws.String(bucketName),
    	Key:    aws.String("example.txt"),
    	Body:   file,
    })
    if err != nil {
    	http.Error(w, fmt.Sprintf("failed to upload file, %v", err), http.StatusInternalServerError)
    	return
    }

    w.Write([]byte(fmt.Sprintf("file uploaded to, %s\n", *result.VersionId)))
