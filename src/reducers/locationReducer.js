import {
  SET_LOCATION,
} from '../constants/actionTypeConstants';

const defaultState = {
  locationId: 0,
  completed: false,
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        locationId: !action.locationId,
      };
    default:
      return state;
  }
}
