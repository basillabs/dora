import {
  SET_TOUR,
  TOGGLE_LOCATION,
} from '../constants/actionTypeConstants';

const defaultState = {
  locations: [],
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TOUR:
      return {
        ...state,
        location: action.locations,
      };

    case TOGGLE_LOCATION:
      return state.locations.map((location, index) => {
        if (index === action.locationId) {
          return {
            ...location,
            completed: !location.completed,
          };
        }
        return location;
      });
    default:
      return state;
  }
}
