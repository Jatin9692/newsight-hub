
export interface Resource {
  title: string;
  category: string;
  description: string;
  link: string;
}

export const resourcesData: Resource[] = [
  {
    title: "Desygner",
    category: "AI Tools",
    description: "comprehensive AI text and image creation platform with advanced features.",
    link: "https://desygner.com/ai-powered-design/"
  },
  {
    title: "Picktochart",
    category: "Design Tools",
    description: "quality infographics from any prompt—no design expertise needed.",
    link: "https://piktochart.com/generative-ai/"
  },
  {
    title: "Khan Academy",
    category: "Education",
    description: "Free educational platform providing lessons on subjects from basic math to economics, finance, and computer programming.",
    link: "https://www.khanacademy.org/"
  },
  {
    title: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for note-taking, project management, and organizing information. Popular among students and professionals alike.",
    link: "https://www.notion.so/"
  },
  {
    title: "Consensus",
    category: "Education",
    description: "AI-powered academic search engine",
    link: "https://consensus.app/"
  },
  {
    title: "Grammarly",
    category: "Writing Tools",
    description: "Writing assistant that helps with grammar, spelling, and style. Essential for students and professionals who want to improve their writing quality.",
    link: "https://www.grammarly.com/"
  }
];
