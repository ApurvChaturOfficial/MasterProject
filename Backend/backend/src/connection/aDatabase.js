const mongoose = require('mongoose');

const database = () => {
    var DB_URL
    
    process.env.ACTIVE_APP === 'SampleAuthenticationApp' ? DB_URL = process.env.DB_URL1 :
    process.env.ACTIVE_APP === 'SampleAdministrationApp' ? DB_URL = process.env.DB_URL2 :
    process.env.ACTIVE_APP === 'PersonalPortfolioApp' ? DB_URL = process.env.DB_URL3 :
    process.env.ACTIVE_APP === 'NehaPortfolioApp' ? DB_URL = process.env.DB_URL4 :
    process.env.ACTIVE_APP === 'AnnushreePortfolioApp' ? DB_URL = process.env.DB_URL5 :
    DB_URL =process.env.DB_URL1

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

module.exports = database