export function requireImage(imageName) {
  /* eslint global-require: 0 */
  switch (imageName) {
    case 'tour_0/location_0.png':
      return require('../data/tours/tour_0/images/location_0.png');
    case 'tour_0/location_1.png':
      return require('../data/tours/tour_0/images/location_1.png');
    case 'tour_0/location_2.png':
      return require('../data/tours/tour_0/images/location_2.png');
    case 'tour_0/location_3.png':
      return require('../data/tours/tour_0/images/location_3.png');
    case 'tour_0/location_4.png':
      return require('../data/tours/tour_0/images/location_4.png');
    case 'tour_0/location_5.png':
      return require('../data/tours/tour_0/images/location_5.png');
    default:
      return require('../data/tours/tour_0/images/location_0.png');
  }
}
export default requireImage;
