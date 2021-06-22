// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
//including express...
const express = require('express');

// Start up an instance of app
const app = express();

//including body-parser...
const bodyParser= require('body-parser');

//including cors...
const cors = require('cors');
// Setup Server
//and making sure that it is running successfully 
const port = 4055;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


const server = app.listen(port , listenning);

function listenning(){
    console.log('server is ready...');
    console.log('server running on: http://localhost'+ port);
}
//getter to return project Data..

app.get ('/all',dataSend);

function dataSend(req,res){
    res.send(projectData);
    
}

//since we only want to return projectData object 
// so in this funvtion we make the attributes of the object and send it to app.js in order to update the UI with it....
app.post('/addData',dataAdd)
function dataAdd(request, response) {
    projectData= {
    date: request.body.date,
    temp: request.body.tempreature,
    feelings : request.body.feelings
}
    response.send(projectData);
    console.log(projectData)  //for checking everything is running
    console.log(request.body); //for checking that values are the same...

}
//NOTE for some reason you must click on generate twice in order for the update of the UI to appear......
  