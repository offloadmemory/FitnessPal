var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Results = require('./models/results');
var Runners = require('./models/runners');
var app = express();
var fs = require('fs');

mongoose.connect('mongodb://localhost/test');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/photos', function (req, res) {
    var images = [];
    var files = fs.readdirSync('../client/vendor/photos');
    for (var i in files) {
        images.push(files[i]);
    }
    res.send(images);
});

app.get('/about', function (req, res, next){
var query = Runners.find();

   query.exec(function (err, runners) {
    if (err) return next(err);
    res.json(runners);
   });
});
app.get('/results', function (req, res, next) {
    var query = Results.find();

    query.exec(function (err, results) {
        if (err) return next(err);
        res.json(results);
    });
});

app.get('/events', function (req, res) {
    var request = require('request'),
        cheerio = require('cheerio'),
        Q = require('q'),
        event = [],
        json = {
            marathon: "",
            details: ""
        },
        url = 'http://marathons.ahotu.com/calendar/half-marathon/india?page=1';

    var gatherEvents = function (callback) {
        var deferred = Q.defer();
        request(url, function (err, response, body) {
            $ = cheerio.load(body);
            $('.col-md-9 .list-group a h4').filter(function (index, marathon) {
                callback($(marathon).text());
            });
            deferred.resolve();
        });
        return deferred.promise;
    }

    var callback = function (json) {
        event.push(json);
    }

    var pushArray = function () {
        var deferred = Q.defer();
        deferred.resolve();
        res.send(event);
        return deferred.promise;
    }

    gatherEvents(callback).then(pushArray).done();
});

app.get('/quotes', function (req, res) {
    var request = require('request'),
        cheerio = require('cheerio'),
        Q = require('q'),
        quotesBunch = [],
        urls = ["http://www.brainyquote.com/quotes/topics/topic_motivational1.html",
	            "http://www.brainyquote.com/quotes/topics/topic_motivational2.html",
	            "http://www.brainyquote.com/quotes/topics/topic_motivational3.html",
	            "http://www.brainyquote.com/quotes/topics/topic_motivational4.html"];

    var gatherQuotes = function (callback) {
        var deferred = Q.defer();
        for (var i = 0; i < urls.length; i++) {
            request(urls[i], function (err, response, body) {
                $ = cheerio.load(body);
                $('#quotesList .bqQuoteLink a').each(function (index, quotes) {
                    callback($(quotes).text());
                });
                deferred.resolve();
            });
        }
        return deferred.promise;
    }

    var callback = function (quotes) {
        quotesBunch.push(quotes);
    }

    var pushArray = function () {
        var deferred = Q.defer();
        deferred.resolve();
        res.send(quotesBunch);
        return deferred.promise;
    }

    gatherQuotes(callback).then(pushArray).done();
});

app.listen(3000, function () {
    console.log("Server started at 3000 port!");
});