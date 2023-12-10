package main

import (
	"fmt"
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

	if err := http.ListenAndServe(":5000", handler); err != nil {
		log.Fatalf("failed to start the server: %v", err)
	} else {
		fmt.Println("Server started on port http://localhost:5000")
	}

}
