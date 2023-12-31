import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
export const signToken = ({
  payload,
  privateKey = process.env.JWT_SECRET_KEY as string,
  options = { algorithm: 'HS256' }
}: {
  payload: string | object | Buffer
  privateKey?: string
  options?: jwt.SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (err, token) => {
      if (err) reject(err)
      resolve(token as string)
    })
  })
}
