// Brand display heading — matches the serif italic style from the design.
// The italic words are wrapped in <em>; the CSS applies the serif display font.

interface DisplayHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function DisplayHeading({ children, as: Tag = "h2", className = "" }: DisplayHeadingProps) {
  return (
    <Tag
      className={`font-display text-4xl leading-tight tracking-tight [&_em]:italic [&_em]:not-italic ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </Tag>
  );
}
