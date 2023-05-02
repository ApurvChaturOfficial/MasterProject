const mongoose = require('mongoose');

const database = () => {
    const DB_URL1 = "mongodb+srv://ApurvChaturNew:ApurvChatur@cluster0.degxoy1.mongodb.net/SampleAuthenticationApp"
    const DB_URL2 = "mongodb+srv://ApurvChaturNew:ApurvChatur@cluster0.degxoy1.mongodb.net/SampleAdministrationApp"
    const DB_URL3 = "mongodb+srv://ApurvChaturNew:ApurvChatur@cluster0.degxoy1.mongodb.net/PersonalPortfolioApp"
    const DB_URL4 = "mongodb+srv://ApurvChaturNew:ApurvChatur@cluster0.degxoy1.mongodb.net/NehaPortfolioApp"
    const DB_URL5 = "mongodb+srv://ApurvChaturNew:ApurvChatur@cluster0.degxoy1.mongodb.net/AnushreePortfolioApp"

    var DB_URL
        
    process.env.ACTIVE_APP === 'SampleAuthenticationApp' ? DB_URL = DB_URL1 :
    process.env.ACTIVE_APP === 'SampleAdministrationApp' ? DB_URL = DB_URL2 :
    process.env.ACTIVE_APP === 'PersonalPortfolioApp' ? DB_URL = DB_URL3 :
    process.env.ACTIVE_APP === 'NehaPortfolioApp' ? DB_URL = DB_URL4 :
    process.env.ACTIVE_APP === 'AnnushreePortfolioApp' ? DB_URL = DB_URL5 :
    DB_URL =DB_URL1

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