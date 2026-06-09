import Link from "next/link";
import { CartIcon, TourIcon, ArrowRightIcon } from "@/components/ui/Icons";
import type { CTAButton } from "@/lib/types";

interface ButtonProps extends Omit<CTAButton, "href"> {
  href?: string;
  onClick?: () => void;
  className?: string;
  rounded?: string;
  iconOnly?: boolean;
  type?: "button" | "submit";
}

const variantClasses: Record<string, string> = {
  primary: "bg-coffee-gold text-coffee-btn-text font-semibold hover:bg-coffee-gold-dark hover:text-white",
  outline:  "border border-coffee-gold-dark text-coffee-gold hover:bg-coffee-gold hover:text-[#3B291A]",
  ghost:    "text-coffee-cream hover:text-coffee-gold underline-offset-4 hover:underline",
};

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cart:        CartIcon,
  tour:        TourIcon,
  "arrow-right": ArrowRightIcon,
};

export function Button({
  label,
  href,
  variant = "primary",
  icon,
  onClick,
  className = "",
  rounded = "rounded-[10px]",
  iconOnly = false,
  type = "button",
}: ButtonProps) {
  const base = iconOnly
    ? `inline-flex items-center justify-center p-2.5 ${rounded} transition-colors duration-200`
    : `inline-flex items-center justify-center gap-2 px-5 py-2.5 ${rounded} text-sm font-medium tracking-wide transition-colors duration-200`;

  const cls = `${base} ${variantClasses[variant]} ${className}`;

  const IconComponent = icon ? IconMap[icon] : null;

  const inner = (
    <>
      {!iconOnly && label}
      {IconComponent && (
        <IconComponent className={iconOnly ? "w-5 h-5 shrink-0" : "w-4 h-4 shrink-0"} />
      )}
    </>
  );

  if (href) {
    return <Link href={href} className={cls}>{inner}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
