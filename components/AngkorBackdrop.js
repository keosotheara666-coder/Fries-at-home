// A fixed, full-window background using the Angkor Wat photo the student
// added to public/images. It sits behind the page content, shown sharp (only
// a 1px softening) instead of the old 16px blur. A light dark veil keeps any
// text that sits directly on the photo readable; the content cards already
// have their own opaque backgrounds.
const IMAGE_URL = "/images/AngkorWat-1.jpg";

const styles = {
  wrap: {
    position: "fixed",
    inset: 0,
    zIndex: -1,
    overflow: "hidden",
    pointerEvents: "none",
  },
  photo: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${IMAGE_URL})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // Just enough softening to blend edges — not the old heavy blur.
    filter: "blur(1px)",
  },
  // Gentle darkening so cream text over the photo stays readable.
  veil: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,12,8,0.18) 0%, rgba(10,12,8,0.30) 55%, rgba(10,12,8,0.55) 100%)",
  },
};

export default function AngkorBackdrop() {
  return (
    <div style={styles.wrap} aria-hidden="true">
      <div style={styles.photo} />
      <div style={styles.veil} />
    </div>
  );
}