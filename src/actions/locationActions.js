import {
  SET_LOCATION,
} from '../constants/actionTypeConstants';

export function setLocation(locationId) {
  return {
    type: SET_LOCATION,
    locationId,
  };
}
