import "./Layout.css";
import "./tailwind.css";
import "./robotic.css";
import SiteNav from "../components/layout/SiteNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="pt-[64px] sm:pt-[72px] lg:pt-[80px]">{children}</div>
    </div>
  );
}
