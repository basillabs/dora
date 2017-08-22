import {
  TOGGLE_LOCATION,
} from '../constants/actionTypeConstants';

const defaultState = [
  {
    "name": "Boba Guys",
    "completed": false,
  },
  {
    "name": "I-tea",
    "completed": false,
  }
];

export default function(state = defaultState, action = {}) {
  switch (action.type) {
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
