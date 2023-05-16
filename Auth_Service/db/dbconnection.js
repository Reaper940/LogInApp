const mongoose = require('mongoose')
require('dotenv/config');
const URL = "mongodb+srv://saad:saad@cluster0.fdvju2n.mongodb.net/AUTH?retryWrites=true&w=majority"
const DB = async() => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(
            URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(console.log('connected !'))
        .catch( (error) => console.log('Error occured...', error));  
    } catch(error){
        console.log(error);
    }
};

module.exports = { DB };