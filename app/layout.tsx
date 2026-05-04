import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/lib/LocaleContext";
import { VariantProvider } from "@/lib/VariantContext";
import FloatingSurveyButton from "@/components/FloatingSurveyButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web interface study",
  description: "UEF M.Sc. students survey",
  metadataBase: new URL("https://web-tutkimus.vercel.app/"),
  openGraph: {
    title: "Web interface study",
    description: "UEF M.Sc. students survey",
    images: ["/preview-screenshot.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web interface study",
    description: "UEF M.Sc. students survey",
    images: ["/preview-screenshot.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <VariantProvider>
            {children}
            <FloatingSurveyButton />
          </VariantProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
