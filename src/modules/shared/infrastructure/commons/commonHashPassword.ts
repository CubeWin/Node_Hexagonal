import type { HashPassword } from '../../domain/shared.hashPassword';
import { hash, compare } from 'bcryptjs';

export class CommonHashPassword implements HashPassword {
    async encryptText(password: string): Promise<string> {
        const passwordHash = await hash(password, 8);
        return passwordHash;
    }

    async verifyEncryptText(password: string, passwordHash: string): Promise<boolean> {
        const isCorrect = await compare(password, passwordHash);
        return isCorrect;
    }
}
