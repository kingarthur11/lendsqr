import { Router } from 'express';

import UserRoutes from './user.routes';
import WalletRoutes from './wallet.routes';

class Routes {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.applicationRoutes();
  }

  private applicationRoutes = (): void => {
    this.router.use('/user', UserRoutes.router);
    this.router.use('/wallet', WalletRoutes.router);
  };
}

export default new Routes();
