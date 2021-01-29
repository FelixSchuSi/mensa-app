package storage

import "time"

type StorageDriverError int

const (
	Success         StorageDriverError = 0
	ErrFileNotFound StorageDriverError = 1
	ErrUnexpected   StorageDriverError = 2
	ErrFileCorrupt  StorageDriverError = 3
	ErrFileExists   StorageDriverError = 4
)

type FileMetadata struct {
	Owner         string            `json:"owner"`
	ID            string            `json:"id"`
	Size          int64             `json:"size"`
	ContentType   string            `json:"content_type"`
	FileExtension string            `json:"file_extension"`
	Created       time.Time         `json:"created_date"`
	Tags          map[string]string `json:"tags"`
}
type File struct {
	MetaData *FileMetadata `json:"metadata"`
	Content  []byte        ` json:"content"`
}
type StorageDriver interface {
	Store(*File) StorageDriverError
	Load(string) (*File, StorageDriverError)
	LoadMeta(string) (*FileMetadata, StorageDriverError)
	List() ([]FileMetadata, StorageDriverError)
	Delete(string) StorageDriverError
}
