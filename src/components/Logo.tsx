import IconX from "../assets/icons/icon-x.svg?react";
import IconO from "../assets/icons/icon-o.svg?react";

function Logo() {
  return (
    <div className="w-max flex gap-2">
      <IconX className="w-8 h-8" />
      <IconO className="w-8 h-8" />
    </div>
  );
}

export default Logo;
