export function copyToClipboard(value: string): void {
  const textArea = document.createElement('textarea');
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
