import { cn } from "@/lib/utils";

type BrandMarkProps = {
  inverse?: boolean;
  className?: string;
};

export function BrandMark({ inverse = false, className }: BrandMarkProps) {
  return (
    <span
      className={cn("brand-mark", inverse && "brand-mark--inverse", className)}
      aria-hidden="true"
    >
      <span className="brand-mark__letter">R</span>
      <span className="brand-mark__dot" />
    </span>
  );
}
