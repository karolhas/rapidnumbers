"use client";

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Rapid Numbers",
  description: "Improve your speed and focus",
  icons: {
    icon: [
      {
        url: "./favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <UserProvider>
        <body className="h-[100vh] flex justify-center items-center bg-[#f2f2f2] dark:bg-[#161616]">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}
