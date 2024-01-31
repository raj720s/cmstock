import * as dotenv from 'dotenv'
dotenv.config({path: '.env'})

const DB_URI = process.env.DB_URI
const JWT_SECRET = process.env.JWT_SECRET
const PORT = process.env.PORT
// const EMAIL_TOKEN = process.env.EMAIL_TOKEN
// const EMAIL_NAME = process.env.EMAIL_NAME

export {DB_URI, JWT_SECRET, PORT}
