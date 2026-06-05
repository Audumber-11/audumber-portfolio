import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/widgets/theme-provider";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { AIAssistant } from "@/components/widgets/ai-assistant";
import { CommandMenu } from "@/components/widgets/command-menu";
import { BackgroundFx } from "@/components/effects/background-fx";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://audumber.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Audumber Bhujang — AI Engineer • Creative Developer",
    template: "%s | Audumber Bhujang",
  },
  description:
    "Portfolio of Audumber Bhujang — AI Engineer, Full Stack Developer and Creative Technologist building futuristic AI products, immersive web experiences, and scalable systems.",
  keywords: [
    "Audumber Bhujang",
    "AI Engineer",
    "Full Stack Developer",
    "Creative Developer",
    "SaaS Builder",
    "Next.js Developer",
    "Three.js",
    "React Three Fiber",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Audumber Bhujang" }],
  creator: "Audumber Bhujang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Audumber Bhujang — AI Engineer • Creative Developer",
    description:
      "Building futuristic AI products, immersive web experiences, and scalable systems.",
    siteName: "Audumber Bhujang",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Audumber Bhujang — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audumber Bhujang — AI Engineer • Creative Developer",
    description:
      "Building futuristic AI products, immersive web experiences, and scalable systems.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundFx />
          <LoadingScreen />
          <CustomCursor />
          <SmoothScroll />
          {children}
          <AIAssistant />
          <CommandMenu />
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "rgba(10,10,10,0.85)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
