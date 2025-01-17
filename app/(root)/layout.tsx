import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSideBar";
import RightSidebar from "@/components/shared/RightSideBar";
import Bottombar from "@/components/shared/Bottombar";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clouds",
  description: "A Next.js 13 Meta Clouds application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Topbar />
          
          <main className="flex flex-row">
            <LeftSidebar />

            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            {/* <RightSidebar />
            Remove */}
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}