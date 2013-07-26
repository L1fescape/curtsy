var Leap = require('leapjs')
  , controller = new Leap.Controller({enableGestures:true})
  , direction = require('../lib/curtsy')


controller.on('frame', function(frame) {
  if (frame.gestures.length) {
    var gesture = frame.gestures[0];
    if (gesture.type == 'swipe') {
      console.log('swipe', direction(gesture));
    }
  }
});


// init
controller.on('ready', function() { console.log('ready'); });
controller.connect();
console.log('\nWaiting for device to connect...');
