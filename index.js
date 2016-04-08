/**
 * Created by roysegall on 04/04/2016.
 */

var r = require('rethinkdb');
var express = require('express');
var app = express();

app.get('/set_tables', function (req, res) {
  var connection = null;
  var text = "";

  r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) {
      throw err;
    }

    connection = conn;
    text += "Connection started";
    text += "<br />Setting up the DB";

    var db = r.db('circuit');

    r.dbCreate('circuit').run(connection, function (err, result) {
      if (err) {
        throw err;
      }
    })
    .then(function() {
      db.tableCreate('items').run(connection, function (err, result) {
        if (err) {
          throw err;
        }

        text += "<br />Creating items table";
      });

      db.tableCreate('auctions').run(connection, function (err, result) {
        if (err) {
          throw err;
        }

        text += "<br />Creating auctions table";
      });
    });

  }).then(function() {
    res.send(text);
  });

});

app.listen(2020, function() {
  console.log('Started');
});