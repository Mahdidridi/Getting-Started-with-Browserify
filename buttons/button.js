var $ = require('jquery');


var button = $('<button/>').html('Click Me').on('click',function () {
  alert('test button 3333333333');
});
module.exports = button;
