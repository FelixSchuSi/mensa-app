import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const keyBase64 = 's9p1PG9edXqxNWaBXORZ1SPVSQ7Gwan5XgKlAudOkBI=';

export function encrypt(text: string) {
  const iv = crypto.randomBytes(16); // Blocklänge: 128 Bit
  const key = Buffer.from(keyBase64, 'base64');
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const ivPlusCipherText = Buffer.concat([iv, cipher.update(text, 'utf8'), cipher.final()]);
  return ivPlusCipherText.toString('base64');
}

export function decrypt(ivPlusCipherTextBase64: string) {
  const buffer = Buffer.from(ivPlusCipherTextBase64, 'base64');
  const iv = buffer.slice(0, 16);
  const ciphertext = buffer.slice(16);
  const key = Buffer.from(keyBase64, 'base64');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  return decipher.update(ciphertext, undefined, 'utf8') + decipher.final('utf8');
}
