interface BrandProps { onClick?: () => void; }

export function Brand({ onClick }: BrandProps) {
  return (
    <button className="brand" onClick={onClick} type="button" aria-label="Toy Willa home">
      <span className="brand-icon">🧸</span><span>Toy <b>Willa</b></span>
    </button>
  );
}
