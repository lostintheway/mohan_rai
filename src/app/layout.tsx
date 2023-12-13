import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohan Rai Profile Middleway Films",
  description: `Mohan Rai Middleway Films is a prominent filmmaker, educator, and film culture advocate in Nepal. 
    His documentary Anjali and feature film Mahanagar earned international recognition and awards. 
    Rai is also an editor, translator, and Festival Manager for the Nepal-European Union Film Festival. 
    Leading Middleway Films, he organizes filmmaking courses and contributes significantly to Nepal's cinematic landscape.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
