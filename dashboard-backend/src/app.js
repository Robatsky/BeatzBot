require('dotenv').config();
require('./strategies/discord');

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const Store = require('connect-mongo')(session);
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 4242;
const routes = require('./routes');

mongoose.connect('mongodb://localhost/beatzbot', { useNewUrlParser: true, useUnifiedTopology: true});

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
    store: new Store({mongooseConnection: mongoose.connection})
}))

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));