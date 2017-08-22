import {
  SET_TOUR,
} from '../constants/actionTypeConstants';

const defaultState = {
  tourId: 0,
  tour: {}
  locations: []
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TOUR:
      return Object.assign({}, state, {
        tourId: action.tourId,
        tour: action.tour,
        locations: action.locations
      });
    default:
      return state;
  }
}
