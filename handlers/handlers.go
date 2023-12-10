package handlers

import (
	"encoding/json"
	"fmt"
	"mohanrai/db"
	"mohanrai/models"
	"net/http"

	"github.com/go-chi/chi/v5"
)

// GetProducts is the HTTP handler for GET /products.
func GetMohans(w http.ResponseWriter, r *http.Request) {
	var mohans []models.Mohan
	result := db.Db.Find(&mohans)
	// result := db.Db.Preload("Comments").Find(&Posts)
	if result.Error != nil {
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}
	// Respond with the updated Mohan
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(mohans)
}

// GetProduct is the HTTP handler for GET /products/{id}.
func GetMohan(w http.ResponseWriter, r *http.Request) {
	var mohan models.Mohan
	result := db.Db.First(&mohan, chi.URLParam(r, "id"))
	if result.Error != nil {
		http.NotFound(w, r)
		return
	}
	// Respond with the updated Mohan
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(mohan)
}

func GetMohansType(w http.ResponseWriter, r *http.Request) {
	mohansType := chi.URLParam(r, "type")
	mohansStatus := chi.URLParam(r, "status")

	fmt.Println("mohansType:", mohansType)
	fmt.Println("mohansStatus:", mohansStatus)

	var mohans []models.Mohan
	result := db.Db.Where("Type = ? AND Status = ?", mohansType, mohansStatus).Find(&mohans)
	fmt.Println("res:", result)
	if result.Error != nil {
		http.NotFound(w, r)
		return
	}
	// Respond with the updated Mohan
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(mohans)
}

func CreateMohan(w http.ResponseWriter, r *http.Request) {
	var newMohan models.Mohan

	// Decode the JSON request body into the newPost struct
	err := json.NewDecoder(r.Body).Decode(&newMohan)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Save the newPost to the database
	result := db.Db.Create(&newMohan)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	// Respond with the created post
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newMohan)

}

// put request handler
func UpdateMohan(w http.ResponseWriter, r *http.Request) {
	var updatedMohan models.Mohan

	// Decode the JSON request body into the updatedMohan struct
	err := json.NewDecoder(r.Body).Decode(&updatedMohan)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Update the existing Mohan in the database
	result := db.Db.Model(&models.Mohan{}).Where("id = ?", updatedMohan.ID).Updates(updatedMohan)

	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	// Respond with the updated Mohan
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(updatedMohan)
}

// upload to s3
