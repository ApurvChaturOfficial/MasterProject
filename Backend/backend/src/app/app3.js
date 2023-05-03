// Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const errorHandler = require('../love/dMiddleware/aError');

const baseRoute = require('../love/aMCR3/cRoute/aSetting/aBaseRoute');
const userRoute = require('../love/aMCR3/cRoute/bAdministration/aUserRoute');
const roleRoute = require('../love/aMCR3/cRoute/bAdministration/bRoleRoute');
const menuRoute = require('../love/aMCR3/cRoute/bAdministration/cMenuRoute');
const homeRoute = require('../love/aMCR3/cRoute/cMain/aHomeRoute');
const aboutRoute = require('../love/aMCR3/cRoute/cMain/bAboutRoute');
const experienceRoute = require('../love/aMCR3/cRoute/cMain/cExperienceRoute');
const serviceRoute = require('../love/aMCR3/cRoute/cMain/dServiceRoute');
const portfolioRoute = require('../love/aMCR3/cRoute/cMain/ePortfolioRoute');
const portfolioCardRoute = require('../love/aMCR3/cRoute/cMain/fPortfolioCardRoute');
const eventRoute = require('../love/aMCR3/cRoute/cMain/gEventRoute');
const eventCardRoute = require('../love/aMCR3/cRoute/cMain/hEventCardRoute');
const blogRoute = require('../love/aMCR3/cRoute/cMain/iBlogRoute');
const blogCardRoute = require('../love/aMCR3/cRoute/cMain/jBlogCardRoute');

// App
const app = express()

// Use
app.use(express.json({
  limit: '50mb'
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(cors({ origin: process.env.ACTIVE_APP === 'PersonalPortfolioApp' ? [
  // "http://localhost:3000", 
  // "http://localhost:3001", 
  // "https://personal-portfolio-app.nelify.app", 
  "https://personal-portfolio-app-admin.nelify.app"
] :
process.env.ACTIVE_APP === 'NehaPortfolioApp' ? [
  // "http://localhost:3000", 
  // "http://localhost:3001", 
  // "https://neha-portfolio-app.nelify.app", 
  "https://neha-portfolio-app-admin.nelify.app"
] :
process.env.ACTIVE_APP === 'AnushreePortfolioApp' ?
[
  // "http://localhost:3000", 
  // "http://localhost:3001", 
  // "https://anushree-portfolio-app.nelify.app", 
  "https://anushree-portfolio-app-admin.nelify.app"
] :
[
  // "http://localhost:3000", 
  // "http://localhost:3001", 
  // "https://personal-portfolio-app.nelify.app", 
  "https://personal-portfolio-app-admin.nelify.app"
], credentials: true }))

app.use("/api/v1/base", baseRoute)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/role", roleRoute)
app.use("/api/v1/menu", menuRoute)
app.use("/api/v1/home", homeRoute)
app.use("/api/v1/about", aboutRoute)
app.use("/api/v1/experience", experienceRoute)
app.use("/api/v1/service", serviceRoute)
app.use("/api/v1/portfolio", portfolioRoute)
app.use("/api/v1/portfolio-card", portfolioCardRoute)
app.use("/api/v1/event", eventRoute)
app.use("/api/v1/event-card", eventCardRoute)
app.use("/api/v1/blog", blogRoute)
app.use("/api/v1/blog-card", blogCardRoute)

app.use(errorHandler)


module.exports = app
