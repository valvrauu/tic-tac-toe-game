import React from "react";
import { Link, LinkProps } from "react-router";
import clsx from "clsx";

type BaseProps = {
  variant: "primary" | "secondary" | "icon";
  color: "yellow" | "blue" | "gray";
  className?: string;
  children: React.ReactNode;
};

const styles = {
  base: "flex justify-center items-center text-mirage font-bold uppercase cursor-pointer tracking-wider leading-[normal] duration-200",
  variants: {
    primary:
      "rounded-lg inset-shadow-lg text-lg p-3.5 pb-5.5 tablet:p-[calc(--spacing(4)+1px)] tablet:pb-[calc(--spacing(6)+1px)] tablet:text-xl",
    secondary:
      "rounded-sm inset-shadow-sm text-lg p-[calc(--spacing(4)+1px)] pt-[calc(--spacing(4)-1px)]",
    // prettier-ignore
    icon:
      "rounded-xs inset-shadow-sm p-3 [&>svg]:size-4 tablet:p-4 tablet:[&>svg]:size-5 tablet:rounded-sm"
  },
  colors: {
    yellow: "bg-saffron inset-shadow-pizza hover:bg-golden-tainoi",
    blue: "bg-turquoise inset-shadow-blue-chill hover:bg-turquoise-blue",
    gray: "bg-casper inset-shadow-lynch hover:bg-botticelli"
  }
};

function renderButton(Element: React.ElementType, props: BaseProps) {
  const { variant, color, className, children, ...rest } = props;
  return (
    <Element
      className={clsx(
        styles.base,
        styles.variants[variant],
        styles.colors[color],
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  );
}

// prettier-ignore
function Button(props: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return renderButton("button", props);
}

function LinkButton(props: BaseProps & LinkProps) {
  return renderButton(Link, props);
}

// prettier-ignore
function AnchorButton(props: BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return renderButton("a", props);
}

export { Button, LinkButton, AnchorButton };
