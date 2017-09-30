export function requireImage(tourId, imageName) {
  /* eslint global-require: 0 */
  switch (tourId) {
    case 0:
      switch (imageName) {
        case 'bayview0.png':
          return require('../data/tours/tour_0/images/bayview0.png');
        case 'bayview1.png':
          return require('../data/tours/tour_0/images/bayview1.png');
        case 'location_2.png':
          return require('../data/tours/tour_0/images/bayview2.png');
        case 'castro0.png':
          return require('../data/tours/tour_0/images/castro0.png');
        case 'castro1.png':
          return require('../data/tours/tour_0/images/castro1.png');
        case 'castro2.png':
          return require('../data/tours/tour_0/images/castro2.png');
        case 'cathedral0':
          return require('../data/tours/tour_0/images/cathedral0.jpg');
        case 'cathedral1':
          return require('../data/tours/tour_0/images/cathedral1.jpg');
        case 'davidson0.png':
          return require('../data/tours/tour_0/images/davidson0.png');
        case 'davidson1.png':
          return require('../data/tours/tour_0/images/davidson1.png');
        case 'davidson2.png':
          return require('../data/tours/tour_0/images/davidson2.png');
        case 'glide0.png':
          return require('../data/tours/tour_0/images/glide0.png');
        case 'glide1.png':
          return require('../data/tours/tour_0/images/glide1.png');
        case 'glide2.png':
          return require('../data/tours/tour_0/images/glide2.png');
        case 'hya0.png':
          return require('../data/tours/tour_0/images/hya0.png');
        case 'hya1.png':
          return require('../data/tours/tour_0/images/hya1.png');
        case 'landsend0.png':
          return require('../data/tours/tour_0/images/landsend0.png');
        case 'sfch0.png':
          return require('../data/tours/tour_0/images/sfch0.png');
        case 'sfch1.png':
          return require('../data/tours/tour_0/images/sfch1.png');
        default:
          return 'not found';
      }
    default:
      return 'not found';
  }
}
export default requireImage;
