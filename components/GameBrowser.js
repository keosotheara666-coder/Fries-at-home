"use client";

import { useState } from "react";
import GameList from "./GameList.js";
import GameCard from "./GameCard.js";

const styles = {
  search: {
    marginTop: 32,
    width: "100%",
    maxWidth: 460,
    padding: "12px 16px",
    fontSize: 15,
    color: "#F2E9D8",
    backgroundColor: "#241C0E",
    border: "1px solid #C9A227",
    borderRadius: 10,
    outline: "none",
  },
  empty: {
    marginTop: 28,
    fontSize: 15,
    color: "#C9B98F",
    lineHeight: 1.6,
  },
  back: {
    display: "inline-block",
    marginTop: 28,
    padding: "10px 18px",
    fontSize: 14,
    fontFamily: "'Courier New', monospace",
    color: "#F2E9D8",
    backgroundColor: "#241C0E",
    border: "1px solid #C9A227",
    borderRadius: 10,
    cursor: "pointer",
  },
};

// The text we search against. We match the game's name fields only
// (English name, Khmer name and transliteration), not the long
// descriptions. That keeps even a single-letter query meaningful:
// typing "t" narrows straight to Teanh Proat instead of matching
// every game because a common letter appears in a description.
// The transliteration is cut at "(" so the English gloss in
// parentheses (e.g. "Catch the Kite") does not pad the match.
function searchableText(game) {
  const translit = (game.translit || "").split("(")[0].trim();
  return [game.name, game.khmerName, translit]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export default function GameBrowser({ games }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const needle = query.trim().toLowerCase();

  const visible = needle
    ? games.filter((game) => searchableText(game).includes(needle))
    : games;

  // Clicking a result shows its full description. Clear the selection
  // whenever the user types again so they can pick a new game.
  const handleSelect = (game) => setSelected(game);
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setSelected(null);
  };

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search games in English or Khmer…"
        aria-label="Search the traditional games collection"
        style={styles.search}
      />

      {selected ? (
        <div>
          <GameCard game={selected} />
          <button type="button" style={styles.back} onClick={() => setSelected(null)}>
            ← Back to results
          </button>
        </div>
      ) : visible.length > 0 ? (
        <GameList games={visible} onSelect={handleSelect} />
      ) : (
        <p style={styles.empty}>No traditional games match “{query}”.</p>
      )}
    </div>
  );
}