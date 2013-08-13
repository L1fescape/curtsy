# Curtsy

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


## Install

`npm install curtsy`

## Examples

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

## Future Plans

* More advanced gesture direction (hand twist, flick, hand close, etc)

## Contribute

If you have a feature you'd like to add or a gesture you'd like supported, submit an issue through GitHub or better yet, a pull request!
