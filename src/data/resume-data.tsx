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
  about: "Full Stack Engineer",
  summary:
    "Seasoned developer skilled in Python, adept at automating complex processes with a proven track record in designing and building robust data pipelines. Proactive problem solver, continuously seeking to optimize. Interested in distributed systems, cloud architecture, and developer operations. Passionate about fostering a positive company culture and maintaining a healthy work-life balance.",
    avatarUrl: "https://media.licdn.com/dms/image/D5603AQH_PDgueSCEWA/profile-displayphoto-shrink_800_800/0/1689965278426?e=1709769600&v=beta&t=8v6f8rD4t1yYxzFsXH1hLdMyUB6Hve1bKaEmS4raHbE", 
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
        url: "https://www.linkedin.com/in/ben-sack",
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
      badges: ["Hybrid"],
      title: "Senior Data Engineer",
      start: "2022",
      end: "Current",
      description:
        "Work directly on the core Subscriber team, building complex pipelines to handle multiple data sources from different platforms, such as Disney+, Hulu, ESPN. Built a vendor-agnostic config driven ETL Framework in Python, leveraging industry-leading tools such as PySpark, Snowpark, Pydantic, etc. Quickly became the Subject Matter Expert in Developer Operations, modernizing how the entire data org implements CI/CD",
    },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: ["Remote"],
      title: "Data Engineer → Senior Data Engineer",
      start: "2020",
      end: "2022",
      description:
        "Promoted within one year for executing senior to lead level work. Updated old code bases to modern development standards. Collaborated with project managers to select ambitious, but realistic KPIs. Developed automated continuous deployment and integration pipelines to test, lint, and deploy code with 100% coverage. Built end-to-end highly-available infrastructure using Terraform, OpenStack, and AWS.",
    },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: [],
      title: "Associate Systems Engineer → Systems Engineer",
      start: "2018",
      end: "2020",
      description:
        "Maintained on-prem and cloud servers, including VMware instances. Diagnosed complex technical issues promptly to minimize downtime and enhance system reliability. Identified opportunities for process improvement, implementing automation solutions to streamline routine tasks and enhance operational efficiency.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Spark",
    "Snowflake",
    "AWS",
    "Airflow",
    "Databricks",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Terraform",
    "Jenkins",
    "Git",
    "Javascript",
    "HTML",
    "CSS"
  ],
  projects: [
    {
      title: "Fig",
      techStack: [
        "Python",
        "Pydantic",
        "Pyspark",
        "Snowpark",
        "Databricks",
      ],
      logo: ConsultlyLogo,
      description: "Internal [Disney] framework to structure and deploy data pipelines",
      link: {
        label: "Disney",
        href: "https://disneystreaming.com/",
      },
    },
    {
      title: "Bristol Studios",
      techStack: ["Consulting", "Liquid", "Javascript", "Shopify"],
      description:
        "Luxury athlesure brand with a primary focus on Basketball",
      logo: MonitoLogo,
      link: {
        label: "bristol-studio.com",
        href: "https:/bristol-studio.com/",
      },
    },
    {
      title: "Streets Ahead",
      techStack: ["Consutling", "Management", "Liquid", "Javascript", "Shopify"],
      description:
        "Luxury brand focused on leather goods made in the USA",
      logo: JarockiMeLogo,
      link: {
        label: "streetsaheadinc.com",
        href: "https://streetsaheadinc.com/",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Personal", "Javascript", "React", "FastAPI", "AWS"],
      description:
        "Full-stack personal website built with learning in mind",
      logo: Minimal,
      link: {
        label: "bensack.io",
        href: "http://bensack.io/",
      },
    },
    {
      title: "Literally Balling",
      techStack: ["Side Project", "Liquid", "Javascript", "Shopify"],
      description:
        "Luxury basketball brand with focused on custom-made garments and accessories",
      logo: BarepapersLogo,
      link: {
        label: "literallyballing.com",
        href: "https://literallyballing.com/",
      },
    },
  ],
} as const;
