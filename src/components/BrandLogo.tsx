import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <span className={`brand-logo${className ? ` ${className}` : ""}`}>
      <Image src="/brand/sifrsifr-one-logo.svg" alt="sifrsifr.one" width={214} height={72} priority={priority} />
    </span>
  );
}
