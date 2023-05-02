// Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const errorHandler = require('../love/dMiddleware/aError');

const baseRoute = require('../love/aMCR1/cRoute/aSetting/aBaseRoute');
const userRoute = require('../love/aMCR1/cRoute/bAdministration/aUserRoute');

// App
const app = express()

// Use
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(cors({ origin: process.env.ACTIVE_APP === 'PersonalPortfolioApp' ? [
    "http://localhost:3000", 
    "http://localhost:3001", 
    "https://personal-portfolio-app.nelify.app", 
    "https://personal-portfolio-app-admin.nelify.app"
  ] :
  process.env.ACTIVE_APP === 'NehaPortfolioApp' ? [
    "http://localhost:3000", 
    "http://localhost:3001", 
    "https://neha-portfolio-app.nelify.app", 
    "https://neha-portfolio-app-admin.nelify.app"
  ] :
  process.env.ACTIVE_APP === 'AnushreePortfolioApp' ?
  [
    "http://localhost:3000", 
    "http://localhost:3001", 
    "https://anushree-portfolio-app.nelify.app", 
    "https://anushree-portfolio-app-admin.nelify.app"
  ] :
  [
    "http://localhost:3000", 
    "http://localhost:3001", 
    "https://personal-portfolio-app.nelify.app", 
    "https://personal-portfolio-app-admin.nelify.app"
  ], credentials: true }))

app.use("/api/v1/base", baseRoute)
app.use("/api/v1/user", userRoute)

app.use(errorHandler)


module.exports = app
