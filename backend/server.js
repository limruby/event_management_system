const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connection established")
})
//add routes
const accountsRouter = require('./routes/accounts');
app.use('/iiidentex_uitm/api/accounts', accountsRouter)

const competitorsRouter = require('./routes/competitors');
app.use('/iiidentex_uitm/api/competitors', competitorsRouter)

const sponsorsRouter = require('./routes/sponsors');
app.use('/iiidentex_uitm/api/sponsors', sponsorsRouter)

const visitorsRouter = require('./routes/visitor');
app.use('/iiidentex_uitm/api/visitors', visitorsRouter)

const cartRouter = require('./routes/cart');
app.use('/iiidentex_uitm/api/cart', cartRouter)

const judgeRouter = require('./routes/judge');
app.use('/iiidentex_uitm/api/judge', judgeRouter)

const forumRouter = require('./routes/forum');
app.use('/iiidentex_uitm/api/forum', forumRouter)

const evaluationRouter = require('./routes/evaluation');
app.use('/iiidentex_uitm/api/evaluation', evaluationRouter)

const formLinkRouter = require('./routes/formLink');
app.use('/iiidentex_uitm/api/formLink', formLinkRouter)

app.use('/iiidentex_uitm', express.static(__dirname + "/public"));

app.use('/iiidentex_uitm', (req, res, next) => {
	res.sendFile(__dirname + "/public/index.html")
});

// app.listen(port, () => {
// 	console.log('Now starting at https://vexs.fsktm.um.edu.my/api/hello');
// });