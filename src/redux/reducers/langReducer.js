// src/reducers/profileReducer.js
import { SET_LANGUAGE } from '../actions/langActions';

const initialState = 'en';

// eslint-disable-next-line default-param-last
const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default langReducer;
