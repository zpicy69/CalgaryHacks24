import { LandingNavbar } from "@/components/landing-navbar";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return(
    <div className="h-full">
      <UserButton afterSignOutUrl="/" />
      <LandingNavbar />
    </div>
  );
}