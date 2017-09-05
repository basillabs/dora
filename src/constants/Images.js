export function requireImage(imageName) {
  switch (imageName) {
    case "tour_0/location_0.png":
      return require("../data/tours/tour_0/images/location_0.png")
    case "tour_0/location_1.png":
      return require("../data/tours/tour_0/images/location_1.png")
    case "tour_0/location_2.png":
      return require("../data/tours/tour_0/images/location_2.png")
    case "tour_0/location_3.png":
      return require("../data/tours/tour_0/images/location_3.png")
    case "tour_0/location_4.png":
      return require("../data/tours/tour_0/images/location_4.png")
    case "tour_0/location_5.png":
      return require("../data/tours/tour_0/images/location_5.png")
    case "vive-la-tarte":
      return require("../data/tours/tour_0/images/vive-la-tarte.jpg");
    case "chez-maman":
      return require("../data/tours/tour_0/images/chez-maman.jpg");
    case "sweet-maple":
      return require("../data/tours/tour_0/images/sweet-maple.jpg");
    case "salt-and-straw":
      return require("../data/tours/tour_0/images/salt-and-straw.jpg");
    case "mr-holmes-bakehouse":
      return require("../data/tours/tour_0/images/mr-holmes-bakehouse.jpg");
    case "trestle":
      return require("../data/tours/tour_0/images/trestle.jpg");
  }
}
