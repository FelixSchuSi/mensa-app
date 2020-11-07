import { existsSync } from 'fs';
import { join } from 'path';
import { Secrets } from './models/secrets';

export async function getSecrets(): Promise<Secrets> {
    const path = join(__dirname, './secrets.json');
    if (existsSync(path)) {
        // Local development environment
        const secrets: Secrets = await import(path);
        return secrets;
    } else {
        // Production environment
        return { 'DBURL': String(process.env.DBURL) };
    }
}