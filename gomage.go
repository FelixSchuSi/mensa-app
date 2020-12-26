package gomagestore

import (
	"gomagestore/api"
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
	storage.SetInstance(storage.NewFileSystemDriver("./meta", "./content"))
	router := mux.NewRouter()
	router.HandleFunc("/media/{id}", api.GetFile).Methods("GET")
	router.HandleFunc("/raw/{id}", api.GetFileRaw).Methods("GET")
	router.HandleFunc("/media", api.PostFile).Methods("POST")
	router.HandleFunc("/media/{id}", api.DeleteFile).Methods("DELETE")
	router.HandleFunc("/media", api.ListFiles).Methods("GET")
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
