import { Icons } from "@/components/icons";
import { HomeIcon, FolderIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Mohit Khairnar",
  initials: "MK",
  url: "https://www.mohit.codes/",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description: "Writing code that compiles and jokes that don’t ... mostly :D",
  summary:
    "Hi! I'm Mohit Khairnar, a 21 year old developer from Mumbai, India, specializing in full stack web and mobile app development. I love solving problems, working on creative ideas, and collaborating with others. Currently, I'm open to freelance work, collaborations, and new opportunities. Feel free to connect!.",

  avatarUrl: "/profile.webp",
  resumeUrl:
    "https://drive.google.com/file/d/1SSgLfVQsS5n0mw4G3-81cQXryBm4wRIi/view?usp=drive_link",

  skills: [
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "Flutter",
    "Next.js",
    "React",
    "Tailwind",
    "Node.js",
    "Express",
    "Inngest",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "Prisma",
    "Git",
    "Figma",
    "Docker",
    "Kubernetes",
    "AWS",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "RESUME_URL", icon: FileTextIcon, label: "Resume", external: true },
  ],

  contact: {
    email: "mohitkhairnar28@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mohitooo28",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohit-khairnar-dev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mohitooo_",
        icon: Icons.x,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/mohitooo/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mohitkhairnar28@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Atharva College of Engineering",
      href: "https://atharvacoe.ac.in/",
      degree: "B.E in Information Technology",
      logoUrl: "/logo/ace_logo.webp",
      start: "2023",
      end: "2026",
    },
    {
      school: "Bhausaheb Vartak Polytechnic, Vasai",
      href: "https://vbvp.edu.in/",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/logo/bvp_logo.webp",
      start: "2020",
      end: "2023",
    },
  ],

  experience: [
    {
      company: "Branding Catalyst",
      href: "https://in.linkedin.com/company/branding-cataly",
      role: "App Developer Intern",
      logoUrl: "/logo/bc_logo.webp",
      start: "Jul 2022",
      end: "Oct 2022",
      description:
        "Built the UI for a salon slot booking system in Flutter, enhancing scheduling flow, performance, and overall user experience.",
    },
  ],

  projects: [
    // VelocityAI
    {
      title: "VelocityAI",
      active: true,
      description:
        "A Perplexity clone - AI-powered search and discovery platform with real-time insights and comprehensive analysis. Features multi-source discovery, smart categorization, and intelligent summaries powered by Google Gemini AI.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Inngest",
        "Google Gemini AI",
        "Brave API",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://velocity-ai-search.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://private-user-images.githubusercontent.com/177295063/473708490-027e8cbd-4a13-4b59-abc9-15f093b30197.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ2NDYyMTMsIm5iZiI6MTc1NDY0NTkxMywicGF0aCI6Ii8xNzcyOTUwNjMvNDczNzA4NDkwLTAyN2U4Y2JkLTRhMTMtNGI1OS1hYmM5LTE1ZjA5M2IzMDE5Ny5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwOFQwOTM4MzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYmQxYzAyODIyYjJmYzUzYzk3ZTA5NTdmZTQ5YmEyMjE3NWM2MGJkZWMyMWQwOTI3YWZlMTgyYjk0NWI0N2Y1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6uDQ8n8zyrEP6CChqQoC6NB6DZMol-I4D10kCmsNvUY",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/VelocityAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/velocity_poster.webp",
    },

    // Unpapered
    {
      title: "Unpapered",
      active: false,
      description:
        "A modern Flutter app for smart PDF interaction using Google Gemini AI. Offers PDF chat, real-time WebSocket communication, advanced text extraction, semantic search, and secure Firebase authentication.",
      technologies: [
        "Flutter",
        "Dart",
        "FastAPI",
        "Python",
        "Google Gemini AI",
        "Firebase",
        "LangChain",
        "FAISS",
        "PyPDF2",
        "GetX",
        "WebSocket",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/Unpapered",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/unpapered_poster.webp",
    },

    // ZipLink
    {
      title: "ZipLink",
      active: true,
      description:
        "A lightning-fast, secure P2P file sharing platform using WebRTC for direct browser-to-browser transfer. Supports multi-file sharing, real-time progress tracking, strong security, and no file size limits.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Socket.IO",
        "WebRTC",
        "Tailwind CSS",
        "Zustand",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "http://ziplink-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/ZipLink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/ziplink_poster.webp",
    },

    // ShrinkR
    {
      title: "ShrinkR",
      active: true,
      description:
        "A secure and modern URL shortener with custom IDs, QR codes, real-time click tracking, visit history, and strong protection via rate limiting and malicious link detection. Includes detailed analytics.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Axios",
        "Helmet.js",
        "Nanoid",
      ],
      links: [
        {
          type: "Website",
          href: "http://shrink-r.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/ShrinkR",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/shrinkr_poster.webp",
    },

    // YouTube Video Clipper
    {
      title: "YouTube Video Clipper",
      active: false,
      description:
        "A powerful CLI tool to extract high-quality YouTube clips with precise timestamps, smart format detection, 4K support, interactive interface, automatic optimization, and intelligent file naming for convenience.",
      technologies: [
        "Python",
        "yt-dlp",
        "FFmpeg",
        "CLI",
        "WebM",
        "MP4",
        "RegEx",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/youtube_video_clipper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/yt_converter_poster.webp",
    },

    // Taboo
    {
      title: "Taboo",
      active: false,
      description:
        "A fast-paced offline Flutter party game where players guess words without taboo clues. Includes custom/preset cards, team scoring, timer, modern UI, SVG, Lottie, haptics, and smart tracking.",
      technologies: ["Flutter", "Dart", "GetX", "Lottie", "JSON", "Android"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/Taboo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/taboo_poster.webp",
    },

    // DocDial
    {
      title: "DocDial",
      active: false,
      description:
        "A Flutter app for smooth doctor-patient interaction, bookings, and chat. Features doctor search, smart scheduling, reviews, role-based access, Firebase backend, offline support, analytics, and a modern UI.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Firestore",
        "Google Maps API",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/DocDial",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/docdial_poster.webp",
    },

    // BrokerSpace
    {
      title: "BrokerSpace",
      active: false,
      description:
        "A Flutter real estate app for brokers to share properties, connect, and grow business. Supports Android, iOS, Web, with Firebase backend, real-time chat, location, mandate ads, and 25+ screens.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Firestore",
        "OpenStreetMap",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.brokerspace-cpp.web.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "#",
          icon: <Icons.play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mohitooo28/BrokerSpace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/posters/brokerspace_poster.webp",
    },
  ],
} as const;
