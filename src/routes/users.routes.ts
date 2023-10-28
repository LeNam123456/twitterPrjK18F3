//khai báo
import { Router } from 'express'
import { register } from 'module'
import { loginControllers, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapAsync } from '~/utils/wrapperHandlers'
const usersRouter = Router()
 /*
des: đăng nhập
path: /users/login
method: POST
body: {email, password}
*/
usersRouter.post("/login", loginValidator, loginControllers);
//middleware

//router
usersRouter.get('/tweets', loginValidator, loginControllers)
usersRouter.post('/register', registerValidator, wrapAsync(registerController))

export default usersRouter
// hàm bình thường next, throw
// hàm async next, throw là bị lỗi
// khắc phục try catch/ promise
