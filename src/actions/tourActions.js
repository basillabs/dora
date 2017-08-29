import {
  SET_TOUR,
} from '../constants/actionTypeConstants';

const TOUR_0 = require('../data/tours/tour_0/tour.json');

const setTour = tourId => (dispatch) => {
  const locations = TOUR_0.locations;

  dispatch({
    type: SET_TOUR,
    tourId,
    tour: TOUR_0,
    locations,
  });
};

export default setTour;
