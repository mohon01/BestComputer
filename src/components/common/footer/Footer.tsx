import React from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaPinterestSquare,
  FaRss,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-800  px-2">
        <div className="max-w-3xl flex flex-col gap-8 items-center text-white py-10 mx-auto ">
          <p className="text-4xl font-loveYa font-bold">Education Center</p>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-end text-sm text-end md:text-lg  flex-col">
              <p>San Francisco, CA 04534 US</p>
              <p>2334 San st</p>
            </div>
            <div>
              <p>Phone: 239479348</p>
              <p>Fax: 3455543</p>
            </div>
          </div>
          <div className="md:text-5xl text-xl flex gap-10 items-center">
            <FaFacebookSquare />
            <FaXTwitter />
            <FaDribbble />
            <FaPinterestSquare />
            <FaRss />
          </div>
        </div>
      </div>
      <div className="flex text-center items-center justify-center py-4">
        © 2019 All Rights Reserved. Terms of use and Privacy Policy
      </div>
    </div>
  );
}
