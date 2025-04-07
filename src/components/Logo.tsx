import IconX from "../assets/icons/icon-x.svg?react";
import IconO from "../assets/icons/icon-o.svg?react";

function Logo() {
  return (
    <div className="flex w-max gap-2">
      <IconX className="size-8" />
      <IconO className="size-8" />
    </div>
  );
}

export default Logo;
