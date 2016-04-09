/**
 * Created by roysegall on 04/04/2016.
 */

var r = require('rethinkdb');
var express = require('express');
var app = express();
var connection = null;

app.get('/set_tables', function (req, res) {
  var text = "";

  r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) {
      throw err;
    }

    connection = conn;
    text += "Connection started";
    text += "<br />Setting up the DB";

  }).then(function() {
    r.dbCreate('circuit').run(connection, function (err, result) {
      if (err) {
        throw err;
      }
    })
      .then(function() {
        var db = r.db('circuit');

        db.tableCreate('items').run(connection, function (err, result) {
          if (err) {
            throw err;
          }

          text += "<br />Creating items table";
        })
          .then(function() {
            db.tableCreate('auctions').run(connection, function (err, result) {
              if (err) {
                throw err;
              }

              text += "<br />Creating auctions table";
            })
              .then(function() {
                res.send(text);
              });
          });

      });
  });
});

app.route('/items')
  .get(function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
      if (err) {
        throw err;
      }

      connection = conn;

      r.db('circuit').table('items').run(connection, function(err, cursor) {
        if (err) {
          throw err;
        }

        cursor.toArray(function(err, result) {
          if (err) {
            throw err;
          }
          res.send(JSON.stringify(result, null, 2));

        });
      });
    });

    console.log('Get list of users.');
  }).post(function(req, res) {
    r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
      if (err) {
        throw err;
      }

      connection = conn;

      // how to get information from the request?
      r.db('circuit').table('items').insert({
        title: 'Piano',
        price: '200',
        amount: 1
      }).run(conn, function() {
        res.send('Passed');
      });
    });

  });

app.listen(2020, function() {
  console.log('Started');
});