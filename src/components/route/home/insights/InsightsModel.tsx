import React from "react";
import { IconType } from "react-icons";

interface InsightsModelProps {
  number: number;
  label: string;
  icon: IconType;
}

export default function InsightsModel({
  number,
  label,
  icon: Icon,
}: InsightsModelProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className="rounded-full border-4 border-gray-500 bg-gray-800 p-3 text-white"
        aria-label={`${label} Icon`}
      >
        <Icon size={30} />
      </div>
      <div className="text-3xl font-bold text-primary-200 md:text-4xl">
        {number}
      </div>
      <div className="text-xl font-bold text-primary-100 md:text-2xl">
        {label}
      </div>
    </div>
  );
}
