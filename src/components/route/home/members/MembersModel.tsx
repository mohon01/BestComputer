import React from "react";
import img from "../../../../images/user.webp";

export default function MembersModel() {
  return (
    <div className="relative flex h-32 w-96 bg-primary-100">
      <div className="absolute left-1/2 top-6 -translate-x-1/2 transform space-y-4">
        <img
          src={img}
          alt=""
          className="h-48 w-48 rounded-full border-4 object-cover"
        />
        <div>
          <div className="text-2xl font-bold">Dummy name</div>
          <div className="text-xl font-bold text-primary-100">Dummy text</div>
        </div>
        <div className="mx-auto h-1 w-20 bg-gray-700"></div>
      </div>
    </div>
  );
}
