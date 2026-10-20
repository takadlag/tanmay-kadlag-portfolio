import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tanmay-kadlag.vercel.app"
  ),
  title: "Tanmay Kadlag | Prana to Pipelines — AI, Big Data & Sacred Engineering",
  description:
    "Portfolio of Tanmay Ramrao Kadlag — Machine Learning & Big Data Engineer at Deloitte (iQ Innovation Team), VNIT Nagpur '22 Alumnus, and JENESYS 2.0 Envoy. Merging modern distributed systems with yogic discipline.",
  openGraph: {
    title: "Tanmay Kadlag | ML & Big Data Engineer at Deloitte",
    description:
      "Portfolio & Life Odyssey of Tanmay Ramrao Kadlag — ML & Big Data Engineer at Deloitte (iQ Innovation Team), VNIT Nagpur '22 Alumnus, and JENESYS 2.0 Envoy.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/prof.jpg",
        width: 800,
        height: 800,
        alt: "Tanmay Ramrao Kadlag — ML & Big Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Kadlag | ML & Big Data Engineer at Deloitte",
    description:
      "Portfolio & Life Odyssey of Tanmay Ramrao Kadlag — ML & Big Data Engineer at Deloitte (iQ Innovation Team).",
    images: ["/prof.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased selection:bg-sacred-gold selection:text-slate-950 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}