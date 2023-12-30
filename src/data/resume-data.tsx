import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ben Sack",
  initials: "BS",
  location: "Venice, CA",
  locationLink: "https://www.google.com/maps/place/Venice,CA",
  about: "Full Stack Engineer with a focus on big data.",
  summary:
    "Seasoned engineer skilled in Python, adept at automating complex processes with a proven track record in designing and building robust data pipelines. Proactive problem solver, continuously seeking to optimize. Interested in distributed systems, cloud architecture, and developer operations. Passionate about fostering a positive company culture and maintaining a healthy work-life balance.",
  avatarUrl: "https://your-avatar-url.com", // Replace with your avatar URL
  personalWebsiteUrl: "https://bensack.io",
  contact: {
    email: "contact@bensack.io",
    tel: "310-498-0030",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ben-sack",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bensack",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/bensack_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Indiana University, Bloomington",
      degree: "Bachelor of Science, Computer Science",
      minors: "Double minor in Marketing & Business at the Kelley School of Business",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Disney Streaming",
      link: "https://disneyplus.com",
      badges: [],
      title: "Senior Data Engineer",
      start: "2022",
      end: "Current",
      description:
        "Work directly on the core Subscriber team, building complex pipelines to handle multiple data sources from different platforms, such as Disney+, Hulu, ESPN. Built a vendor-agnostic config driven ETL Framework in Python, leveraging industry-leading tools such as PySpark, Snowpark, Pydantic, etc. Quickly became the Subject Matter Expert in Developer Operations, modernizing how the entire data org implements CI/CD",
    },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: [],
      title: "Senior Data Platform Engineer",
      start: "2020",
      end: "2022",
      description:
        "Promoted within one year for executing senior to lead level work. Updated old code bases to modern development standards. Collaborated with project managers to select ambitious, but realistic KPIs. Developed automated continuous deployment and integration pipelines to test, lint, and deploy code with 100% coverage. Built end-to-end highly-available infrastructure using Terraform, OpenStack, and AWS.",
    },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: [],
      title: "Systems Engineer",
      start: "2018",
      end: "2020",
      description:
        "Maintained on-prem and cloud servers, including VMware instances. Diagnosed complex technical issues promptly to minimize downtime and enhance system reliability. Identified opportunities for process improvement, implementing automation solutions to streamline routine tasks and enhance operational efficiency.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "CI/CD",
    "Snowflake",
    "AWS",
    "Databricks",
    "Docker",
    "Airflow",
    "Spark",
    "Kafka",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
