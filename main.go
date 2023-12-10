package main

import (
	"fmt"
	"io"
	"log"
	"mohanrai/db"
	"mohanrai/routes"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func apiKeyMiddleware(next http.Handler) http.Handler {

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Header.Get("X-API-KEY") != os.Getenv("API_KEY") {
			http.Error(w, "Forbidden", http.StatusForbidden)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	// Create a log file
	logFile, err := os.OpenFile("log.txt", os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		fmt.Printf("error opening file: %v", err)
	}
	defer logFile.Close()

	// Create a multi writer to log to both file and console
	multi := io.MultiWriter(os.Stdout, logFile)

	// Set the output of the logger to the multi writer
	log.SetOutput(multi)
	// log.Println("thie is test")

	if err := godotenv.Load(); err != nil {
		log.Fatalf("failed to load environment variables: %v", err)
	}

	db.ConnectToPS()

	r := routes.SetupRoutes()

	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "http://localhost:3100"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PUT", "PATCH", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
	}).Handler(apiKeyMiddleware(r))

	log.Println("Starting server on http://localhost:5000")
	if err := http.ListenAndServe(":5000", handler); err != nil {
		log.Fatalf("failed to start the server: %v", err)
	}

}
