import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

// ✅ Enhanced metadata for SEO
export const metadata: Metadata = {
  // Basic
  title: {
    default: "VamVam Uniport - School Management System | Cameroon",
    template: "%s | VamVam Uniport",
  },
  description:
    "All-in-one school management platform for universities and higher institutions. Manage admissions, academics, examinations, finance, transcripts, student records, and communication securely.",
  keywords: [
    "school management system",
    "university management software",
    "student information system",
    "academic management platform",
    "examination management",
    "transcript generation",
    "school ERP Cameroon",
    "university software Africa",
    "education technology",
    "campus management system",
  ],
  authors: [{ name: "Nishang Systems PLC", url: "https://nishangsys.com" }],
  creator: "Nishang Systems PLC",
  publisher: "Nishang Systems PLC",

  // Canonical URL
  metadataBase: new URL("https://vamvam-uniport.com"),
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vamvam-uniport.com",
    siteName: "VamVam Uniport",
    title: "VamVam Uniport - School Management System",
    description:
      "All-in-one school management platform for universities and higher institutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "VamVam Uniport - School Management System",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@vamvam_uniport",
    creator: "@nishangsys",
    title: "VamVam Uniport - School Management System",
    description:
      "All-in-one school management platform for universities and higher institutions.",
    images: ["/images/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your codes)
  verification: {
    google: "your-google-site-verification-code",
  },

  // Apple Web App
  appleWebApp: {
    capable: true,
    title: "VamVam Uniport",
    statusBarStyle: "black-translucent",
  },

  // Category
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#0A0A0A" />

        {/* Structured Data for SEO */}
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}