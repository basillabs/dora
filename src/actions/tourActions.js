import {
  SET_TOUR,
} from '../constants/actionTypeConstants';

export default function setTour(tourId) {
  let tour = require('json!../data/tours/tour_${tourId}/tour.json');
  let locations = tour.locations;

  return {
    type: SET_TOUR,
    tourId,
    tour,
    locations
  };
}
