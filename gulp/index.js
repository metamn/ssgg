// Loading all tasks
var fs = require('fs');
var tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function(task) {
  require('./tasks/' + task);
});

// Loading the ssgg task building the documentation for this site
require('./ssgg');
