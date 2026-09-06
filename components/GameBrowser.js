"use client";

import { useState } from "react";
import GameList from "./GameList.js";

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
};

// The text we search against, so the query can match the title,
// the Khmer title and the full description of a game.
function searchableText(game) {
  return [
    game.name,
    game.khmerName,
    game.translit,
    game.howToPlay,
    game.origin,
    game.whenPlayed,
    game.whyPlayed,
    game.importance,
    game.whyToday,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export default function GameBrowser({ games }) {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();

  const visible = needle
    ? games.filter((game) => searchableText(game).includes(needle))
    : games;

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search games in English or Khmer…"
        aria-label="Search the traditional games collection"
        style={styles.search}
      />

      {visible.length > 0 ? (
        <GameList games={visible} />
      ) : (
        <p style={styles.empty}>No traditional games match “{query}”.</p>
      )}
    </div>
  );
}