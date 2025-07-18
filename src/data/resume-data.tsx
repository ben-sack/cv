import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ben Sack",
  initials: "BS",
  location: "Venice, CA",
  locationLink: "https://www.google.com/maps/place/Venice,CA",
  about: "Full Stack Engineer",
  summary:
    // "Seasoned developer focused on big data. Interested in distributed systems, cloud architecture, and developer operations. Passionate about fostering a positive company culture and maintaining a healthy work-life balance.",
    "Just a guy who likes to code.",
    avatarUrl: "https://i.ibb.co/YBRT0YJ/Screenshot-2024-08-12-at-1-50-43-AM.png", 
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
      company: "Databricks",
      link: "https://databricks.com",
      badges: ["Remote"],
      title: "Specialist Solutions Architect",
      start: "2025",
      end: "Current",
      description:
        "Data engineering specialist supporting the F-500 manufacturing vertical. Solving complex data problems at scale. SME in structured streaming and distributed processing."
      },
    {
      company: "Disney Streaming",
      link: "https://disneyplus.com",
      badges: ["Hybrid"],
      title: "Senior Data Engineer",
      start: "2022",
      end: "2025",
      description:
        // "Work on the core Subscriber team, building complex pipelines to handle multiple data sources from different platforms, such as Disney+, Hulu, ESPN. Built a vendor-agnostic config driven ETL Framework in Python, leveraging industry-leading tools such as PySpark, Snowpark, Pydantic, etc. Quickly became the Subject Matter Expert in Developer Operations, modernizing how the entire data org implements CI/CD",
        "Machine Learning Platform –– Build, design, and maintain the services and infrastructure for all ML fueled applications at Disney Streaming, such as recommendations, search, etc."
      },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: ["Remote"],
      title: "Data Engineer → Senior Data Engineer",
      start: "2020",
      end: "2022",
      description:
        "Data Platform –– Lead the migration from on-prem to the cloud. Assisted in designing and implementing the cloud stack currently used for big data at Progressive.",
    },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: [],
      title: "Associate Systems Engineer → Systems Engineer",
      start: "2018",
      end: "2020",
      description:
        "Maintained on-prem and cloud servers. Diagnosed complex technical issues promptly to minimize downtime and enhance system reliability. Identified opportunities for process improvement, implementing automation solutions to streamline routine tasks and enhance operational efficiency.",
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
      // logo:,
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
        "Athlesure brand with a primary focus on Basketball",
      // logo:,
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
      // logo:,
      link: {
        label: "streetsaheadinc.com",
        href: "https://streetsaheadinc.com/",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Personal", "Javascript", "React", "FastAPI", "AWS"],
      description:
        "Personal website",
      // logo:,
      link: {
        label: "bensack.io",
        href: "http://bensack.io/",
      },
    },
    {
      title: "Literally Balling",
      techStack: ["Consulting", "Liquid", "Javascript", "Shopify"],
      description:
        "Basketball brand focused on handmade garments and collectibles",
      // logo:,
      link: {
        label: "literallyballing.com",
        href: "https://literallyballing.com/",
      },
    },
  ],
} as const;
