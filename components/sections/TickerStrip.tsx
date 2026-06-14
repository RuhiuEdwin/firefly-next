export function TickerStrip({ items }: { items: string[] }) {
  return (
    <div
      className="relative overflow-hidden flex items-center py-5"
      style={{ background: "var(--color-coffee-espresso)" }}
    >
      <span
        className="shrink-0 pl-6 pr-4 text-sm"
        style={{ color: "var(--color-coffee-amber)" }}
        aria-hidden
      >
        ▶
      </span>
      <div className="overflow-hidden flex-1">
        <div className="flex animate-ticker whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center shrink-0 px-6">
              <span
                className="mr-6 text-sm"
                style={{ color: "var(--color-coffee-amber)" }}
                aria-hidden
              >
                ◆
              </span>
              <span
                className="text-xl italic"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-coffee-amber)" }}
              >
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
