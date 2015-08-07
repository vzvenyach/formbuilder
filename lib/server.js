var express = require('express');
var app = express();
var swig = require('swig');

function server (doc) {

  app.listen(3000);
  console.log('Server started on port 3000.');

  app.get('/', function(req, res){
    var tpl = swig.compileFile(__dirname + '/templates/template.html',{autoescape:false});
    var home = tpl({form_controls: doc.join('')});
    res.send(home);
  });

  app.post('/', function (req, res) {
    res.send('Posted!')
  })
}

module.exports = server;