import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  // Add your projects here following the ProjectInterface structure
  // Example:
  // {
  //   id: "my-project",
  //   companyName: "Project Name",
  //   type: "Personal",
  //   category: ["Web Dev", "Frontend"],
  //   shortDescription: "Project description",
  //   websiteLink: "https://example.com",
  //   githubLink: "https://github.com/username/repo",
  //   techStack: ["Next.js", "React", "Typescript"],
  //   startDate: new Date("2024-01-01"),
  //   endDate: new Date("2024-12-01"),
  //   companyLogoImg: "/path/to/logo.png",
  //   descriptionDetails: {
  //     paragraphs: ["Description paragraph"],
  //     bullets: ["Feature 1", "Feature 2"]
  //   },
  //   pagesInfoArr: []
  // }
];

export const featuredProjects = Projects.slice(0, 3);
