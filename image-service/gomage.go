package main

import (
	"gomagestore/api"
	"gomagestore/authorization"
	"gomagestore/storage"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/gorilla/mux"
)

func main() {
	log.Println("Starting Gomage...")
	storage.SetInstance(storage.NewFileSystemDriver("./data/meta", "./data/content"))
	router := mux.NewRouter()
	router.Use(corsMiddlewareFunc)
	router.HandleFunc("/media/{id}", api.GetFile).Methods("GET")
	router.HandleFunc("/raw/{id}", api.GetFileRaw).Methods("GET")
	router.HandleFunc("/media", api.PostFile).Methods("POST")
	router.HandleFunc("/media/{id}", api.DeleteFile).Methods("DELETE")
	router.HandleFunc("/media", api.ListFiles).Methods("GET")
	router.PathPrefix("/").HandlerFunc(optionsHandler).Methods("OPTIONS")
	router.HandleFunc("/", api.Index).Methods("GET")
	amw := authorization.AuthorizationMiddleware{}
	if os.Getenv("SKIP_AUTH") != "true" {
		router.Use(amw.Middleware)
	}

	server := &http.Server{
		Handler:      router,
		Addr:         ":3000",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		log.Fatal(server.ListenAndServe())
	}()
	<-c
}
func corsMiddlewareFunc(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		cors(r, w)
		next.ServeHTTP(w, r)
	})
}
func cors(r *http.Request, w http.ResponseWriter) {
	ua := r.Header.Get("Origin")
	// Fck CORS Mode :D
	if ua == "" {
		ua = "*"
	}

	w.Header().Set("Access-Control-Allow-Origin", ua)
	w.Header().Set("Access-Control-Expose-Headers", "x-csrf-token")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, PATCH")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}
func optionsHandler(w http.ResponseWriter, r *http.Request) {
	cors(r, w)
}
