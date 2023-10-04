import { Footer, Header } from "@/common/widget";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FullHeightLayout from "@/common/components/shared/layout/full-height-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "하이퍼 크루",
  description: "우리동네 / 동호회 / 동네 크루 / 동네친구 / 로컬 친구",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <FullHeightLayout>
          <div className="flex">{children}</div>
        </FullHeightLayout>
        <Footer />
      </body>
    </html>
  );
}
