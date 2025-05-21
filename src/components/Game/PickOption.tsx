import React from "react";
import { Symbol } from "@/types";
import cn from "@/utils/cn";

type PickOptionProps = {
  id: Symbol;
  Icon: React.ElementType;
  selected: boolean;
  className?: string;
  onChange: () => void;
};

function PickOption({
  id,
  Icon,
  selected,
  className,
  onChange
}: PickOptionProps) {
  return (
    <>
      <label
        htmlFor={id}
        className={cn(
          "grid cursor-pointer justify-items-center rounded-md p-[calc(--spacing(2.5)+1px)] transition-colors duration-200",
          selected ? "bg-casper" : "hover:bg-casper/5",
          className
        )}
      >
        <Icon
          className={cn(
            "duration-200",
            selected ? "fill-mirage" : "fill-casper"
          )}
        />
      </label>
      <input
        type="radio"
        name="pickOption"
        id={id}
        className="sr-only"
        value={id}
        checked={selected}
        onChange={onChange}
      />
    </>
  );
}

export { PickOption };
