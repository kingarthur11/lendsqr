import { Router } from 'express';
import { UserController } from '../controller/user.controller';

class UserRoutes extends UserController {
  public readonly router: Router;

  constructor() {
    super();
    this.router = Router();
    this.routes();
  }

  private routes = () => {
    this.router.post('/create_account', this.createUserAccpAsync);
  };
}
export default new UserRoutes();
