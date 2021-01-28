import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

export async function takePhoto(): Promise<Blob | null> {
  const { Camera } = Plugins;
  try {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      saveToGallery: false
    });
    if (!photo.webPath) {
      return null;
    }
    const blob: Blob = await (await fetch(photo.webPath)).blob();
    return blob;
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function selectPhoto(): Promise<Blob> {
  return new Promise<Blob>((res, rej) => {
    const uploadInput = document.createElement('input');
    uploadInput.setAttribute('accept', 'image/*');
    uploadInput.setAttribute('type', 'file');
    uploadInput.setAttribute('name', 'file');
    uploadInput.setAttribute('id', 'image-file-input');
    uploadInput.style.display = 'none';
    uploadInput.addEventListener('change', () => {
      const file = uploadInput.files ? uploadInput.files[0] : null;
      document.body.removeChild(uploadInput);
      if (!file) {
        return rej();
      }
      return res(file);
    });
    document.body.appendChild(uploadInput);
    uploadInput.click();
  });
}
