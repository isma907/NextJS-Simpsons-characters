import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "The Simpsons Characters",
  description: "",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col bg-cover bg-center bg-fixed bg-zinc-950 text-gray-100"
        style={{ backgroundImage: "url('/assets/img/background.png')" }}
      >
        <Suspense
          fallback={
            <div className="h-16 border-b bg-black/75"></div>
          }
        >
          <Header />
        </Suspense>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
