import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProgress } from "@/components/scroll-progress";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "mohitooo",
    template: `%s | mohitooo`,
  },
  description:
    "Full-stack developer from Mumbai building creative, impactful web and mobile apps.",
  openGraph: {
    title: "mohitooo",
    description:
      "Full-stack developer from Mumbai building creative, impactful web and mobile apps.",
    url: DATA.url,
    siteName: "mohitooo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohit Khairnar — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mohitooo",
    description:
      "Full-stack developer from Mumbai building creative, impactful web and mobile apps.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, "font-sans antialiased")}>
        <ScrollProgress />
        <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </div>
        <Script src="/oneko.js" strategy="afterInteractive" id="oneko-script" />
      </body>
    </html>
  );
}
