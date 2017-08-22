import {
  SET_TOUR,
} from '../constants/actionTypeConstants';

const defaultState = {
  tourId: 0,
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TOUR:
      return Object.assign({}, state, {
        tourId: action.tourId,
      });
    default:
      return state;
  }
}