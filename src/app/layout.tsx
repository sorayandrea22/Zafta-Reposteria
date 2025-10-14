import type { Metadata } from "next";
import "./globals.css";
import { fontFredoka } from "@/config/font";
import { HeaderNavigation } from "@/components/ui";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Zafta",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontFredoka.className} antialiased bg-secondary z-30`}
      >
        <HeaderNavigation />
        {children}
        <Footer />
        <Toaster
          toastOptions={{
            className: "text-center",
          }}
        />
      </body>
    </html>
  );
}
