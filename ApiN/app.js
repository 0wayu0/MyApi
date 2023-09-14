const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const heroRouter = require('./routes/hero');
const weaponRouter = require('./routes/weapon');
const {mongoose } = require('mongoose');

const app = express();
const cors = require('cors');
app.use(cors());


mongoose.connect('mongodb+srv://naraka:missmiss@cluster0.5mn5o4j.mongodb.net/apiNaraka?retryWrites=true&w=majority',{
  useNewUrLparser: true,
  useUnifiedTopology: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hero', heroRouter);
app.use('/weapon', weaponRouter);

module.exports = app;
