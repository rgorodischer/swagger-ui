'use strict';
var path = require('path');
var createServer = require('http-server').createServer;
var dist = path.join('swaggerui', 'dist');
var replacer = require('replace');
var indexHtml = './swaggerui/dist/swagger-ui/index.html';

var replace = function(pattern, replacement) {
  replacer({
    regex : pattern,
    replacement : replacement, paths: [indexHtml],
    recursive : false,
    silent : true 
  });
};

replace("http.*swagger.json", process.env.API_URL);
replace("<div class='input'>", "<div class='input' style='display: none;'>");
replace(">swagger<", ">" + process.env.TITLE + "<");

var swaggerUI = createServer({ root : dist, cors : true });
swaggerUI.listen(9090);
