import Image from "next/image";
import React from "react";

const Button = ({
  value,
  varient,
  icon,
}: {
  value: string;
  varient: string;
  icon?: string;
}) => {
  return (
    <button
      className={`py-2 px-3   medium-14 rounded-md ${
        icon ? `flexStart` : `flexCenter`
      } ${varient}`}
    >
      {icon && (
        <Image
          src={icon}
          alt={value}
          width={16}
          height={16}
          className="mr-[6px]"
        />
      )}
      <span>{value}</span>
    </button>
  );
};

export default Button;
