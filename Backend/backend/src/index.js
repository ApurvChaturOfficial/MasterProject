const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require("./love/cFunction/iConnectDatabase");
const connectFileStorage = require("./love/cFunction/jConnectFileStorage");

// Uncaught Exception
process.on("uncaughtException", (error) => {
    console.log(`Error--> ${error.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)
})

// Connect Environment Variable
dotenv.config({path: "src/love/bConfig/aConstantConfig.env"})

// Connect Database
connectDatabase(
    process.env.ACTIVE_APP === 'AuthenticationApp' ? process.env.DB_URL1 :
    process.env.ACTIVE_APP === 'AdministrationApp' ? process.env.DB_URL2 : process.env.DB_URL1
)

// Connect File Storage
connectFileStorage()

// Server Listen
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", error => {
    console.log(`Error--> ${error.message}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close(() => {
        process.exit(1)
    })
})

