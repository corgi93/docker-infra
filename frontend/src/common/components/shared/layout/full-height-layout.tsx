import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function FullHeightLayout({ children }: Props) {
  return <div className="flex flex-col h-full">{children}</div>;
}
