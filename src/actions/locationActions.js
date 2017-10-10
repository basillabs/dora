import {
  SET_LOCATION,
} from '../constants/actionTypeConstants';

export default function setLocation(locationId) {
  return {
    type: SET_LOCATION,
    locationId,
  };
}
