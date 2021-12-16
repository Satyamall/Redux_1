// action creator
// it is a function
// which returns an object
// that defines the action
// an action is an object with a key called type,
// to define what type of action it is

import { ADD_COUNTER, REDUCE_COUNTER } from "./actionTypes";

// payload, etc
const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload
  };
};

const reduceCounter = (payload) => {
  return {
    type: REDUCE_COUNTER,
    payload
  };
};

export { addCounter, reduceCounter };
