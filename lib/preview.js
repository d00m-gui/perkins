var server   = require('paperboy'),
    path     = require('path'),
    cli      = require('./cli.js')(),
    http     = require('http'),
    perkins  = require('commander');

module.exports = (function () {

    var meta = {
        name: 'Perkins',
        author: 'Carlos Elias <hola@carloselias.cl>',
        version: '2.0.3'
        },
        configuration = {
            
        };
    return {
        version: meta.version,
        preview : function (dir) {
          cli.msg(meta.name + ' (v' + meta.version + '): ' + "Starting Server, Sir...");
          if(!dir || dir == '.') {
            dir = path.resolve('.');
          }
          http.createServer(function(req, res) {
          var ip = req.connection.remoteAddress;
          server
            .deliver(dir, req, res)
            .addHeader('Expires', 300)
            .addHeader('X-PaperRoute', 'Node')
            .before(function() {
              
            })
            .after(function(statCode) {
              if(perkins.verbose) {
                cli.info("We received a "+statCode+" request");
              }
            })
            .error(function(statCode, msg) {
              res.writeHead(statCode, {'Content-Type': 'text/plain'});
              res.end("Error " + statCode);
              cli.error('Ooops '+ statCode);
            })
            .otherwise(function(err) {
              res.writeHead(404, {'Content-Type': 'text/plain'});
              res.end("Perkins: 404 File not found");
              cli.error('Oops '+err);
            });
        }).listen(perkins.port);
      }
    };
}());