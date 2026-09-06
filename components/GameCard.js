import React from "react";

const GOLD = "#D4AF37";
const CREAM = "#F2E9D8";
const MUTED = "#C9B98F";

const styles = {
  card: {
    marginTop: 28,
    padding: 28,
    backgroundColor: "#1E170B",
    border: "1px solid rgba(212,175,55,0.35)",
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  image: {
    width: "100%",
    maxHeight: 360,
    objectFit: "cover",
    borderRadius: 10,
    marginBottom: 18,
    display: "block",
    border: "1px solid rgba(212,175,55,0.3)",
  },
  header: {
    marginBottom: 18,
    textAlign: "center",
  },
  nameRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
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
    color: GOLD,
  },
  translit: {
    fontSize: 14,
    color: MUTED,
    fontFamily: "'Courier New', monospace",
  },
  section: {
    marginTop: 14,
  },
  label: {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    letterSpacing: 1,
    color: GOLD,
    textTransform: "uppercase",
    margin: "0 0 6px",
  },
  text: {
    fontSize: 16,
    lineHeight: 1.7,
    color: CREAM,
    margin: 0,
  },
  textEn: {
    fontSize: 15,
    lineHeight: 1.6,
    color: MUTED,
    margin: 0,
  },
  divider: {
    height: 1,
    margin: "14px 0",
    background: "rgba(212,175,55,0.2)",
  },
};

// Every section has a Khmer label and a Khmer translation that is shown
// first (the prioritised language), with the English original below it.
const SECTIONS = [
  { khmerKey: "howToPlayKhmer", enKey: "howToPlay", khmerLabel: "តើវាជាអ្វី និងរបៀបលេង", enLabel: "What it is & how it is played" },
  { khmerKey: "originKhmer", enKey: "origin", khmerLabel: "ប្រភពដើម និងប្រវត្តិ", enLabel: "Origin & history" },
  { khmerKey: "whenPlayedKhmer", enKey: "whenPlayed", khmerLabel: "ពេលណាដែលគេតែងតែលេង", enLabel: "When it is usually played" },
  { khmerKey: "whyPlayedKhmer", enKey: "whyPlayed", khmerLabel: "ហេតុអ្វីបានជាគេលេងតាមប្រពៃណី", enLabel: "Why people traditionally play it" },
  { khmerKey: "importanceKhmer", enKey: "importance", khmerLabel: "សារៈសំខាន់វប្បធម៌ និងសង្គមរបស់វា", enLabel: "Its cultural & social importance" },
  { khmerKey: "whyTodayKhmer", enKey: "whyToday", khmerLabel: "ហេតុអ្វីបានជាគេនៅតែលេងសព្វថ្ងៃ", enLabel: "Why it is still played today" },
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
        <div key={section.enKey} style={styles.section}>
          {/* Khmer on top, English below */}
          <p style={styles.label}>ភាសាខ្មែរ • {section.khmerLabel}</p>
          <p style={styles.text}>{game[section.khmerKey]}</p>
          <div style={styles.divider} />
          <p style={styles.label}>English • {section.enLabel}</p>
          <p style={styles.textEn}>{game[section.enKey]}</p>
        </div>
      ))}
    </article>
  );
}