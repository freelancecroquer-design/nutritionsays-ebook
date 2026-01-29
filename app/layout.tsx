
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nutrir es más que comer - NutritionSays",
  description: "Guía de nutrición humana, ciencia y hábitos sostenibles por Arianna García.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${libreBaskerville.variable} font-serif antialiased bg-[#efe8f8] text-[#240046]`}
      >
        {children}
      </body>
    </html>
  );
}
