const dotenv = require('dotenv');
const database = require("./connection/aDatabase");
const fileStorage = require("./connection/bFileStorage");

// Uncaught Exception
process.on("uncaughtException", (error) => {
    console.log(`Error--> ${error.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)
})

// Connect Environment Variable
dotenv.config({path: "src/config/my.env"})

// Connect App
if (process.env.ACTIVE_APP === 'SampleAuthenticationApp') {
    var app = require("./app/app1")
} else if (process.env.ACTIVE_APP === 'SampleAdministrationApp') {
    var app = require("./app/app2")
} else if (process.env.ACTIVE_APP === 'PersonalPortfolioApp') {
    var app = require("./app/app3")
} else {
    var app = require("./app/app1")
}

// Connect Database
database()

// Connect File Storage
fileStorage()

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

