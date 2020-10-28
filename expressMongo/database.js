const mongoose = require('mongoose');

const mongoDBUrl = "mongodb://mongodb:27017/employees";

// To accept deprecated methods such as findOneAndUpdate
mongoose.set('useFindAndModify', false);

// Connecting to MongoDB using Mongoose
mongoose.connect(mongoDBUrl, { useNewUrlParser : true, useUnifiedTopology: true }, (err)=>{
    if(err)
        console.log("Error while connecting to MongoDB ",err);
    else
        console.log("Succesfully connected to MongoDB");
});

// Get the default connection
const db = mongoose.connection;

db.on('error', () => {
    console.log("Error while connecting to MongoDB");
});

db.once('open', () => {
    console.log("Succesfully connected to MongoDB");
});

module.exports = mongoose;