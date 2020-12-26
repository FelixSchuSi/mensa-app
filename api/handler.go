package api

import (
	"encoding/json"
	"fmt"
	"gomagestore/storage"
	"gomagestore/types"
	"net/http"
	"os"
	"strings"

	"github.com/gorilla/mux"
)

func ListFiles(w http.ResponseWriter, r *http.Request) {

}
func PostFile(w http.ResponseWriter, r *http.Request) {

}
func DeleteFile(w http.ResponseWriter, r *http.Request) {

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

	var res types.FileResponse = types.FileResponse{MetaData: meta, EmbedURL: fmt.Sprintf("%s/raw/%s.%s", os.Getenv("URL"), meta.ID, meta.FileExtension)}
	goErr := json.NewEncoder(w).Encode(res)
	if goErr != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
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
