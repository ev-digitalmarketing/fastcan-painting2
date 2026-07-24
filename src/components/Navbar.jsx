"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/residential-services", label: "Residential Services" },
  { href: "/commercial-services", label: "Commercial Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur shadow-lg shadow-black/10"
          : "bg-ink"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="font-display text-2xl text-canvas font-bold tracking-tight">
          Fastcan<span className="text-mustard">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-canvas/80">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`brush-underline transition-colors ${
                  active ? "text-canvas" : "hover:text-canvas"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:14165550142"
            className="hidden sm:flex items-center gap-1.5 text-sm text-canvas/70 hover:text-canvas transition-colors"
          >
            <Phone size={14} />
            (416) 555-0142
          </a>
          <Link
            href="/contact-us"
            className="hidden sm:inline-block bg-mustard hover:bg-clay hover:text-canvas text-ink font-semibold text-sm px-4 py-2 rounded-sm transition-colors duration-200"
          >
            Get a Quote
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-canvas p-2 -mr-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink border-t border-canvas/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-canvas/80">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-canvas">
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact-us"
                className="bg-mustard text-ink font-semibold text-sm px-4 py-2 rounded-sm text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
