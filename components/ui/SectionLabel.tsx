interface SectionLabelProps {
  children: string;
  light?: boolean; // true when on dark background
}

// Small uppercase eyebrow label used above section headings
export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`block mb-3 text-xs font-semibold tracking-widest uppercase ${
        light ? "text-coffee-gold" : "text-coffee-muted"
      }`}
    >
      {children}
    </span>
  );
}
