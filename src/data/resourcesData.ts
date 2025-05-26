
export interface Resource {
  title: string;
  category: string;
  description: string;
  link: string;
}

export const resourcesData: Resource[] = [
  {
    title: "ChatGPT",
    category: "AI Tools",
    description: "comprehensive AI text and image creation platform with advanced features.",
    link: "https://desygner.com/ai-powered-design/"
  },
  {
    title: "Canva",
    category: "Design Tools",
    description: "A free graphic design platform that allows users to create professional-looking presentations, social media graphics, and more without design experience.",
    link: "https://www.canva.com/"
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
    description: "Platform offering free courses from top universities and companies. Great for expanding knowledge in business, technology, and more.",
    link: "https://www.coursera.org/"
  },
  {
    title: "Grammarly",
    category: "Writing Tools",
    description: "Writing assistant that helps with grammar, spelling, and style. Essential for students and professionals who want to improve their writing quality.",
    link: "https://www.grammarly.com/"
  }
];
