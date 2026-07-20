import { Wifi, Battery, ToggleRight, CircleUserRound } from "lucide-react";


const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
    icon: "Wifi"
  },
  {
    id: 2,
    img: "/icons/search.svg",
    icon: "Search"
  },
  {
    id: 3,
    img: "/icons/user.svg",
    icon: "CircleUserRound"
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    icon: "ToggleRight"
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React JS", " JavaScript ES6", "Vannila JS"],
  },
  {
    category: "Styling",
    items: ["CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST Api", "JWT Auth"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  }, {
    category: "Design Tools",
    items: ["Figma", "Adobe XD", "Adobe Photoshop",],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/i-lokesh-saini",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "#",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "#",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/lokesh-saini-525a383a2/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/lokesh-3.jpg",
  },
  {
    id: 2,
    img: "/images/lokesh-5.jpg",
  },
  {
    id: 3,
    img: "/images/lokesh-6.jpg",
  },
  {
    id: 4,
    img: "/images/lokesh.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Expense Tracker",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] left-10", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Expense Tracker Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "• Built a full-stack personal finance application with secure JWT based authentication and bcrypt password hashing, protecting all user financial data",
            "• Designed an interactive analytics dashboard with Recharts, rendering bar, line, and pie charts for income/expense trends, including rolling 30- and 60-day summaries",
            "• Engineered RESTful APIs in Express.js/MongoDB for transaction CRUD operations; integrated Multer for profile image uploads and XLSX export for downloadable financial reports",
          ],
        },
        {
          id: 2,
          name: "Expense-tracker.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://expensetrackerbylokesh.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Expense-tracker.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/expense-tracker.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Digital Marketing Agency",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-20",
      children: [
        {
          id: 1,
          name: "Digital Marketing Agency Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "• Developed a responsive, multi-section marketing website with  dynamic routing for individual case-study pages via React Router",
            "• Built a reusable, data-driven component library (navigation, service cards, team profiles, testimonials) powered by a centralized content layer, cutting duplicate code across pages",
            "• Implemented a custom scroll-spy hook using the Intersection Observer API to sync navigation state with scroll position; added React Helmet Async for per-page SEO metadata",
          ],
        },
        {
          id: 2,
          name: "velocity-digital.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://velocity-digital-agency.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "velocity-digital.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/velocity-digital.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Air Draw",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[40vh] left-20",
      children: [
        {
          id: 1,
          name: "Air Draw Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "• Built a browser-baseddrawing app using MediaPipe Hands for real time hand tracking, rendering neon-style visual effects via the Canvas API",
            "• Implemented gesture-recognition logic mapping five hand poses (index finger, open palm, fist, pinch, thumbs-up) to draw, erase, pause, drag, and color-cycle actions",
            "• Designed a multi-layer canvas rendering pipeline (camera, glow, draw, overlay) with customizable brush size, glow intensity, color presets, and PNG export",
          ],
        },
        {
          id: 2,
          name: "air-draw.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://i-lokesh-saini.github.io/HandAirDraw/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "air-draw.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/air-draw.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/lokesh.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/lokesh-2.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/lokesh-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/lokesh.jpeg",
      description: [
        "Hey! I’m lokesh 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, HTML, CSS, React, Git, GitHub, Responsive Design, and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  WORK_LOCATION,
  ABOUT_LOCATION,
  RESUME_LOCATION,
  TRASH_LOCATION
};