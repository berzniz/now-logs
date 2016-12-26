require('../index')('my-secret');

setInterval(function() {
    console.log('The time is', new Date());
}, 1000);

setInterval(function() {
    console.error('an error');
}, 3000);
