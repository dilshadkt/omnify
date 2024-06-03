import React from "react";

const StatusButton = ({ value }: { value: string }) => {
  const vairent = `btn-${value}`;
  return (
    <button
      style={{
        background:
          value === "lead"
            ? "#EFF6FF"
            : value === "active"
            ? "#F0FDF9"
            : "#F1F5F9",
      }}
      className={`px-2 py-[2px] rounded-full ${vairent} flexCenter`}
    >
      <div
        style={{
          background:
            value === "lead"
              ? "#3B82F6"
              : value === "active"
              ? "#15803D"
              : "#334155",
        }}
        className={`w-2 h-2 rounded-full bg-black`}
      ></div>
      <span
        style={{
          color:
            value === "lead"
              ? "#3B82F6"
              : value === "active"
              ? "#15803D"
              : "#334155",
        }}
        className="ml-2 capitalize medium-12"
      >
        {value}
      </span>
    </button>
  );
};

export default StatusButton;
