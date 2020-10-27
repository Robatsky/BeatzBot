require('dotenv').config();
require('./strategies/discord');

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const Store = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 4242;
const routes = require('./routes');

mongoose.connect('mongodb://localhost/beatzbot', { useNewUrlParser: true, useUnifiedTopology: true});

app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000 * 60 * 24,
    },
    resave: true,
    saveUninitialized: true,
    store: new Store({mongooseConnection: mongoose.connection})
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));