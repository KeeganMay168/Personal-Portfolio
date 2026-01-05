import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keegan May | Mechatronics Engineer Portfolio",
  description: "Portfolio of Keegan May, Mechatronics Engineering student at Texas A&M University specializing in Semiconductor Manufacturing, Robotics & Automation. Process Engineer at BrYet Pharmaceuticals.",
  keywords: ["Keegan May", "Mechatronics Engineer", "Semiconductor Manufacturing", "Robotics", "Automation", "Texas A&M", "Process Engineer", "Portfolio"],
  authors: [{ name: "Keegan May" }],
  creator: "Keegan May",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keeganmay168.github.io/Personal-Portfolio/",
    title: "Keegan May | Mechatronics Engineer Portfolio",
    description: "Portfolio of Keegan May, Mechatronics Engineering student specializing in Semiconductor Manufacturing, Robotics & Automation.",
    siteName: "Keegan May Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keegan May | Mechatronics Engineer Portfolio",
    description: "Portfolio of Keegan May, Mechatronics Engineering student specializing in Semiconductor Manufacturing, Robotics & Automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
