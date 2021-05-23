const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit:'50mb'}));

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established")
})
app.get('/api/hello', (req, res) => {
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
app.use('/api/accounts', accountsRouter)

const rolesRouter = require('./routes/roles');
app.use('/api/roles', rolesRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/api/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
app.use('/api/sponsors', sponsorsRouter)

app.listen(port, () => {
	console.log('Now starting at http://localhost:5000/api/hello');
});

