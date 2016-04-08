/**
 * Created by roysegall on 04/04/2016.
 */

var r = require('rethinkdb');
var connection = null;
r.connect({host: 'localhost', port: '28015'}, function(err, conn) {
  if (err) {
    throw err;
  }
  connection = conn;

  var db = r.db('test');

  db.table('people').changes().run(connection, function(err, cursor) {
    if (err) {
      throw err;
    }

    cursor.each(function(err, row) {
      if (err) {
        throw err;
      }

      console.log(JSON.stringify(row, null, 2));
    });
  });
});


