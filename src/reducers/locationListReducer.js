import {
  SET_TOUR,
  TOGGLE_LOCATION,
} from '../constants/actionTypeConstants';

const defaultState = {
  locations: [],
};

function toggleLocation(locations, locationId) {
  return locations.map((location, index) => {
    if (index === locationId) {
      return {
        ...location,
        completed: !location.completed,
      };
    }
    return location;
  });
}

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TOUR:
      return {
        ...state,
        locations: action.locations,
      };

    case TOGGLE_LOCATION:
      return {
        ...state,
        locations: toggleLocation(state.locations, action.locationId),
      };
    default:
      return state;
  }
}
