import { hash, compare } from 'bcryptjs';

const encryptText = async (pass: string): Promise<string> => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
};

const verifyEncryptText = async (pwd: string, pwdHash: string): Promise<boolean> => {
    const isCorrect = await compare(pwd, pwdHash);
    return isCorrect;
};

export { encryptText, verifyEncryptText };
