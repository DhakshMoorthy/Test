import Image from "next/image";
import Link from "next/link";
import { SITE, NAV } from "@/lib/constants";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/10 py-20 lg:py-28">
      <div className="container-xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={160}
              height={64}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-base text-white/50">
              {SITE.description}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Navigate
              </p>
              <ul className="space-y-3">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Contact
              </p>
              <address className="space-y-2 text-sm not-italic text-white/60">
                <p>{SITE.address}</p>
                <a href={`mailto:${SITE.email}`} className="block hover:text-gold">
                  {SITE.email}
                </a>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="block hover:text-gold">
                  {SITE.phone}
                </a>
              </address>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Newsletter
              </p>
              <p className="mb-4 text-sm text-white/60">
                Retreat announcements and training tips.
              </p>
              <form className="flex flex-col gap-2">
                <label htmlFor="footer-email" className="sr-only">
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gold py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-gold-dark"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
