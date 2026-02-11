import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";

const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

function getGitHubRepoSlug(): string {
  try {
    const url = new URL(siteConfig.links.github);
    return url.pathname.replace(/^\/+/, "");
  } catch {
    // Fallback to your GitHub username
    return "red001001";
  }
}

async function getGitHubRepoStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) return null;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const repo = getGitHubRepoSlug();
  const stars = await getGitHubRepoStars(repo);

  return NextResponse.json({
    repo,
    url: siteConfig.links.github,
    stars,
  });
}
