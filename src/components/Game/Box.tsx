import React from "react";
import cn from "@/utils/cn";

type BoxProps = {
  className?: string;
  children: React.ReactNode;
};

function Box({ className, children }: BoxProps) {
  return <div className={cn("grid gap-5", className)}>{children}</div>;
}

export { Box };
