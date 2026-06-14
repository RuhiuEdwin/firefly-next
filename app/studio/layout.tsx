// Studio gets its own layout — keeps Sanity's full-page UI isolated
// from the root layout's font variables and body styles.
export const metadata = { title: "Firefly Coffee — Studio" };

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
