const mongoose = require('mongoose');

const connectDatabase = (DB_URL) => {
    mongoose.set('strictQuery', true);
    mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(response => {
        console.log(`Great!... Mongo DB connected with ${process.env.ACTIVE_APP} on server: ${response.connection.host}`)
    })
    // .catch(error => {
    //     console.log(error)
    // })    
}

module.exports = connectDatabase