import { redirect } from "next/navigation";

export default function ResumePage() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;
  
  if (!resumeLink) {
    redirect("/");
  }
  
  redirect(resumeLink);
}
