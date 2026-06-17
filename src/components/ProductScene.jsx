const SCENES = {
  windmill: { sky: "linear-gradient(180deg,#bae6fd,#e0f2fe)", ground: "linear-gradient(180deg,#86efac,#4ade80)", emoji: "🌬️", accent: "☀️" },
  barn: { sky: "linear-gradient(180deg,#fed7aa,#fef3c7)", ground: "linear-gradient(180deg,#d97706,#92400e)", emoji: "🌾", accent: "🚜" },
  waterfall: { sky: "linear-gradient(180deg,#a5f3fc,#cffafe)", ground: "linear-gradient(180deg,#4ade80,#16a34a)", emoji: "💧", accent: "🌿" },
  kitchen: { sky: "linear-gradient(180deg,#fbcfe8,#fce7f3)", ground: "linear-gradient(180deg,#f9a8d4,#ec4899)", emoji: "🍳", accent: "🥄" },
  kitchenPro: { sky: "linear-gradient(180deg,#e9d5ff,#fce7f3)", ground: "linear-gradient(180deg,#f0abfc,#c026d3)", emoji: "🍲", accent: "💨" },
  giftCombo: { sky: "linear-gradient(180deg,#fef9c3,#fde68a)", ground: "linear-gradient(180deg,#fbbf24,#d97706)", emoji: "🎁", accent: "🌾" },
  giftBirthday: { sky: "linear-gradient(180deg,#ddd6fe,#fbcfe8)", ground: "linear-gradient(180deg,#c4b5fd,#a78bfa)", emoji: "🎂", accent: "🎈" },
  customFarm: { sky: "linear-gradient(180deg,#bae6fd,#e0f2fe)", ground: "linear-gradient(180deg,#86efac,#4ade80)", emoji: "🚜", accent: "✏️" },
  customKitchen: { sky: "linear-gradient(180deg,#fbcfe8,#fce7f3)", ground: "linear-gradient(180deg,#f9a8d4,#ec4899)", emoji: "👩‍🍳", accent: "✏️" },
};

export default function ProductScene({ theme, size = "card" }) {
  const scene = SCENES[theme] || SCENES.windmill;
  return (
    <div className={`product-scene scene-${size}`} style={{ background: scene.sky }}>
      <span className="scene-accent">{scene.accent}</span>
      <span className="scene-emoji">{scene.emoji}</span>
      <div className="scene-ground" style={{ background: scene.ground }} />
    </div>
  );
}
