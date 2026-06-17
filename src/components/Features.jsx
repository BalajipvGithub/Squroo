import { Sprout, Smartphone, Lightbulb, ChefHat } from "lucide-react";

const FEATURES = [
  {
    icon: Sprout,
    title: "Real Plants & Soil",
    text: "Not plastic pretend — actual seeds, soil and water that kids care for every day.",
  },
  {
    icon: Smartphone,
    title: "Smart Sensor App",
    text: "A built-in moisture sensor reads DRY, MOIST or WET and syncs live to the Squroo app.",
  },
  {
    icon: Lightbulb,
    title: "Hands-On Learning",
    text: "Kids build curiosity by solving real-time challenges instead of watching a screen.",
  },
  {
    icon: ChefHat,
    title: "Chota Kitchen Kit",
    text: "Real frying, boiling and steam-cooking, kid-safe, for kids who'd rather cook than farm.",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <h2 className="section-title">How Chota Kits Work</h2>
      <div className="features-grid">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div className="feature-card" key={title}>
            <div className="feature-icon">
              <Icon size={26} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
