// handlers/routes.go
package routes

import (
	"io"
	"log"
	"mohanrai/db"
	"mohanrai/handlers"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

// SetupRoutes configures and returns the router.
func SetupRoutes() http.Handler {
	// h := &models.Handler{db. db.Db}
	r := chi.NewRouter()

	// r.Use(middleware.Logger)
	var file, err = os.Create("log.txt")
	if err != nil {
		panic("Failed to create log file")
	}
	customLogger := log.New(file, "", log.LstdFlags)
	middleware.DefaultLogger = middleware.RequestLogger(&middleware.DefaultLogFormatter{Logger: customLogger, NoColor: true})
	r.Use(middleware.Logger)
	r.Group(func(r chi.Router) {
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			// randomNumbers := ""
			// for i := 0; i < 10000; i++ {
			// 	randomNumber := rand.Intn(1000)
			// 	randomNumbers += strconv.Itoa(randomNumber) + " "
			// }
			io.WriteString(w, "Hello World!")
		})
		r.Get("/seed", db.SeedDatabase)
		r.Get("/mohans", handlers.GetMohans)
		r.Get("/mohans/{type}/{status}", handlers.GetMohansType)
		r.Get("/mohan/{id}", handlers.GetMohan)
		r.Post("/mohan", handlers.CreateMohan)
		r.Post("/mohan/upload", handlers.UploadToCloudFlare)
		r.Put("/mohan", handlers.UpdateMohan)

	})

	return r
}
