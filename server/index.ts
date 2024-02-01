import express from 'express'
import cors from 'cors'
const app = express()
import morgan from 'morgan'
import {invalidRouteHandlerMiddleware} from './src/middlewares/validRoutemidware.js'
import {connectpg} from './src/services/dbConnection.js'
app.use(cors())
app.use(morgan('dev'))

const PORT = process.env.PORT
const SERVER_PORT = PORT || 3000
app.use(express.json())

app.use('*', invalidRouteHandlerMiddleware)

connectpg()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log('Listening on PORT', SERVER_PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
