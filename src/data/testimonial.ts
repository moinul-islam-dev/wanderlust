export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Traveler",
    location: "Singapore",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    message:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Adventure Traveler",
    location: "Australia",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    message:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Travel Enthusiast",
    location: "United States",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    message:
      "Our Thailand Vacation Was Simply Amazing! From Beautiful Beaches To Delicious Local Food, Everything Was Perfectly Organized. We Can't Wait To Travel Again!",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Solo Traveler",
    location: "United Kingdom",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    message:
      "Exploring Japan Was A Dream Come True. The Itinerary Was Well Planned, The Hotels Were Comfortable, And Every Experience Felt Special. Absolutely Loved It!",
  },
  {
    id: 5,
    name: "Daniel Kim",
    role: "Family Traveler",
    location: "South Korea",
    image: "https://i.pravatar.cc/150?img=14",
    rating: 5,
    message:
      "Our Family Trip To Dubai Was Fantastic! Everything Was Smooth From Start To Finish. The Desert Safari And City Tours Were Highlights Of Our Entire Vacation.",
  },
  {
    id: 6,
    name: "Olivia Martinez",
    role: "Travel Blogger",
    location: "Spain",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    message:
      "Greece Was Beyond Beautiful! The Island Views, Amazing Hotels, And Wonderful Local Experiences Made This Trip Unforgettable. Excellent Service Throughout!",
  },
];
