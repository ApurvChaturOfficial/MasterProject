// Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload')
const cors = require('cors')
const errorHandler = require('./love/dMiddleware/aError');

const baseRoute1 = require('./love/aMCR1/cRoute/aSetting/aBaseRoute');
const userRoute1 = require('./love/aMCR1/cRoute/bAdministration/aUserRoute');

const baseRoute2 = require('./love/aMCR2/cRoute/aSetting/aBaseRoute');
const userRoute2 = require('./love/aMCR2/cRoute/bAdministration/aUserRoute');
const roleRoute2 = require('./love/aMCR2/cRoute/bAdministration/bRoleRoute');
const menuRoute2 = require('./love/aMCR2/cRoute/bAdministration/cMenuRoute');
const sample1Route = require('./love/aMCR2/cRoute/cMain/aSample1Route');
const sample2Route = require('./love/aMCR2/cRoute/cMain/bSample2Route');
const sample3Route = require('./love/aMCR2/cRoute/cMain/cSample3Route');
const sample4Route = require('./love/aMCR2/cRoute/cMain/dSample4Route');
const sample5Route = require('./love/aMCR2/cRoute/cMain/eSample5Route');

// Connect Environment Variable (Again)
dotenv.config({path: "src/love/bConfig/aConstantConfig.env"})

// App
const app = express()

// Use
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(cors({ origin:  "https://apurvchaturofficial.online", credentials: true }))

process.env.ACTIVE_APP == 'AuthenticationApp' &&  app.use("/api/v1/base", baseRoute1)
process.env.ACTIVE_APP == 'AuthenticationApp' &&  app.use("/api/v1/user", userRoute1)

process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/base", baseRoute2)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/user", userRoute2)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/role", roleRoute2)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/menu", menuRoute2)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/sample1", sample1Route)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/sample2", sample2Route)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/sample3", sample3Route)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/sample4", sample4Route)
process.env.ACTIVE_APP == 'AdministrationApp' && app.use("/api/v1/sample5", sample5Route)


app.use(errorHandler)


module.exports = app
