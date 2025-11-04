import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S. Sai Prasad - AI & Automation Engineer",
  description: "Portfolio of S. Sai Prasad - AI & Automation Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}