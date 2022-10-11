import { head } from 'ramda';
import { Request } from 'express';
import db from '../data/db';
import { makeResponse, BaseResponse } from '../contracts/baseResponse';
import {
  HttpStatusCode,
} from '../constants/constants';
import { IWalletDTO } from '../repositories/IWallet.repo';


/**
 * @class WalletServices
 */
export default class WalletServices implements Required<WalletServices> {
  /**
   * @method fundWalletService
   * @desc Feature will cipher text
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
   protected fundWalletService = async (walletDTO: IWalletDTO ) => {
    const user_id = walletDTO.user_id
    const wallet_no = walletDTO.wallet_no
    const amount = walletDTO.amount
    let ledger_balance
    let available_balance
    await db('wallets').where({ user_id, wallet_no })
    .then((items) => {
      const ledgerBalance = Number((items as any)[0]?.ledger_balance);
      const availableBalance = Number((items as any)[0]?.available_balance);
      ledger_balance = ledgerBalance + amount
      available_balance = availableBalance + amount
      db('wallets').where({ user_id, wallet_no }).update({ledger_balance, available_balance});
    })
   
    return makeResponse('funds credited successfuly', HttpStatusCode.OK);
    
  };

  /**
   * @method transferFundsServiceAsync
   * @desc Feature will fetch Account
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  protected transferFundsServiceAsync = async (walletDTO: IWalletDTO) => {
    const creditor_id = walletDTO.creditor_id
    const debitor_id = walletDTO.debitor_id
    const creditor_wallet_no = walletDTO.creditor_wallet_no
    const debitor_wallet_no = walletDTO.debitor_wallet_no
    const amount = walletDTO.amount

    let ledger_balance
    let available_balance

    await db('wallets').where({ user_id: creditor_id, wallet_no: creditor_wallet_no })
            .then((items) => {
              const ledgerBalance = Number((items as any)[0]?.ledger_balance);
              const availableBalance = Number((items as any)[0]?.available_balance);
              ledger_balance = ledgerBalance + amount
              available_balance = availableBalance + amount
              db('wallets').where({ user_id: creditor_id, wallet_no: creditor_wallet_no }).update({ledger_balance, available_balance});
    })

    await db('wallets').where({ user_id: debitor_id, wallet_no: debitor_wallet_no })
        .then((items) => {
          const ledgerBalance = Number((items as any)[0]?.ledger_balance);
          const availableBalance = Number((items as any)[0]?.available_balance);
          ledger_balance = ledgerBalance - amount
          available_balance = availableBalance - amount
          db('wallets').where({ user_id: debitor_id, wallet_no: debitor_wallet_no }).update({ledger_balance, available_balance});
    })
    return makeResponse("funds transfered successfully", HttpStatusCode.OK);
  };

  /**
   * @method fetchBanksDataServiceAsync
   * @desc Feature will all banks
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  protected withdrawFundsServiceAsync = async (walletDTO: IWalletDTO) => {
    const user_id = walletDTO.user_id
    const wallet_no = walletDTO.wallet_no
    const amount = walletDTO.amount
    let ledger_balance
    let available_balance
    await db('wallets').where({ user_id, wallet_no })
    .then((items) => {
      const ledgerBalance = Number((items as any)[0]?.ledger_balance);
      const availableBalance = Number((items as any)[0]?.available_balance);
      ledger_balance = ledgerBalance - amount
      available_balance = availableBalance - amount
      db('wallets').where({ user_id, wallet_no }).update({ledger_balance, available_balance});
    })

    return makeResponse("funds withrawn successfully", HttpStatusCode.OK);
  };

  protected getWallet =async (req: Request): Promise<BaseResponse<IWalletDTO[] | any>> => {
    const { id } = req.query;
    let wallet = await db('wallets').where({ id }).returning(['user_id', 'wallet_no', 'ledger_balance', 'available_balance']).then(head);
    return makeResponse(wallet, HttpStatusCode.OK);
  }

}
