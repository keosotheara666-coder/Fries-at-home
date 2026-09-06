// The romdoul / rumdul blossom — Cambodia's national flower. Drawn as a
// five-petal star flower in SVG so no image file or dependency is needed.
export default function RomdoulFlower({ size = 40, color = "#F5D061" }) {
  const angles = [0, 72, 144, 216, 288];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      role="img"
    >
      {angles.map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="30"
          rx="20"
          ry="34"
          fill={color}
          opacity="0.92"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="15" fill="#B8860B" opacity="0.95" />
    </svg>
  );
}