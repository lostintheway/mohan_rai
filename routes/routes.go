// handlers/routes.go
package routes

import (
	"io"
	"mohanrai/db"
	"mohanrai/handlers"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

// SetupRoutes configures and returns the router.
func SetupRoutes() http.Handler {
	// h := &models.Handler{db. db.Db}
	r := chi.NewRouter()

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

	})

	return r
}
