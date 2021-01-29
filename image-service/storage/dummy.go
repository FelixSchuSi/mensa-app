package storage

import "log"

type DummyStorageDriver struct {
}

func NewDummyStorageDriver() *DummyStorageDriver {
	return &DummyStorageDriver{}
}
func (*DummyStorageDriver) Store(file *File) StorageDriverError {
	log.Println("Called Store on dummy driver")
	return Success
}
func (*DummyStorageDriver) LoadMeta(string) (*FileMetadata, StorageDriverError) {
	log.Println("Called LoadMeta on dummy driver")
	return nil, Success
}
func (*DummyStorageDriver) Load(id string) (*File, StorageDriverError) {
	log.Println("Called Load on dummy driver")
	return nil, Success
}
func (*DummyStorageDriver) List() ([]FileMetadata, StorageDriverError) {
	log.Println("Called List on dummy driver")
	return nil, Success
}
func (*DummyStorageDriver) Delete(id string) StorageDriverError {
	log.Println("Called Delete on dummy driver")
	return Success
}
