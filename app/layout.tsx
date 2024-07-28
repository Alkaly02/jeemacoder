import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/app/components/home/routeLayout";
import { roboto } from "@/app/components/ui/fonts";
import { NavBar } from "./components/home/navBar";

export const metadata: Metadata = {
  title: "jemacoder ",
  description: "hackatons en ligne ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <head>
        <meta name="csrf-token" content="{{ csrf_token() }}" ></meta>
      </head>

      <body>
        <ReactQueryProvider>
          <main className={`${roboto.className} font-mono`}>
          {children}
          </main>
        </ReactQueryProvider>
      
      </body>
    </html>
  );
}
