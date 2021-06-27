import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  // função split divide a expressão em um array de strings
  // passando o result1 para uma variável vazia e o result2 para o token 
  const [, token] = authToken.split(" ");

  try {
    // Validar se o token é válido
    const { sub } = verify(
      token,
      "a0e381abe2ba18e719f00d717d2ea161ab89fdca"
    ) as IPayload;

    // Recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}