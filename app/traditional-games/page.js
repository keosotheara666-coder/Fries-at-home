import collection from "../../collection.config.js";
import games from "./games.js";
import GameCard from "../../components/GameCard.js";

export const metadata = {
  title: `${collection.name} — Traditional Khmer Games`,
  description:
    "An introduction to four traditional Khmer games — Teanh Proat, Chol Chhoung, Bos Angkunh and Leak Kanseng — and why they matter to Cambodian culture.",
};

const styles = {
  wrap: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "80px 24px",
  },
  kicker: {
    fontFamily: "'Courier New', monospace",
    color: "#2EE6A8",
    fontSize: 14,
    letterSpacing: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    margin: "16px 0 12px",
    lineHeight: 1.15,
  },
  subtitle: {
    fontFamily: "'Courier New', monospace",
    fontSize: 16,
    color: "#2EE6A8",
    margin: "0 0 24px",
  },
  intro: {
    fontSize: 18,
    lineHeight: 1.7,
    color: "#97A1B3",
    margin: 0,
  },
  back: {
    display: "inline-block",
    marginTop: 56,
    color: "#2EE6A8",
    textDecoration: "none",
    fontFamily: "'Courier New', monospace",
    fontSize: 14,
  },
  footer: {
    marginTop: 40,
    paddingTop: 24,
    borderTop: "1px solid #2E3644",
    fontSize: 13,
    color: "#5A6373",
  },
};

export default function TraditionalGamesPage() {
  return (
    <main style={styles.wrap}>
      <p style={styles.kicker}>KHMER LIVING ARCHIVE</p>
      <h1 style={styles.title}>Traditional Khmer Games</h1>
      <h2 style={styles.subtitle}>ល្បែងប្រជាប្រិយខ្មែរ</h2>

      <p style={styles.intro}>
        Traditional Cambodian games have been played by Khmer families and
        villages for generations. Many are linked to festivals and the seasons —
        above all to Khmer New Year (around mid-April), which comes just after
        the harvest, when the whole community has time to rest and come
        together. These games rarely need anything grand: a rope, a cloth, a
        few seeds from the season. But they are far more than fun. They pass on
        skills and customs from grandparents to grandchildren, bring neighbours
        and whole villages into one happy crowd, and keep a piece of living
        Cambodian culture alive for the future.
      </p>

      {games.map((game) => (
        <GameCard key={game.name} game={game} />
      ))}

      <a href="/" style={styles.back}>
        ← Back to the archive
      </a>

      <footer style={styles.footer}>
        {collection.name} — curated by {collection.curator}. Part of the Khmer
        Living Archive for ICT 340.
      </footer>
    </main>
  );
}