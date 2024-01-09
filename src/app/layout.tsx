import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clone Tw",
  description: "Es solo un test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
