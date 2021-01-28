export interface Image {
  metadata: ImageMetadata;
  embed_url: string;
}
export interface ImageMetadata {
  owner: string | null;
  id: string;
  size: number;
  content_type: string;
  file_extension: string;
  created_date: string;
  tags: Map<string, string> | null;
}
