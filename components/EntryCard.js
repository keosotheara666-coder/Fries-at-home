const styles = {
  card: {
    marginTop: 28,
    padding: 28,
    backgroundColor: "#1C222C",
    border: "1px solid #2E3644",
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    margin: "0 0 4px",
  },
  description: {
    fontSize: 16,
    lineHeight: 1.6,
    color: "#E8EDF2",
    margin: "0 0 18px",
  },
  meta: {
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
  value: {
    fontSize: 16,
    color: "#97A1B3",
    margin: "6px 0 0",
  },
};

export default function EntryCard({ entry }) {
  return (
    <article style={styles.card}>
      <h3 style={styles.title}>{entry.title}</h3>
      <p style={styles.description}>{entry.description}</p>

      <div style={styles.meta}>
        <p style={styles.label}>Contributed by</p>
        <p style={styles.value}>{entry.contributor}</p>
      </div>
      <div style={styles.meta}>
        <p style={styles.label}>Place</p>
        <p style={styles.value}>{entry.place}</p>
      </div>
    </article>
  );
}