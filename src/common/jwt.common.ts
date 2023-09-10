import { type JwtPayload, sign, verify } from 'jsonwebtoken';
const JWT_SECRET: string = process.env.JWT_SECRET ?? 'token..010101';

const generateToken = (username: string): string => {
    const jwt = sign({ username }, JWT_SECRET, {
        expiresIn: '2h',
    });
    return jwt;
};

const verifyToken = (jwt: string): string | JwtPayload => {
    const isOK = verify(jwt, JWT_SECRET);
    return isOK;
};

export { generateToken, verifyToken };
