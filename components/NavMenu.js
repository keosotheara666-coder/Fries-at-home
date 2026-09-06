"use client";

import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/traditional-games", label: "Traditional Khmer Games" },
];

const styles = {
  bar: {
    backgroundColor: "#17120A",
    borderBottom: "1px solid rgba(212,175,55,0.4)",
  },
  nav: {
    maxWidth: 840,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    gap: 24,
  },
  brand: {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    letterSpacing: 1,
    color: "#D4AF37",
  },
  link: {
    color: "#C9B98F",
    textDecoration: "none",
    fontSize: 14,
  },
  linkActive: {
    color: "#F2E9D8",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
};

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <div style={styles.bar}>
      <nav style={styles.nav}>
        <span style={styles.brand}>KHMER LIVING ARCHIVE</span>
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              style={active ? styles.linkActive : styles.link}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}