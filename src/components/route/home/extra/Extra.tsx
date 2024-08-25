import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsFillStarFill } from "react-icons/bs";
import img1 from "../../../../images/course1.jpg";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Extra() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="max-w-5xl py-10 mx-auto gap-10 grid grid-cols-3  justify-center">
      <div className="space-y-5">
        <p className="text-3xl">Calender</p>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="space-y-5">
        <p className="text-3xl">Popular Courses</p>
        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-3xl">Recent Courses</p>
        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2">
              <img src={img1} alt="" className="rounded-md" />
            </div>
            <div className="col-span-6">
              <div>Principles of Written English, Part 1</div>
              <div className="text-sm font-thin">
                <div className="space-x-2">
                  <span className="text-primary-200">December 24, 2019</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-primary-200">John Doe</span>
                </div>
                <div
                  className="flex text-primary-200
                 items-center gap-2"
                >
                  <span>
                    <BsFillStarFill />
                  </span>
                  <span>86.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
