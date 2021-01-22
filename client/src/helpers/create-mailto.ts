export function createMailto(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
