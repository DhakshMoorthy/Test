import "./Layout.css";
import "./tailwind.css";
import "./theme-overrides.css";
import SiteNav from "../components/layout/SiteNav";
import SiteFooter from "../components/layout/SiteFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <SiteNav />
      <div className="pt-[72px] sm:pt-[80px]">{children}</div>
      <SiteFooter />
    </div>
  );
}
