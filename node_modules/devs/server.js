var http = require('http');
var Static = require('node-static');
var chalk = require('chalk');

var fileServer = new Static.Server(process.cwd());

module.exports = {
  start: function(port, bundle, outputFile) {
    port = port || 8000;
    outputFile = outputFile || 'bundle.js';

    var app = http.createServer(function(req, res) {
      var log = function(status) {
        var statusColor = status === 404 ? chalk.red : chalk.green;

        console.log(chalk.yellow(req.method) + ' ' + (statusColor(status)) + ' ' + req.url);
      };

      if (bundle && req.url === '/' + outputFile) {
        res.statusCode = 200;

        bundle.bundle(function(err, data) {
          if (err) {
            return res.end('document.body.innerHTML = \'' + err.toString() + '\'');
          }

          log(res.statusCode);
          res.setHeader('Content-Type', 'application/javascript');
          res.end(data);
        });
        return;
      }

      fileServer.serve(req, res, function(err, e) {
        var status = e ? e.status : 404;
        log(status);
      });
    });

    app.listen(port, function() {
      console.log('Starting dev server on localhost:' + port);
    });
  }
};
