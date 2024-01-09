const express = require('express')
const cors = require('cors')
const passportSetUp = require('./passport')
const authRoute = require('./routes/auth.js')
const passport = require('passport')
const app = express()
const session = require('express-session')

app.use(
  session({
    secret: 'vipavee',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 24 * 60 * 60 * 1000},
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
)

app.use('/auth', authRoute)

app.listen('5000', () => {
  console.log(`Server is running 5000`)
})
