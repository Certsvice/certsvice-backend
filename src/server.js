import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  req.mydata = 'hello'
  next()
}

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

// cat
const routers = [
  'get /cat',
  'get /cat/:id',
  'post /cat',
  'put /cat/:id',
  'delete /cat/:id'
]

router
  .route('/cat')
  .get()
  .post()

router
  .route('/cat/:id')
  .get()
  .post()
  .delete()

app.use('/api', router)

// CRUD
app.get('/', log, (req, res) => {
  res.send({ data: 2 })
})

app.put('/data', (req, res) => {})

app.delete('/data', (req, res) => {})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: false })
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
