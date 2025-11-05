import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IR Template Demo - Beacon IR",
  description: "Demo of Beacon IR template",
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
