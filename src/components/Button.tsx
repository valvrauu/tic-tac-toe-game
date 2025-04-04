import React from "react";
import clsx from "clsx";

type Props = {
  variant: "primary" | "secondary" | "icon";
  color: "yellow" | "blue" | "gray";
  className?: string;
  children: React.ReactNode;
};

function Button({variant, color, className, children}: Props) {
  const base = "flex justify-center items-center text-mirage font-bold uppercase cursor-pointer tracking-wider leading-[normal] duration-200";

  const variants = {
    primary: "rounded-lg inset-shadow-lg text-lg p-3.5 pb-5.5 tablet:p-[calc(--spacing(4)+1px)] tablet:pb-[calc(--spacing(6)+1px)] tablet:text-xl",
    secondary: "rounded-sm inset-shadow-sm text-lg p-[calc(--spacing(4)+1px)] pt-[calc(--spacing(4)-1px)]",
    icon: "rounded-xs inset-shadow-sm p-3 [&>svg]:size-4 tablet:p-4 tablet:[&>svg]:size-5 tablet:rounded-sm"
  };

  const colors = {
    yellow: "bg-saffron inset-shadow-pizza hover:bg-golden-tainoi",
    blue: "bg-turquoise inset-shadow-blue-chill hover:bg-turquoise-blue",
    gray: "bg-casper inset-shadow-lynch hover:bg-botticelli"
  };

  return (
    <button className={clsx(base, variants[variant], colors[color], className)}>
      {children}
    </button>
  );
}

export default Button;
