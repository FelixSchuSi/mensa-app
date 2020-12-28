package storage

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/google/uuid"
)

const (
	MetaDataFileExtension string = "meta"
	ContentFileExtension  string = "bin"
)

//FileSystemDriver implements store-in-files
type FileSystemDriver struct {
	MetaPath    string
	ContentPath string
}

func NewFileSystemDriver(metaPath string, contentPath string) *FileSystemDriver {
	createDirectoryIfNotExists(metaPath)
	createDirectoryIfNotExists(contentPath)
	return &FileSystemDriver{MetaPath: metaPath, ContentPath: contentPath}
}
func (*FileSystemDriver) Store(file *File) StorageDriverError {
	id := func() string {
		var id string
		defer func() {
			if r := recover(); r != nil {
				id = ""
			}
		}()
		id = uuid.New().String()
		return id
	}()
	if id == "" {
		return ErrUnexpected
	}
	file.MetaData.ID = id
	if err := storeMetaData(file.MetaData); err != Success {
		return err
	}
	if err := storeContent(file.MetaData.ID, file.Content); err != Success {
		deleteMetaFile(file.MetaData.ID)
		return err
	}
	return Success
}
func (*FileSystemDriver) Load(id string) (*File, StorageDriverError) {
	return getFile(id)
}
func (*FileSystemDriver) LoadMeta(id string) (*FileMetadata, StorageDriverError) {
	return getFileMetaData(id)
}
func (*FileSystemDriver) List() ([]FileMetadata, StorageDriverError) {
	var metaList []FileMetadata
	mediaList, goErr := walkMatch("./meta", MetaDataFileExtension)
	if goErr != nil {
		return nil, ErrUnexpected
	}
	for _, v := range mediaList {
		metadata, err := getFileMetaData(v)
		if err != Success {
			log.Printf("Error when reading %s\n", v)
			continue
		}
		metaList = append(metaList, *metadata)
	}
	return metaList, Success
}
func (*FileSystemDriver) Delete(id string) StorageDriverError {
	if err := deleteContentFile(id); err != Success {
		return err
	}
	return deleteMetaFile(id)
}
func walkMatch(root string, extension string) ([]string, error) {
	var matches []string
	err := filepath.Walk(root+"/", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			return nil
		}
		//Filesystem conversation issues on mac
		if strings.Contains(filepath.Base(path), "._") {
			return nil
		}
		split := strings.Split(info.Name(), ".")
		// Skip files without file extension
		if len(split) < 1 {
			return nil
		}
		// Get File Extension (last element)
		fileExtension := split[len(split)-1]

		if strings.EqualFold(fileExtension, extension) {
			matches = append(matches, split[0])
		}
		return nil
	})
	if err != nil {
		return nil, err
	}
	return matches, nil
}
func deleteContentFile(id string) StorageDriverError {
	err := os.Remove(buildContentPath(id))
	if err != nil {
		if os.IsNotExist(err) {
			return ErrFileNotFound
		}
		return ErrUnexpected
	}
	return Success
}
func deleteMetaFile(id string) StorageDriverError {
	err := os.Remove(buildMetaPath(id))
	if err != nil {
		if os.IsNotExist(err) {
			return ErrFileNotFound
		}
		return ErrUnexpected
	}
	return Success
}
func getFile(filename string) (*File, StorageDriverError) {
	meta, err := getFileMetaData(filename)
	if err != Success {
		return nil, err
	}
	content, err := getFileContent(filename)
	if err != Success {
		return nil, err
	}
	return &File{MetaData: meta, Content: content}, Success
}
func getFileContent(id string) ([]byte, StorageDriverError) {
	data, err := loadFile(buildContentPath(id))
	if err != Success {
		return nil, err
	}
	return data, Success
}
func getFileMetaData(id string) (*FileMetadata, StorageDriverError) {
	var meta FileMetadata
	err := parseJSONFile(&meta, buildMetaPath(id))
	if err != Success {
		return nil, err
	}
	return &meta, Success
}
func parseJSONFile(target interface{}, path string) StorageDriverError {
	content, err := loadFile(path)
	if err != Success {
		return err
	}
	goErr := json.Unmarshal(content, target)
	if goErr != nil {
		return ErrFileCorrupt
	}
	return Success
}
func loadFile(path string) ([]byte, StorageDriverError) {
	file, err := os.Open(path)
	if err != nil {
		if os.IsNotExist(err) {
			return nil, ErrFileNotFound
		}
		return nil, ErrUnexpected
	}
	defer file.Close()

	data, err := ioutil.ReadAll(file)
	if err != nil {
		return nil, ErrUnexpected
	}
	return data, Success
}
func storeContent(id string, content []byte) StorageDriverError {
	return storeFile(content, buildContentPath(id))
}
func storeMetaData(meta *FileMetadata) StorageDriverError {
	return storeJSONFile(*meta, buildMetaPath(meta.ID))
}
func storeJSONFile(s interface{}, path string) StorageDriverError {
	data, goErr := json.Marshal(s)
	if goErr != nil {
		return ErrFileCorrupt
	}
	if err := storeFile(data, path); err != Success {
		return ErrUnexpected
	}
	return Success
}
func storeFile(data []byte, path string) StorageDriverError {
	err := ioutil.WriteFile(path, data, 0644)
	if err != nil {
		return ErrUnexpected
	}
	return Success
}
func buildMetaPath(id string) string {
	return fmt.Sprintf("%s/%s.%s", "./meta", id, MetaDataFileExtension)
}
func buildContentPath(id string) string {
	return fmt.Sprintf("%s/%s.%s", "./content", id, ContentFileExtension)
}
func createDirectoryIfNotExists(path string) {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		os.Mkdir(path, 755)
	}
}
