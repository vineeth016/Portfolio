import { readFileSync } from "node:fs";
import { join } from "node:path";
import Script from "next/script";

// One authored page for both GitHub Pages and the Next.js deployment.
export default function Home() {
  const html = readFileSync(join(process.cwd(), "index.html"), "utf8");
  const styles = html.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
  const body = html.match(/<body>([\s\S]*?)<script>/)?.[1] ?? "";
  const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1] ?? "";
  return <>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <div dangerouslySetInnerHTML={{ __html: body }} />
    <Script id="portfolio-interactions" strategy="afterInteractive">{`(() => {${script}\n})();`}</Script>
  </>;
}
