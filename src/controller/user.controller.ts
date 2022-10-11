import { Request, Response } from 'express';
import UserServices from '../services/user.service';

/**
 * @class AuthController
 */
export class UserController extends UserServices {
  
  /**
   * @method addUserServiceAsync
   * @desc Feature signs up the customer
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  protected createUserAccpAsync = async (req: Request, res: Response): Promise<unknown> => {
    const data = await this.addUserServiceAsync(req.body);
    // return res.json(data)
    return res.status(data.statusCode).json(data);
  };

  protected getUserAsync =async (req: Request, res: Response): Promise<any> => {
    const data = await this.getUser(req);
    return res.status(data.statusCode).json(data);
  }
 
}
