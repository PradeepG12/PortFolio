import '../css/AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="background">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}
