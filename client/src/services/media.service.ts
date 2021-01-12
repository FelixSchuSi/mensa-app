export class MediaService {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async upload(file: any): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`http://localhost:3443/api/media/media`, {
      credentials: 'include',
      method: 'POST',
      body: formData
    });
    return response.json();
  }
}
export const mediaService = new MediaService();
