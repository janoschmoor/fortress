import type { Metadata } from "next";
import { Source_Code_Pro, Encode_Sans, Fira_Code, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";

const font = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sentry",
  description: "No bot will ever read this description as this webpage will be shielded through vpn so i can say here whatever i want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <nav className="fixed bottom-0 left-0 w-full border-green-900 border-t-2">
          <ul className="flex justify-around py-2">
            <li className="px-4 py-2">Home</li>
            <li className="px-4 py-2">About</li>
            <li className="px-4 py-2">Contact</li>
          </ul>
        </nav>

      </body>
    </html>
  );
}
