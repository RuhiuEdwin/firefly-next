import type { CSSProperties } from "react";
import type { HeadlineWord } from "@/lib/types";

interface HeadlineRendererProps {
  words: HeadlineWord[];
  as?: "h1" | "h2";
  className: string;
  style?: CSSProperties;
  /** Which line index gets the stagger indent: "first" = line 0, "rest" = lines 1+ */
  stagger?: { on: "first" | "rest"; indent: string };
  /** Maps word.color enum values to CSS color strings (hex or var()) */
  colorMap?: Record<string, string>;
  /** Style applied to words flagged as word.logo */
  logoStyle?: CSSProperties;
  /** Tailwind weight class for non-bold words. Defaults to "font-extralight" */
  defaultWeight?: string;
}

export function HeadlineRenderer({
  words,
  as: Tag = "h2",
  className,
  style,
  stagger,
  colorMap,
  logoStyle,
  defaultWeight = "font-extralight",
}: HeadlineRendererProps) {
  const lines = words.reduce<HeadlineWord[][]>(
    (acc, word) => {
      if (word.lineBreakBefore && acc[acc.length - 1].length > 0) {
        acc.push([word]);
      } else {
        acc[acc.length - 1].push(word);
      }
      return acc;
    },
    [[]]
  );

  return (
    <Tag className={className} style={style}>
      {lines.map((line, lineIdx) => {
        const indent =
          stagger &&
          ((stagger.on === "first" && lineIdx === 0) ||
           (stagger.on === "rest"  && lineIdx > 0))
            ? { paddingLeft: stagger.indent }
            : undefined;

        return (
          <span key={lineIdx} className="block" style={indent}>
            {line.map((word, i) => {
              if (word.logo && logoStyle) {
                return <span key={i} style={logoStyle}>{word.text}</span>;
              }
              return (
                <span
                  key={i}
                  className={[
                    word.bold   ? "font-bold" : defaultWeight,
                    word.italic ? "italic"    : "",
                  ].filter(Boolean).join(" ")}
                  style={word.color && colorMap ? { color: colorMap[word.color] } : undefined}
                >
                  {word.text}
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
