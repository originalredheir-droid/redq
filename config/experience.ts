import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  // Add your experience here following the ExperienceInterface structure
  // Example:
  // {
  //   id: "company1",
  //   position: "Senior Developer",
  //   company: "Tech Company",
  //   location: "City, Country",
  //   startDate: new Date("2023-01-01"),
  //   endDate: "Present",
  //   description: [
  //     "Built and shipped features",
  //     "Led team initiatives"
  //   ],
  //   achievements: [
  //     "Improved performance by 50%"
  //   ],
  //   skills: ["React", "TypeScript", "Node.js"],
  //   companyUrl: "https://company.com",
  //   logo: "/experience/logo.png"
  // }
];
