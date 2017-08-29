import setTour from './actions/tourActions';

export default function bootstrapStore(dispatch) {
  setTour(0)(dispatch);
}
