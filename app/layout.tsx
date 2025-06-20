import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import OptimizedCursorAnimation from "@/components/shared/optimized-cursor-animation";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./mouse-cursor.css";

const mavoraSans = localFont({
  src: [
    {
      path: "../public/assets/font/MavoraSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/font/mavora-sans-extra-expanded-4.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/font/MavoraSans-BoldExtraExpanded.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mavora-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inceptives Digital ",
  description: "Transform your ideas into powerful mobile and web applications. We specialize in custom iOS, Android, cross-platform development, and enterprise solutions with cutting-edge technology.",
  keywords: ["mobile app development", "web development", "iOS apps", "Android apps", "cross-platform", "React Native", "Flutter", "enterprise solutions", "MVP development"],
  authors: [{ name: "Inceptives Digital" }],
  creator: "Inceptives Digital",
  publisher: "Inceptives Digital",
  robots: "index, follow",
  
  icons: {
    icon: [
      { url: "/assets/image/favico/favicon.ico", sizes: "any" },
      { url: "/assets/image/favico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/image/favico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/image/favico/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/assets/image/favico/site.webmanifest",
  
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mavoraSans.variable}>
      <body className={`${mavoraSans.className} antialiased`}>
        {/* <CursorAnimation/> */}
        <OptimizedCursorAnimation/>
          <Header />
          {children}
          <Footer />
        {/* </CursorAnimation> */}
      </body>
    </html>
  );
}
