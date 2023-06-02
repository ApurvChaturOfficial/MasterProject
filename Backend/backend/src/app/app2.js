// Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const errorHandler = require('../love/dMiddleware/aError');

const baseRoute = require('../love/aMCR2/cRoute/aSetting/aBaseRoute');
const userRoute = require('../love/aMCR2/cRoute/bAdministration/aUserRoute');
const roleRoute = require('../love/aMCR2/cRoute/bAdministration/bRoleRoute');
const menuRoute = require('../love/aMCR2/cRoute/bAdministration/cMenuRoute');
const sample1Route = require('../love/aMCR2/cRoute/cMain/aSample1Route');
const sample2Route = require('../love/aMCR2/cRoute/cMain/bSample2Route');
const sample3Route = require('../love/aMCR2/cRoute/cMain/cSample3Route');
const sample4Route = require('../love/aMCR2/cRoute/cMain/dSample4Route');
const sample5Route = require('../love/aMCR2/cRoute/cMain/eSample5Route');

// App
const app = express()

// Use
app.use(express.json({
  limit: '50mb'
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(cors({ origin:  [
  "https://sample-administration-app.netlify.app", 
  "https://sample-administration-app-admin.netlify.app"
], credentials: true }))

app.use("/api/v1/base", baseRoute)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/role", roleRoute)
app.use("/api/v1/menu", menuRoute)
app.use("/api/v1/sample1", sample1Route)
app.use("/api/v1/sample2", sample2Route)
app.use("/api/v1/sample3", sample3Route)
app.use("/api/v1/sample4", sample4Route)
app.use("/api/v1/sample5", sample5Route)

app.use(errorHandler)


module.exports = app
