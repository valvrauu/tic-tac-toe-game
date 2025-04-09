import React from "react";
import clsx from "clsx";

type LayoutProps = {
  position?: "top" | "center" | "bottom";
  children: React.ReactNode;
};

function Layout({ position = "top", children }: LayoutProps) {
  const base = "grid min-h-dvh p-6";

  const positions = {
    top: "content-top",
    center: "content-center",
    bottom: "content-bottom"
  };

  return <main className={clsx(base, positions[position])}>{children}</main>;
}

export default Layout;
