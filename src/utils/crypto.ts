import { createHash } from 'crypto'
import { config } from 'dotenv'
//viet 1 cai ham nhan vao 1 chuoi va ma hoa theo chuan SHA256
//va tra ve chuoi da ma hoa
function SHA256(content: string) {
  return createHash('SHA256').update(content).digest('hex')
}
//viet 1 ham nhan vao password va ma hoa
export function hashPassword(password: string) {
  return SHA256(password + (process.env.PASSWORD_SECRET as string))
}
