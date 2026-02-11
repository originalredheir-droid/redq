export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  // Add your open-source contributions here
  // Example:
  // {
  //   repo: "my-repo",
  //   contibutionDescription: "Fixed critical bug in auth system",
  //   repoOwner: "organization/user",
  //   link: "https://github.com/org/repo/pull/123"
  // }
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
