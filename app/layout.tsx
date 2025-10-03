import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Khlaif Mohamed — Data Engineer & AI Cloud Engineer",
  description: "Portfolio of Khlaif Mohamed, Data Engineer and AI Cloud Engineer. Explore projects, skills, and contact information.",
  keywords: ["Data Engineer", "AI", "Cloud", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Portfolio", "Developer"],
  authors: [{ name: "Khlaif Mohamed" }],
  creator: "Khlaif Mohamed",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Khlaif Mohamed Portfolio",
    title: "Khlaif Mohamed — Data Engineer & AI Cloud Engineer",
    description: "Portfolio of Khlaif Mohamed, Data Engineer and AI Cloud Engineer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khlaif Mohamed - Data Engineer & AI Cloud Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khlaif Mohamed — Data Engineer & AI Cloud Engineer",
    description: "Portfolio of Khlaif Mohamed, Data Engineer and AI Cloud Engineer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CursorGlow />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
