import { Request, Response, NextFunction } from 'express'
import HTTP_STATUS from '~/constants/httpStatus'
import { Omit, omit } from 'lodash'
//Error handler
export const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(`error in middleware ${err}`)
  res
    .status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR)
    .json({ message: err.message })
    .json(omit(err, ['status']))
}

//lỗi từ các nơi sẽ dồn về đây
