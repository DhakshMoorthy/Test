import "./Layout.css";
import "./tailwind.css";
import "./theme-overrides.css";
import SiteNav from "../components/layout/SiteNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root" className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="pt-[76px] sm:pt-[88px] lg:pt-[96px]">{children}</div>
    </div>
  );
}
