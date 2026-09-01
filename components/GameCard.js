import React from "react";

const styles = {
  card: {
    marginTop: 28,
    padding: 28,
    backgroundColor: "#1C222C",
    border: "1px solid #2E3644",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    maxHeight: 360,
    objectFit: "cover",
    borderRadius: 10,
    marginBottom: 18,
    display: "block",
  },
  header: {
    marginBottom: 18,
  },
  nameRow: {
    display: "flex",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: 12,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    margin: 0,
  },
  khmer: {
    fontSize: 26,
    color: "#2EE6A8",
  },
  translit: {
    fontSize: 14,
    color: "#97A1B3",
    fontFamily: "'Courier New', monospace",
  },
  section: {
    marginTop: 14,
  },
  label: {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    letterSpacing: 1,
    color: "#2EE6A8",
    textTransform: "uppercase",
    margin: 0,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.6,
    color: "#E8EDF2",
    margin: "6px 0 0",
  },
};

// Sections shown for every game, in the order the brief asked for.
const SECTIONS = [
  { key: "howToPlay", label: "What it is & how it is played" },
  { key: "origin", label: "Origin & history" },
  { key: "whenPlayed", label: "When it is usually played" },
  { key: "whyPlayed", label: "Why people traditionally play it" },
  { key: "importance", label: "Its cultural & social importance" },
  { key: "whyToday", label: "Why it is still played today" },
];

export default function GameCard({ game }) {
  return (
    <article style={styles.card}>
      {game.image && (
        <img style={styles.image} src={game.image} alt={game.name} />
      )}
      <div style={styles.header}>
        <div style={styles.nameRow}>
          <h3 style={styles.name}>{game.name}</h3>
          <span style={styles.khmer}>{game.khmerName}</span>
        </div>
        <p style={styles.translit}>{game.translit}</p>
      </div>

      {SECTIONS.map((section) => (
        <div key={section.key} style={styles.section}>
          <p style={styles.label}>{section.label}</p>
          <p style={styles.text}>{game[section.key]}</p>
        </div>
      ))}
    </article>
  );
}