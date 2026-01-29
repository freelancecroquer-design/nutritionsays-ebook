
import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Nutrir es más que comer | NutritionSays Ebook",
  description: "Una guía para entender la nutrición real, lejos de las dietas restrictivas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={clsx(
        libreBaskerville.variable,
        dmSans.variable,
        "antialiased font-sans bg-[#fdfbf7]"
      )}>
        {children}
      </body>
    </html>
  );
}
