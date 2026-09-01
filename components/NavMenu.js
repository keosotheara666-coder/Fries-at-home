"use client";

import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/traditional-games", label: "Traditional Khmer Games" },
];

const styles = {
  bar: {
    backgroundColor: "#14181F",
    borderBottom: "1px solid #2E3644",
  },
  nav: {
    maxWidth: 760,
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
    color: "#2EE6A8",
  },
  link: {
    color: "#97A1B3",
    textDecoration: "none",
    fontSize: 14,
  },
  linkActive: {
    color: "#E8EDF2",
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