import { NextFunction, Request, Response, response } from 'express'
import { RegisterReqBody } from '~/models/request/User.requests'
import User from '~/models/schemas/User.scheme'
import databaseService from '~/services/database.services'
import UsersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import usersService from '~/services/users.services'
export const loginControllers = async (req: Request, res: Response) => {
  //lấy user_id từ user của req
  const { user }: any = req
  const user_id = user._id
  //dùng user_id tạo acces_token và refresh_token
  const result = await usersService.login(user_id.toString())
  //res access_token và refresh_token cho client
  res.json({
    message: 'login successfully',
    result
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  throw new Error('test error')
  const result = await UsersService.register(req.body)
  res.json({
    message: 'Register successfully',
    result
  })
}
