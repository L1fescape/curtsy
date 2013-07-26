function swipeDirection(gesture) {
  var xdiff = gesture.startPosition[0] - gesture.position[0],
      ydiff = gesture.startPosition[1] - gesture.position[1],
      zdiff = gesture.startPosition[2] - gesture.position[2];

  var movements = [
    { 
      distance: Math.abs(xdiff),
      coordinate: 'x',
      type: (xdiff > 0) ? 'left' : 'right'
    },
    {
      distance: Math.abs(ydiff),
      coordinate: 'y',
      type: (ydiff > 0) ? 'down' : 'up'
    },
    {
      distance : Math.abs(zdiff),
      coordinate : 'z',
      type : (zdiff > 0) ? 'forward' : 'back'
    }    
  ];

  // sort movements based on furthest distance
  movements.sort(function(a, b) {
    return a['distance'] < b['distance'];
  });

  // return the movement type with the greatest change in distance
  return movements[0];
}


function circleDirection(gesture) {
  return {
    count: Math.round(gesture.progress),
    type: (gesture.normal[2] > 0) ? 'counter-clockwise' : 'clockwise'
  };
}

exports.swipe = swipeDirection;
exports.circle = circleDirection;
module.exports = function(gesture) {
  if (gesture.type === 'swipe')
    return swipeDirection(gesture);
  if (gesture.type === 'circle')
    return circleDirection(gesture);
  // if gesture direction is not supported, return empty string
  return '';
};
