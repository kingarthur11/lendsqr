import knex from "knex"
import knexFile from '../../knexfile'
import dotenv from 'dotenv'


dotenv.config();


console.log(process.env.NODE_ENV)

const env = process.env.NODE_ENV || 'development'
const options = knexFile[env];

const knexInstance = knex(options);

export default knexInstance

