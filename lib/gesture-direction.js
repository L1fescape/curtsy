function swipeDirection(gesture) {
  var xdiff = gesture.startPosition[0] - gesture.position[0]
    , ydiff = gesture.startPosition[1] - gesture.position[1]
    , zdiff = gesture.startPosition[2] - gesture.position[2];

  var diffs = [
    { 
      distance : Math.abs(xdiff),
      coordinate : "x",
      type : (xdiff > 0) ? "left" : "right"
    },
    {
      distance : Math.abs(ydiff),
      coordinate : "y",
      type : (ydiff > 0) ? "down" : "up"
    },
    {
      distance : Math.abs(zdiff),
      coordinate : "z",
      type : (zdiff > 0) ? "forward" : "back"
    }    
  ];

  diffs.sort(function(a,b){return a['distance'] < b['distance'];});

  return diffs[0].type;
}


function circleDirection(gesture) {
  if (gesture.normal[0] > 0) {
    return "counter-clockwise";
  }
  else
    return "clockwise";
}

exports.swipe = swipeDirection;
exports.circle = circleDirection;
