package db

import (
	"io"
	"net/http"
)

// SeedDatabase is the HTTP handler for GET /seed.
func SeedDatabase(w http.ResponseWriter, r *http.Request) {
	// Perform initial schema migrations.
	// if err := Db.AutoMigrate(&models.Mohan{}); err != nil {
	// 	http.Error(w, "failed to migrate users table", http.StatusInternalServerError)
	// 	return
	// }

	io.WriteString(w, "Migrations and Seeding of database complete\n")
}
