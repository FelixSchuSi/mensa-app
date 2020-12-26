package types

import "gomagestore/storage"

type FileResponse struct {
	MetaData *storage.FileMetadata `json:"metadata"`
	EmbedURL string                `json:"embed_url"`
}
