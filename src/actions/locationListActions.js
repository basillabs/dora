import {
  TOGGLE_LOCATION,
} from '../constants/actionTypeConstants';

export function toggleLocation(locationId) {
  return {
    type: TOGGLE_LOCATION,
    locationId,
  };
}
