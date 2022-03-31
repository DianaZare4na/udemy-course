var express = require('express');
var app = express();

// Добавим модуль для разборки тела запроса
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// Для проверки запросов
//var cors = require('cors');
//app.use(cors());

// Для ведения логов
var logger = require('morgan');
app.use(logger('dev'));

// Для куков
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// Разрешение забирать статические файлы из папки
var path = require('path');
app.use(express.static(path.join(__dirname, 'client')));

exports.post = function (request, response) {
   console.log("Run POST");
   
   
      return response.sendStatus(200);
};

module.exports = app;