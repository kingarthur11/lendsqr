import { Router } from 'express';
import { WalletController } from '../controller/wallet.controller';

class WalletRoutes extends WalletController {
  public readonly router: Router;

  constructor() {
    super();
    this.router = Router();
    this.routes();
  }

  private routes = () => {
    this.router.post('/fund', this.fundWalletAsync);
    this.router.post('/transfer', this.transferFundDataAsync);
    this.router.post('/withdraw', this.withdrawFundDataAsync);
  };
}
export default new WalletRoutes();