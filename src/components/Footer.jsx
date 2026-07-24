import SwatchDivider from "./SwatchDivider";

export default function Footer() {
  return (
    <footer className="bg-ink text-canvas/60">
      <SwatchDivider className="opacity-50" />
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between gap-4 text-sm">
        <p className="font-display text-lg text-canvas">
          Fastcan<span className="text-mustard">.</span> Painting
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Fastcan Painting &middot; Licensed &amp; Insured &middot; Toronto, ON
        </p>
      </div>
    </footer>
  );
}
