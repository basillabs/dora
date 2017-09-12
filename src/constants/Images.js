export function requireImage(imageName) {
  /* eslint global-require: 0 */
  switch (imageName) {
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
}
export default requireImage;
