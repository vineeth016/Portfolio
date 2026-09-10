import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vineeth Golla | Software Engineer",
  description: "Java backend systems, distributed services, search, streaming, and cloud infrastructure. The portfolio of Vineeth Golla.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
