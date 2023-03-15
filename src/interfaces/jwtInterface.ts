import jwt, { SignOptions } from 'jsonwebtoken';
// Essa interface dependerá das informações que passamos em nosso payload.
interface Itoken {
  id?: number;
  username: string;
  email?: string;
  password: string;
}

const secret = 'password';
// A função create TokenJWT recebe como parâmetro o nosso payload e retorna um token ao usuário.
export default function createTokenJWT(payload: Itoken) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, config);
  return token;
}