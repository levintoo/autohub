import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AnnouncementBanner from "@/components/announcement-banner";
import Script from "next/script";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autohub Next App",
  description: "Autohun description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfitSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AnnouncementBanner />
          {children}
          <Footer />
        </ThemeProvider>
        <Script
            id="script-beam"
            src="https://beamanalytics.b-cdn.net/beam.min.js"
            data-token="f2e6a6bf-3f3f-4cac-9977-927d8c6eb569"
            async
        >
        </Script>
      </body>
    </html>
  );
}
