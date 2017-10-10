import {
  TOGGLE_LOCATION,
} from '../constants/actionTypeConstants';

export default function toggleLocation(locationId) {
  return {
    type: TOGGLE_LOCATION,
    locationId,
  };
}
