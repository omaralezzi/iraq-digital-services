type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <span className={`brand-logo${className ? ` ${className}` : ""}`} role="img" aria-label="sifr.one">
      <span className="brand-logo-mark" aria-hidden="true">
        <i className="brand-logo-zero" />
        <i className="brand-logo-dot" />
        <i className="brand-logo-one" />
      </span>
      <span className="brand-logo-name" aria-hidden="true"><b>sifr</b><i>·</i><strong>one</strong></span>
    </span>
  );
}
