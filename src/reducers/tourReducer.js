import {
  SET_TOUR,
} from '../constants/actionTypeConstants';

const defaultState = {
  tourId: 0,
  currentLocation: 2,
  tour: {},
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TOUR:
      return {
        ...state,
        tourId: action.tourId,
        tour: action.tour,
        tourName: action.tourName,
      };
    default:
      return state;
  }
}
