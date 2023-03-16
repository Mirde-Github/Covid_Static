// connection 

const mongoURI = "mongodb://localhost:27017" + "/covidtally"

let Mongoose = require('mongoose');
const { tallySchema } = require('./schema')


Mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
collection_connection = Mongoose.model('covidtally', tallySchema)


exports.connection = collection_connection;
