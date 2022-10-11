import { head } from 'ramda';
import { Request } from 'express';
import db from '../data/db';
import { makeResponse, BaseResponse } from '../contracts/baseResponse';
import {
  HttpStatusCode,
} from '../constants/constants';
import { IUserDTO } from '../repositories/IUser.repo';


/**
 * @class UserServices
 */
export default class UserServices implements Required<UserServices> {
 
  /**
   * @method addUserServiceAsync
   * @desc Feature authenticate a Auth
   * @returns {object} Json data
   */
  public addUserServiceAsync = async (
    createUserDTO: IUserDTO,
  ) => {
    try {

      const wallet_no = Math.floor(Math.random() * (10000000000 - 9999999999 + 1) + 10000000)
      const users = await db('users').insert(createUserDTO).returning([ 'id', 'username', 'email', 'phone_number', 'created_at']).then(head);
      const id = await (users as any)?.id;
      const wallet = await db('wallets').insert({wallet_no, user_id: id }).returning([ 'id', 'user_id', 'wallet_no', 'ledger_balance', 'available_balance', 'created_at']).then(head);
      
      return makeResponse({users, wallet}, HttpStatusCode.OK);
    } catch (error) {
      return makeResponse(null, HttpStatusCode.INTERNAL_ERROR, error.message);
    }
  };

  protected getUser = async (req: Request): Promise<BaseResponse<IUserDTO[] | any>> => {
    const { id } = req.query;
    let user = await db('users').where({id}).select('id', 'username', 'email', 'phone_number', 'created_at').then(head);
    return makeResponse(user, HttpStatusCode.OK);
  }
 
}
