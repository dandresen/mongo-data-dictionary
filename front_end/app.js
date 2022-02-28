// after $npm run dev is ran view in the browser at http://127.0.0.1:3000/viewItems

const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient

// this model creates a collection for user updates
const {userInputCollection} = require('./models/userUpdates')

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: true}));
app.use(express.static('views/images'));
app.use(express.json());

// name the database / connection here
let dbName = 'testdb'
const url = `mongodb://127.0.0.1:27017/${dbName}`;


// using the mongoclient to query collections
// this seems to be more straight forward than mongoose, which requires schema
MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(client => {
    
        // view / search items
        app.get('/viewItems', (req, res) => {
            let dbName = 'testdb'
            var collectionName = 'test_esri_api_collection'
            const db = client.db(dbName);
            const dbCollection = db.collection(collectionName)

            // this is the 'join' of test_esri_api_collection and userinputcollections
            // it allows the html helper fuctions in viewitems.hbs to access and display the arrays 
            dbCollection.aggregate([
                { $lookup:
                    {
                        from: 'userinputcollections',
                        localField: 'name',
                        foreignField: 'fieldname',
                        as: 'fromUser'
                    }
                }
            ]).toArray()
              .then(results => {
                  // show items in the db in the main table
                  res.render('viewItems.hbs', { 
                    pageTitle: 'This is a Data Dict. Test Page',
                    combinedCollections: results
                });    
            })
              .catch(error => console.error(error))          
        });

        // this update route allow access to the test_esri_api_collection 
        // selectors for the form can populate with required values 
        // handlebars helper functions are being used in update.hbs
        app.get('/update', (req, res) => {
            let dbName = 'testdb'
            let collectionName = 'test_esri_api_collection'
            const db = client.db(dbName);
            const esridbCollection = db.collection(collectionName)

            // getting data from db for selector on update form
            esridbCollection.find().sort({ name: 1 }).toArray()
              .then(results => {
                  // show items in the db on the update page
                  res.render('update.hbs', { 
                    pageTitle: 'Update Page',
                    esri: results
                });    
            })
              .catch(error => console.error(error))                       
        });

    }).catch(error => console.error(error));

// done using mongoclient

// using mongoose here for the update form to send to the database
mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
});

console.log(`MongoDB Connected: ${url} and ${dbName} database`)

// update form using userUpdate model
app.post('/update', (req, res) => {

    // upating the db using a form in update.hbs
    let singleUpdate = new userInputCollection({
        email: req.body.email,
        fieldname: req.body.fieldname,
        fieldDescription: req.body.fieldDescription,
        applicableApplications: req.body.applicableApplications,

    });

    // save to the db and redirect to the viewItems page
    singleUpdate.save()
        .then((result) => {
        res.redirect('/viewItems');   
    }, (e) => {
        // really, the only error is if an incorrect email is used
        // or, required values are not included
        res.status(400).send(e.message);
    });
});

app.listen(3000,  function() {
    console.log('listening on 3000')
});