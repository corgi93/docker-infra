"use client";

import { Header } from "@/common/widget";
import { useEffect } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grow">{children}</main>
    </>
  );
}
