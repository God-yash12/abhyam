import { Button, ButtonProps } from "@material-tailwind/react";
import React from "react";
import { twMerge } from "tailwind-merge";

const SecondaryButton: React.FC<ButtonProps> = ({ children, className, size, ...rest }) => {
  const baseClass = "w-auto rounded-full border-2 border-white py-2 px-5 text-white bg-gray-600 cursor-pointer";

  return (
    <div>
      {/* @ts-ignore */}
      <Button
        variant="outlined"
        className={twMerge(baseClass, className)}
        size={size || "md"}
        {...rest}
      >
        {children}
      </Button>
    </div>
  );
};

export default SecondaryButton;
