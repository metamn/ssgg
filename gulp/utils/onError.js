// Error handler

module.exports = function(error) {
  console.log(error.message)
  this.emit('end');
};
