import {
  TOGGLE_LOCATION,
} from '../constants/actionTypeConstants';

const defaultState = {
  locations: [],
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TOUR:
      return Object.assign({}, state, {
        locations: action.locations
      });

    case TOGGLE_LOCATION:
      return state.map((location, index) => {
        if (index === action.locationId) {
          return Object.assign({}, location, {
            completed: !location.completed
          });
        }
        return location;
      });
    default:
      return state;
  }
}
