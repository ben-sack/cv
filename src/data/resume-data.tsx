import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ben Sack",
  initials: "BS",
  location: "Venice, CA",
  locationLink: "https://www.google.com/maps/place/Venice,CA",
  about: "Specialist Solutions Architect",
  summary:
    "Data engineer. I spend half my time thinking about big data, and half my time thinking about how to make complex systems less complex — with the occasional Shopify store on the side.",
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
        "Specialist supporting Fortune 500 manufacturers in the MFG vertical. I get called in for the complex stuff — structured streaming architectures, DevOps pipelines, and unblocking production workloads on the Databricks Lakehouse."
      },
    {
      company: "Disney Streaming",
      link: "https://disneyplus.com",
      badges: ["Hybrid"],
      title: "Senior ML Platform Engineer",
      start: "2024",
      end: "2025",
      description:
        "ML Platform team — helped build the backend recommendation system and real-time feature store powering the Hulu on Disney+ integration. Also the org's go-to SME for the in-house feature store.",
    },
    {
      company: "Disney Streaming",
      link: "https://disneyplus.com",
      badges: ["Hybrid"],
      title: "Senior Data Engineer",
      start: "2022",
      end: "2024",
      description:
        "Core Subscriber Data Solutions team — built the pipelines behind subscriber metrics and trend reporting across Disney+, Hulu, and ESPN. Designed an internal config-driven ETL framework (Fig) adopted across the data org, and became the team's go-to for CI/CD.",
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
