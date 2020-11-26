export function toggleIosMd(mode: 'ios' | 'md'): void {
  const newMode: 'ios' | 'md' = mode === 'md' ? 'ios' : 'md';
  localStorage.setItem('mode', newMode);
  location.reload();
}
