import axios from 'axios';

export async function gethtmlFromUrl(url: string): Promise<string> {
  const response = await axios(url);
  return <string>response.data;
}
