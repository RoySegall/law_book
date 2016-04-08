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

  //db.tableCreate('people').run(connection, function (err, result) {
  //  if (err) {
  //    throw err;
  //  }
  //
  //  console.log(JSON.stringify(result, null, 2));
  //});

  //db.table('people').insert([
  //  { name: "William Adama", tv_show: "Battlestar Galactica",
  //    posts: [
  //      {title: "Decommissioning speech", content: "The Cylon War is long over..."},
  //      {title: "We are at war", content: "Moments ago, this ship received word..."},
  //      {title: "The new Earth", content: "The discoveries of the past few days..."}
  //    ]
  //  },
  //  { name: "Laura Roslin", tv_show: "Battlestar Galactica",
  //    posts: [
  //      {title: "The oath of office", content: "I, Laura Roslin, ..."},
  //      {title: "They look like us", content: "The Cylons have the ability..."}
  //    ]
  //  },
  //  { name: "Jean-Luc Picard", tv_show: "Star Trek TNG",
  //    posts: [
  //      {title: "Civil rights", content: "There are some words I've known since..."}
  //    ]
  //  }
  //]).run(connection, function(err, result) {
  //  if (err) throw err;
  //  console.log(JSON.stringify(result, null, 2));
  //});

  //db.table('people').run(connection, function(err, cursos) {
  //  if (err) {
  //    throw err;
  //  }
  //
  //  cursos.toArray(function(err, result) {
  //    if (err) {
  //      throw err;
  //    }
  //
  //    console.log(JSON.stringify(result, null, 2));
  //  });
  //});

  //db.table('people').get('56d7c16c-fc4e-4bb1-a43e-487764c49ef3').run(connection, function (err, result) {
  //  if (err) {
  //    throw err;
  //  }
  //
  //  console.log(JSON.stringify(result, null, 2));
  //
  //});

  //db.table('people').filter(r.row('posts').count().gt(2)).
  //  run(connection, function(err, cursor) {
  //    if (err) throw err;
  //    cursor.toArray(function(err, result) {
  //      if (err) throw err;
  //      console.log(JSON.stringify(result, null, 2));
  //    });
  //  });

  //r.table('people').update({type: "fictional"}).run(connection, function(err, result) {
  //  if (err) {
  //    throw err;
  //  }
  //
  //  console.log(JSON.stringify(result, null, 2));
  //});

  //db.table('people').filter(r.row("name").eq("Jean-Luc Picard")).update({posts: r.row("posts").append({
  //  title: "Shakespeare",
  //  content: "What a piece of work is man..."})
  //}).run(connection, function(err, result) {
  //  if (err) {
  //    throw err;
  //  }
  //
  //  console.log(JSON.stringify(result, null, 2));
  //});

  //db.table('people').insert([
  //  { name: "Roy Segall", tv_show: "Drupa from a to amazing!",
  //    posts: [
  //      {title: "Decommissioning speech", content: "The Cylon War is long over..."},
  //    ]
  //  }
  //]).run(connection, function(err, result) {
  //  if (err) throw err;
  //  console.log(JSON.stringify(result, null, 2));
  //});

  //var foo = r.http('http://live-drupalhub.pantheonsite.io/api');
  //
  //foo.run(conn, function (err, result) {
  //  console.log(JSON.stringify(result, null, 2));
  //});
});

