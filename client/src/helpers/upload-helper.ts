import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

export async function takePhoto(): Promise<Blob | null> {
  const { Camera } = Plugins;
  try {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
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
export async function selectPhoto(): Promise<Blob | null> {
  const uploadInput = document.createElement('input');
  uploadInput.setAttribute('capture', 'filesystem'); // Try to disable "capture" option from FileAPI - we want to use native camera
  uploadInput.setAttribute('accept', 'image/*');
  uploadInput.setAttribute('type', 'file');
  uploadInput.setAttribute('name', 'file');
  uploadInput.setAttribute('id', 'image-file-input');
  uploadInput.style.display = 'none';
  uploadInput.addEventListener('change', () => {
    const file = uploadInput.files ? uploadInput.files[0] : null;
    document.body.removeChild(uploadInput);
    return Promise.resolve(file);
  });
  document.body.appendChild(uploadInput);
  return null;
}
