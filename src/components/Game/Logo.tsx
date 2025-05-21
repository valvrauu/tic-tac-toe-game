import { Link } from "react-router";
import cn from "@/utils/cn";
import IconX from "@/assets/icons/icon-x.svg?react";
import IconO from "@/assets/icons/icon-o.svg?react";

type LogoProps = {
  className?: string;
};

function Logo({ className }: LogoProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-w-min cursor-pointer items-center justify-center gap-2",
        className
      )}
      to="/"
    >
      <IconX className="fill-turquoise size-8" />
      <IconO className="fill-saffron size-8" />
    </Link>
  );
}

export { Logo };
