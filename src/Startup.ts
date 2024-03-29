import bodyParser from 'body-parser';
import cors from 'cors';
import { default as express, Request, Response } from 'express';
import moment from 'moment';
import morgan from 'morgan';
import dotenv from 'dotenv'
import { HttpStatusCode } from './constants/constants';
import { makeResponse } from './contracts/baseResponse';

import Routes from './routes';
/**
 * @desc Start Express server.
 * @class Serverup
 * @returns void
 */

 dotenv.config();

export class Startup {
  private readonly app_start: number;
  private readonly port: number | string;

  constructor(private app: express.Application) {
    this.app = app;

    this.port = process.env.PORT || 4000;

    this.app_start = moment().unix();
  }

  protected useApplicationMiddlewares = (): void => {
    this.app.set('json spaces', 4);

    // TRUST REVERSE PROXY
    this.app.set('trust proxy', true);

    // USE MIDDLEWARES
    this.app.use(cors());
    this.app.use(bodyParser.json());
    // this.app.use(express.bodyParser());
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.urlencoded({ extended: false }));
  };

  protected testRoute() {
    console.log("hello")
    this.app.get('/test', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server');
    }) 
  }

//"serve": "node ./dist/src/Program.js",
  /**
   * @param {*} prefix
   * @returns {*} void
   */
  protected setGlobalRoutesPrefix(prefix: string) {
    this.app.use(prefix, Routes.router);
  }

  /**
   * @returns {*} void
   */
  protected setTestApplicationRoutes() {
    const details = {
      message: 'Lendsqr is up and running',
      app_start: this.app_start,
    };
    this.app.get(
      '/',
      async (_, res: Response): Promise<any> =>
        res.status(HttpStatusCode.OK).json(makeResponse(details, HttpStatusCode.OK)),
    );

    this.app.get(
      '/api/v1',
      async (req: Request, res: Response): Promise<any> =>
        res.status(HttpStatusCode.OK).json(
          makeResponse(
            {
              message: `Lendsqr is up and running on ${req.hostname}`,
              app_start: this.app_start,
              path: req.originalUrl,
            },
            HttpStatusCode.OK,
          ),
        ),
    );
  }

  protected initialize = (): void => {
    const message = '  App is running at http://localhost:%d in %s mode';

    const env = process.env.NODE_ENV;

    if (env === 'production') console.info('App is running on %s mode', env);
    else console.info(message, this.port, env);

    this.app.listen(this.port, () => {
      console.info('  **Press CTRL + C to stop**');
    });
  };

  protected catchUnknownRoutes = () => {
    this.app.use(
      '/*',
      async (_: Request, res: Response): Promise<any> => {
        return res
          .status(HttpStatusCode.NOT_FOUND)
          .json(makeResponse(null, HttpStatusCode.NOT_FOUND, 'Route not found'));
      },
    );
  };

  
}
declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}
