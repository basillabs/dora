import {
  SET_TOUR,
} from '../constants/actionTypeConstants';

export default function setTour(tourId) {
  return {
    type: SET_TOUR,
    tourId,
  };
}
