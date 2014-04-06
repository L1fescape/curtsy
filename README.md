# Curtsy [![Build Status](https://travis-ci.org/akenn/curtsy.svg)](http://travis-ci.org/akenn/curtsy)

Simple library for determining the direction of a circle or swipe gesture for Leap Motion's Leapjs library.

## Supported Directions

* Circle
 * Clockwise
 * Counter-Clockwise
* Swipe
 * Left
 * Right
 * Up
 * Down
 * Forward
 * Back


## Use with NodeJS

### Install

```
npm install curtsy --save
```

### Examples

#### Circle

```js
controller.on('frame', function(frame) {
  if (frame.gestures.length) {
    var gesture = frame.gestures[0];
    if (gesture.type == 'circle') {
      console.log('circle', direction(gesture));
      //=> circle { count: 1, type: 'counter-clockwise' }
      console.log(direction(gesture).type);
      //=> counter-clockwise
    }
  }
});
```

You can find this example in `example/circle.js`.

#### Swipe

```js
controller.on('frame', function(frame) {
  if (frame.gestures.length) {
    var gesture = frame.gestures[0];
    if (gesture.type == 'swipe') {
      console.log('swipe', direction(gesture));
      //=> swipe { distance: 123.363, coordinate: 'x', type: 'right' }
      console.log(direction(gesture).type);
      //=> right
    }
  }
});
```

You can find this example in `example/swipe.js`.

## Use with Bower

### Install 

```
bower install curtsy --save
```

### Examples

#### Circle

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Circle Example</title>
  <script src="//js.leapmotion.com/0.2.0/leap.min.js"></script>
  <script src="../curtsy.js"></script>
</head>
<body>
  <h2>Gesture: <span id="gesture"></span></h2>
  
<script> 
  var controller = new Leap.Controller({enableGestures: true});
  controller.loop(function(frame) {
    if (frame.gestures.length) {
      var gesture = frame.gestures[0];
      if (gesture.type == 'circle') {
        document.getElementById('gesture').innerHTML = "Circle " + Curtsy.direction(gesture).type;
      }
    }
  });
</script>
</body>
</html>
```

You can find this example in `example/circle.html`.

## Future Plans

* More advanced gesture direction (hand twist, flick, hand close, etc)

## Contribute

If you have a feature you'd like to add or a gesture you'd like supported, submit an issue through GitHub or better yet, a pull request!
