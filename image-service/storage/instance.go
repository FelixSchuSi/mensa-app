package storage

var loadedDriver StorageDriver = nil

func SetInstance(i StorageDriver) {
	loadedDriver = i
}
func GetInstance() StorageDriver {
	if loadedDriver == nil {
		loadedDriver = NewDummyStorageDriver()
	}
	return loadedDriver
}
