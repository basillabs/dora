import {
  SET_TOUR,
} from '../constants/actionTypeConstants';

const TOUR_0 = require('../data/tours/tour_0/tour.json');

export default function setTour(tourId) {
  // eslint-disable-line rule-name
  const tour = JSON.parse(TOUR_0);
  const locations = tour.locations;

  return {
    type: SET_TOUR,
    tourId,
    tour,
    locations,
  };
}
