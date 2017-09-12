export function requireImage(tourId, imageName) {
  /* eslint global-require: 0 */
  switch (tourId) {
    case 0:
      switch (imageName) {
        case 'location_0.png':
          return require('../data/tours/tour_0/images/location_0.png');
        case 'location_1.png':
          return require('../data/tours/tour_0/images/location_1.png');
        case 'location_2.png':
          return require('../data/tours/tour_0/images/location_2.png');
        case 'location_3.png':
          return require('../data/tours/tour_0/images/location_3.png');
        case 'location_4.png':
          return require('../data/tours/tour_0/images/location_4.png');
        case 'location_5.png':
          return require('../data/tours/tour_0/images/location_5.png');
        case 'vive-la-tarte':
          return require('../data/tours/tour_0/images/vive-la-tarte.jpg');
        case 'chez-maman':
          return require('../data/tours/tour_0/images/chez-maman.jpg');
        case 'sweet-maple':
          return require('../data/tours/tour_0/images/sweet-maple.jpg');
        case 'salt-and-straw':
          return require('../data/tours/tour_0/images/salt-and-straw.jpg');
        case 'mr-holmes-bakehouse':
          return require('../data/tours/tour_0/images/mr-holmes-bakehouse.jpg');
        case 'trestle':
          return require('../data/tours/tour_0/images/trestle.jpg');
        default:
          return 'not found';
      }
    default:
      return 'not found';
  }
}
export default requireImage;
