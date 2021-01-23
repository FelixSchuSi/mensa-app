const codeCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export const codeLength = 8;

export function createJoinCode(length: number): string {
  const charArrrayLength = codeCharacters.length;
  let code = '';
  for (let i = 0; i < length; i++) {
    code += codeCharacters.charAt(Math.floor(Math.random() * charArrrayLength));
  }
  return code;
}
