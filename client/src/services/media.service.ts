import { Image } from '../models/image';
import { httpService } from './http.service';

export class MediaService {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async upload(file: Blob): Promise<Image> {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${httpService.getBaseURL()}media/media`, {
      credentials: 'include',
      method: 'POST',
      body: formData
    });
    return response.json();
  }
}
export const mediaService = new MediaService();
