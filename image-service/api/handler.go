package api

import (
	"encoding/json"
	"fmt"
	"gomagestore/storage"
	"gomagestore/types"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/gorilla/mux"
)

func ListFiles(w http.ResponseWriter, r *http.Request) {
	list, err := storage.GetInstance().List()
	if err != storage.Success {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	var targetList []types.FileResponse = make([]types.FileResponse, 0)
	for _, v := range list {
		targetList = append(targetList, types.FileResponse{MetaData: &v, EmbedURL: getEmbedURL(&v)})
	}
	w.Header().Set("Content-Type", "application/json")
	if goErr := json.NewEncoder(w).Encode(targetList); goErr != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
func PostFile(w http.ResponseWriter, r *http.Request) {
	r.ParseMultipartForm(10 << 20) // 10 MB
	file, handler, goErr := r.FormFile("file")
	if goErr != nil {
		log.Println("Parsing file failed ", goErr.Error())
		return
	}
	defer file.Close()
	var meta storage.FileMetadata
	meta.ContentType = handler.Header.Get("Content-Type")
	meta.Size = handler.Size
	meta.Created = time.Now().UTC()
	meta.Owner = r.Header.Get("user")
	_, extension := splitIDAndExtension(handler.Filename)
	meta.FileExtension = extension

	content, goErr := ioutil.ReadAll(file)
	if goErr != nil {
		log.Println("Reading file failed ", goErr.Error())
		return
	}
	var sFile *storage.File = &storage.File{MetaData: &meta, Content: content}
	err := storage.GetInstance().Store(sFile)
	if err != storage.Success {
		if err == storage.ErrFileNotFound {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	var res types.FileResponse = types.FileResponse{MetaData: sFile.MetaData, EmbedURL: getEmbedURL(sFile.MetaData)}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(res)
}
func DeleteFile(w http.ResponseWriter, r *http.Request) {
	id, _ := splitIDAndExtension(getID(r))
	err := storage.GetInstance().Delete(id)
	if err != storage.Success {
		if err == storage.ErrFileNotFound {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
func GetFile(w http.ResponseWriter, r *http.Request) {
	id, _ := splitIDAndExtension(getID(r))

	meta, err := storage.GetInstance().LoadMeta(id)
	if err != storage.Success {
		if err == storage.ErrFileNotFound {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	var res types.FileResponse = types.FileResponse{MetaData: meta, EmbedURL: getEmbedURL(meta)}
	w.Header().Set("Content-Type", "application/json")
	goErr := json.NewEncoder(w).Encode(res)
	if goErr != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
func Index(w http.ResponseWriter, r *http.Request) {
	f, err := ioutil.ReadFile("./index.html")
	if err != nil {
		log.Println("Could not read index.html")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.Header().Add("Content-Type", "text/html; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	w.Write(f)
}
func GetFileRaw(w http.ResponseWriter, r *http.Request) {
	id, fileExtension := splitIDAndExtension(getID(r))

	file, err := storage.GetInstance().Load(id)
	if err != storage.Success {
		if err == storage.ErrFileNotFound {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	if fileExtension != file.MetaData.FileExtension {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.Header().Set("Content-Type", file.MetaData.ContentType)
	w.WriteHeader(http.StatusOK)
	w.Write(file.Content)
}
func splitIDAndExtension(input string) (string, string) {
	idSplit := strings.Split(input, ".")
	if len(idSplit) > 1 {
		fileExtension := idSplit[len(idSplit)-1]
		id := strings.Join(idSplit[:len(idSplit)-1], ".")
		return id, fileExtension
	}
	return input, ""
}
func getID(r *http.Request) string {
	return mux.Vars(r)["id"]
}
func getEmbedURL(meta *storage.FileMetadata) string {
	return fmt.Sprintf("%s/raw/%s.%s", os.Getenv("URL"), meta.ID, meta.FileExtension)
}
