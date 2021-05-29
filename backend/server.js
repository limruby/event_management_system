const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer  = require('multer');
const path = require ('path');

require('dotenv').config();

const app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

const port = process.env.PORT || 5000;

app.use(cors({origin: '*'}));
app.use(express.json({limit:'50mb'}));

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established")
})
app.get('/api/hello', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send({ express: 'Hello From Express' });
  });
  app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send(
	  `I received your POST request. This is what you sent me: ${req.body.post}`,
	);
  });
//add routes
const accountsRouter = require('./routes/accounts');
app.use('/accounts', accountsRouter)

const rolesRouter = require('./routes/roles');
app.use('/roles', rolesRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
app.use('/sponsors', sponsorsRouter)

app.listen(port, () => {
	console.log('Now starting at port: 5000');
});

