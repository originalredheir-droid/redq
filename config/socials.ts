import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@red001001",
    icon: Icons.gitHub,
    link: "https://github.com/red001001",
  },
  {
    name: "LinkedIn",
    username: "Abhishek ekka",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/abhishek-ekka-redq",
  },
  {
    name: "Twitter",
    username: "@AbhishekREDQ",
    icon: Icons.twitter,
    link: "https://x.com/AbhishekREDQ",
  },
  {
    name: "Gmail",
    username: "originalredheir",
    icon: Icons.gmail,
    link: "mailto:originalredheir@gmail.com",
  },
];
