import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import LandingComponent from "./(nondashboard)/landing/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="nondashboard-layout">
       <NonDashboardNavbar />
       <main className="nondashboard-layout__main">
        <LandingComponent />
      </main>
    </div>
  );
}
