"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactBanner() {
  return (
    <section
      id="contact"
      className="bg-soft-grey-dark py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid items-center gap-12 rounded-[24px] bg-white p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
                Get Started
              </p>
              <h2
                id="contact-heading"
                className="font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl"
              >
                Ready to Transform
                <br />
                Your Wellness?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Book a personal training session, reserve your spot on our next
                wellness retreat, or visit us at Saltmills Plaza in Grace Bay.
                Your journey to being Wrightfully best starts here.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="mailto:info@wrightfullyfit.com" size="lg">
                  Book a Session
                </Button>
                <Button
                  href={SITE_CONFIG.instagram}
                  variant="ghost"
                  size="lg"
                  className="border border-soft-grey-dark"
                >
                  Follow Us
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-[24px] bg-soft-grey p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ocean-pale text-ocean">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Visit Us</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[24px] bg-soft-grey p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-pale text-emerald">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-1 text-sm text-muted transition-colors hover:text-ocean"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[24px] bg-soft-grey p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ocean-pale text-ocean">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="mt-1 text-sm text-muted transition-colors hover:text-ocean"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
