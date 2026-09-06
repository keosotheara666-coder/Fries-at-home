// A fixed, blurred, translucent silhouette of Angkor Wat (the five-tower
// lotus-bud skyline) drawn as pure SVG, so no image file or dependency is
// needed. It sits behind the page content as a decorative backdrop.
const GOLD = "#D4AF37";

// The five towers of the Angkor Wat skyline: one tall central tower in the
// middle, two medium towers beside it and two shorter ones at the edges.
const TOWERS = [
  { cx: 720, h: 560 },
  { cx: 550, h: 450 },
  { cx: 890, h: 450 },
  { cx: 390, h: 330 },
  { cx: 1050, h: 330 },
];

const BASE_Y = 830;

// Draws one lotus-bud tower as an SVG path: a wide base that steps in twice
// and finishes in a rounded bud peak, the classic Angkor tower profile.
function towerPath(cx, baseY, h) {
  const w = h * 0.32;
  const waistY = baseY - h * 0.5;
  const neckY = baseY - h * 0.76;
  const topY = baseY - h;
  const nw = h * 0.1;
  return [
    `M${cx - w} ${baseY}`,
    `L${cx - w} ${waistY}`,
    `L${cx - w * 0.55} ${neckY}`,
    `L${cx - nw} ${neckY}`,
    `Q${cx - nw * 0.2} ${(neckY + topY) / 2} ${cx} ${topY}`,
    `Q${cx + nw * 0.2} ${(neckY + topY) / 2} ${cx + nw} ${neckY}`,
    `L${cx + w * 0.55} ${neckY}`,
    `L${cx + w} ${waistY}`,
    `L${cx + w} ${baseY}`,
    `Z`,
  ].join(" ");
}

const styles = {
  wrap: {
    position: "fixed",
    inset: 0,
    zIndex: -1,
    overflow: "hidden",
    pointerEvents: "none",
  },
  svg: {
    display: "block",
    width: "100%",
    height: "100%",
    // "blurry" as requested, and faint/transparent so text stays readable.
    filter: "blur(16px)",
    opacity: 0.16,
  },
};

export default function AngkorBackdrop() {
  return (
    <div style={styles.wrap} aria-hidden="true">
      <svg
        style={styles.svg}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill={GOLD}>
          {/* raised cruciform base platform */}
          <rect x="140" y="800" width="1160" height="30" rx="4" />
          <rect x="230" y="770" width="980" height="30" rx="4" />
          {TOWERS.map((t) => (
            <path
              key={`${t.cx}-${t.h}`}
              d={towerPath(t.cx, BASE_Y, t.h)}
            />
          ))}
          {/* soft ground reflection line */}
          <rect x="0" y="868" width="1440" height="4" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}