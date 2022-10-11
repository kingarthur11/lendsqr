import { Request, Response } from 'express';
import WalletServices from '../services/wallet.service';

/**
 * @class WalletController
 */
export class WalletController extends WalletServices {
  /**
   * @method fundWalletAsync
   * @desc Feature store Wallet data
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  protected fundWalletAsync = async (req: Request, res: Response): Promise<unknown> => {
    const data = await this.fundWalletService(req.body);
    return res.status(data.statusCode).json(data);
  };

  /**
   * @method transferFundDataAsync
   * @desc Feature fetch Wallet data
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  protected transferFundDataAsync = async (req: Request, res: Response): Promise<unknown> => {
    const data = await this.transferFundsServiceAsync(req.body);
    return res.status(data.statusCode).json(data);
  };

  /**
   * @method withdrawFundDataAsync
   * @desc Feature fetch Wallet data
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   protected withdrawFundDataAsync = async (req: Request, res: Response): Promise<unknown> => {
    const data = await this.withdrawFundsServiceAsync(req.body);
    return res.status(data.statusCode).json(data);
  };

  protected getUserWalletAsync =async (req: Request, res: Response): Promise<any> => {
    const data = await this.getWallet(req);
    return res.status(data.statusCode).json(data);
  }

}
