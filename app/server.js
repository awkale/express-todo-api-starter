require('./config.js');

const _ = require("lodash");
const express = require('express');
const bodyParser = require('body-parser');
const ObjectId = require("mongoose").Types.ObjectId;
const pathfinderUI = require('pathfinder-ui')

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');

const app = express();

/////////////////////////////////
/////////MIDDLEWARE//////////////
////////////////////////////////

app.use(bodyParser.json());


////////////////////////////////
////////////ROUTES//////////////
////////////////////////////////

// CREATE

app.post("/todos", (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.status(201).send(doc);
	}).catch((e) =>{
		res.status(400).send(e);
	});
});




//INDEX

//SHOW

//UPDATE

//DELETE

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};