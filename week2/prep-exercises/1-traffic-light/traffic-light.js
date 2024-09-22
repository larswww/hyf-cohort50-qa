"use strict";
/**
 * The `trafficLight` object is now no longer a global variable. Instead,
 * it is defined in function `main()` and passed as a parameter to other
 * functions, as and when needed.
 */

function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex]
  // Should return the current state (i.e. colour) of the `trafficLight`
  // object passed as a parameter.
}

function getNextStateIndex(trafficLight) {
  if (trafficLight.stateIndex < trafficLight.possibleStates.length-1) {
    return trafficLight.stateIndex + 1;
  } else {
    return 0
  }
}

// This function loops for the number of seconds specified by the `secs`
// parameter and then returns.
// IMPORTANT: This is not the recommended way to implement 'waiting' in
// JavaScript. You will learn better ways of doing this when you learn about
// asynchronous code.
function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // nothing do to here
  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    if (!currentState) {
      throw new Error('No traffic light state!')
    }
    console.log(cycle, "The traffic light is now", currentState);

    try {
      waitSync(1); // Wait a second before going to the next state
    } catch (error) {
      console.error(error)
    }
    const nextStateIndex = getNextStateIndex(trafficLight);
    if (nextStateIndex > trafficLight.possibleStates.length) {
      throw new Error('Index greater than possible states')
    }
    trafficLight.stateIndex = nextStateIndex;
  }
}

try {
  main();
  // start at the top
  // watch
  // expression
} catch (error) {
  console.error(error)
}
/**
 * The output should be:

0 The traffic light is now green
1 The traffic light is now orange
2 The traffic light is now red
3 The traffic light is now green
4 The traffic light is now orange
5 The traffic light is now red

*/
