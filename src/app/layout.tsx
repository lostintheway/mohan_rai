import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohan Rai Profile Middleway Films",
  description:
    "Mohan Rai Nepalese filmmaker and advocate for cinema, editor, translator and festival manager. International recognition and awards for documentary Anjali, feature film Mahanagar. Leads Middleway Films, contributing to Nepal's film landscape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="description" content="Search engine description" />
      <body className={noto.className}>{children}</body>
    </html>
  );
}
