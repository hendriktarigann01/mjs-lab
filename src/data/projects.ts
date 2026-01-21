export interface Project {
  projectNumber: string;
  subtitle: string;
  title: string;
  description: string;
  demoLink: string;
  demoLinkDescription: string;
  images: string[];
}

export const projects: Project[] = [
  {
    projectNumber: "01",
    subtitle: "Find the Right Path, Faster",
    title: "3D WAYFINDING MAPS",
    description:
      "Interactive 3D maps that simplify navigation and help customers reach their destination with ease no confusion, no wrong turns.",
    demoLink: "https://lab.mjsolution.co.id/Interactive3DMallMap/index",
    demoLinkDescription: "Explore 3D Wayfinding Maps",
    images: [
      "/projects/map/1.png",
      "/projects/map/2.png",
      "/projects/map/3.png",
    ],
  },
  {
    projectNumber: "02",
    subtitle: "A Seamless Movie Booking Experience",
    title: "CINEMA BOOKING",
    description:
      "An end-to-end cinema booking experience that feels effortless. Clear schedules, real-time seat availability, and a smooth checkout process create a better journey before the movie even starts.",
    demoLink: "https://lab.mjsolution.co.id/TheatreSeatBooking/index",
    demoLinkDescription: "Explore Cinema Booking",
    images: [
      "/projects/cinema/1.png",
      "/projects/cinema/2.png",
      "/projects/cinema/3.png",
    ],
  },
  {
    projectNumber: "03",
    subtitle: "Explore Beyond Physical Boundaries",
    title: "VIRTUAL TOUR 360",
    description:
      "An immersive virtual tour experience that brings distant places closer allowing users to explore environments in a more engaging and intuitive way.",
    demoLink: "https://lab.mjsolution.co.id/VirtualTour/index",
    demoLinkDescription: "Explore Virtual Tour 360",
    images: [
      "/projects/virtual-tour/1.png",
      "/projects/virtual-tour/2.png",
      "/projects/virtual-tour/3.png",
    ],
  },
  {
    projectNumber: "04",
    subtitle: "Products Presented with Clarity",
    title: "PRODUCT SHOWCASE",
    description:
      "A flexible showcase platform built to communicate product information more effectively through visual hierarchy, structured layouts, and intuitive interaction.",
    demoLink: "https://product-showcase-mjs.vercel.app/",
    demoLinkDescription: "Explore Product Showcase",
    images: [
      "/projects/product-showcase/1.png",
      "/projects/product-showcase/2.png",
      "/projects/product-showcase/3.png",
    ],
  },
  {
    projectNumber: "05",
    subtitle: "Smart Configuration Tool",
    title: "LED & LCD CONFIGURATOR",
    description:
      "An LED calculation and visualization platform that helps sales and clients obtain optimal screen sizes, accurate calculations, and ready-to-use proposal outputs.",
    demoLink: "https://www.configurator.mjsolution.co.id/",
    demoLinkDescription: "Explore LED & LCD Configurator",
    images: [
      "/projects/configurator/1.png",
      "/projects/configurator/2.png",
      "/projects/configurator/3.png",
    ],
  },
  {
    projectNumber: "06",
    subtitle: "Discover Your Zodiac, Play Your Luck",
    title: "SHIO",
    description:
      "A Chinese zodiac-themed game app that provides brief horoscopes and light mini-games based on the 12 Chinese zodiac signs.",
    demoLink: "https://example.com/shio",
    demoLinkDescription: "Explore Shio  ",
    images: [
      "/projects/shio/1.png",
      "/projects/shio/2.png",
      "/projects/shio/3.png",
    ],
  },
];
