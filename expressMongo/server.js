const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const HOST = '0.0.0.0'
const PORT = 80;

var mongoClient = require('mongodb').MongoClient;
const config = require('./config');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/getPlayers', (req, res) => {
    mongoClient.connect(config.mongourl,{ useNewUrlParser: true },function(err,client){
        const dbo = client.db(config.dbname);
        if(err){
            console.log("Error Occurred while connecting ",err);
            res.send(err);
        }
        else{
            dbo.collection('employeeDetails').find().toArray(function(error,results){
                if (error) throw error;
                client.close();
                console.log("employeeDetails ",results);
                res.send(results);
            });
        }
    });
});

app.listen(PORT, HOST);

console.log(`Express App running on http://${HOST}:${PORT}`);