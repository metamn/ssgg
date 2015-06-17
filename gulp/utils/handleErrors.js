// Error handler

var onError = function(error) {
  console.log(error.message)
  this.emit('end');
};
