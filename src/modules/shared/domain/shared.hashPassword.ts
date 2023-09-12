export interface HashPassword {
    encryptText: (password: string) => Promise<string>;
    verifyEncryptText: (password: string, passwordHash: string) => Promise<boolean>;
}
