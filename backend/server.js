const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open', ()=>{
	console.log("MongoDB database connection established")
})

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

