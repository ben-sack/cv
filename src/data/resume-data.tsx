import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ben Sack",
  initials: "BS",
  location: "Venice, CA",
  locationLink: "https://www.google.com/maps/place/Venice,CA",
  about: "Data/Platform Engineer",
  summary:
    "Engineer focused on building reliable systems and making complex things easier to run.",
    avatarUrl: "https://i.ibb.co/PGL9VN3R/ppic.jpg",
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
        "Support Fortune 500 manufacturers on Databricks, with a focus on streaming architecture, DevOps pipelines, and stabilizing production workloads."
      },
    {
      company: "Disney Streaming",
      link: "https://disneyplus.com",
      badges: ["Hybrid"],
      title: "Senior ML Platform Engineer",
      start: "2024",
      end: "2025",
      description:
        "Built parts of the recommendation backend and real-time feature store for the Hulu on Disney+ integration, and served as a subject matter expert for the in-house feature store.",
    },
    {
      company: "Disney Streaming",
      link: "https://disneyplus.com",
      badges: ["Hybrid"],
      title: "Senior Data Engineer",
      start: "2022",
      end: "2024",
      description:
        "Built pipelines for subscriber metrics and trend reporting across Disney+, Hulu, and ESPN. Designed Fig, a config-driven ETL framework adopted across the data organization, and led CI/CD practices for the team.",
    },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: ["Remote"],
      title: "Data Engineer → Senior Data Engineer",
      start: "2020",
      end: "2022",
      description:
        "Led key parts of Progressive's migration from on-prem to cloud and helped design the big data platform still in use.",
    },
    {
      company: "Progressive Insurance",
      link: "https://progressive.com",
      badges: [],
      title: "Associate Systems Engineer → Systems Engineer",
      start: "2018",
      end: "2020",
      description:
        "Managed on-prem and cloud infrastructure, resolved production issues, and automated recurring operational tasks to improve reliability.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Spark",
    "Structured Streaming",
    "Snowflake",
    "AWS",
    "Databricks",
    "Airflow",
    "MLflow",
    "Feature Stores",
    "Kafka",
    "Docker",
    "Terraform",
    "CI/CD",
    "Javascript",
    "Go",
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
      techStack: ["Consulting", "Management", "Liquid", "Javascript", "Shopify"],
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
