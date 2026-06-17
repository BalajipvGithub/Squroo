import ProductScene from "./ProductScene";

export default function Hero({ onShopClick, onLearnMoreClick }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">🌱 Real soil. Real growth. Real fun.</p>
        <h1>
          Swap Screen Time
          <br />
          for Farm Time.
        </h1>
        <p className="hero-sub">
          Chota Farm Kits are hands-on diorama farms with real seeds, soil and a
          smart sensor app that reads DRY, MOIST or WET — so kids learn by
          growing, not scrolling. Prefer cooking to farming? Meet the Chota
          Kitchen Kit.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => onShopClick("Farm Kits")}>
            Shop Farm Kits
          </button>
          <button className="btn-secondary" onClick={onLearnMoreClick}>
            How It Works
          </button>
        </div>
        <div className="hero-stats">
          <div>
            <strong>100%</strong>
            <span>Hands-on play</span>
          </div>
          <div>
            <strong>5-12</strong>
            <span>Years</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Diorama styles</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-scene-stack">
          <ProductScene theme="windmill" size="hero" />
          <ProductScene theme="kitchen" size="hero-small" />
        </div>
        <span className="hero-visual-label">Concept preview</span>
      </div>
    </section>
  );
}
