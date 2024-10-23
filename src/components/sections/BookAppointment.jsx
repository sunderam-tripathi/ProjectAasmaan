"use client";

import React, { useState } from "react";

import LeftArrow from "@/assets/left-arrow.svg";
import RightArrow from "@/assets/right-arrow.svg";
import DownArrow from "@/assets/down-arrow.svg";
import Select from "../forms/Select";

const BookAppointment = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = [
    { time: "08:00 A.M", status: "taken" },
    { time: "09:00 A.M", status: "available" },
    { time: "10:00 A.M", status: "available" },
    { time: "11:00 A.M", status: "taken" },
    { time: "12:00 A.M", status: "taken" },
  ];

  return (
    <div
      className="px-1 lg:px-20 py-1 lg:py-12 font-base-mono"
      id="book-appointment"
    >
      <div className="bg-white text-black flex flex-col">
        {/* Header */}
        <div className="bg-light-green gap-3 lg:gap-0 px-4 py-3 flex flex-col lg:flex-row justify-between items-center font-base-mono tracking-tight">
          <div className="flex-mob">
            <h1 className="text-base font-bold">September 8, 2023</h1>
            <p className="text-sm font-semibold">Friday</p>
          </div>
          <div className="lg:flex  grid grid-cols-2 lg:flex-row gap-3 lg:gap-0 space-x-4">
            <button className="bg-black text-white place-self-center px-4 py-3 text-sm flex items-center space-x-4">
              <LeftArrow />
              <span>Today</span>
              <RightArrow />
            </button>

            <Select
              name="appointment-type"
              options={[
                { value: "day", label: "Day view" },
                { value: "month", label: "Month view" },
              ]}
            />

            <button className="bg-black hidden lg:block text-white px-4 py-3 text-sm rounded-full">
              Set up a meeting
            </button>
          </div>
          <button className="bg-black lg:hidden text-white px-4 py-3 text-sm rounded-full">
            Set up a meeting
          </button>
        </div>

        <div className="flex flex-col lg:flex-row flex-grow">
          {/* Left Section: Appointment and Time Slots */}
          <div className="w-full lg:w-2/3 bg-white-green p-6">
            {/* Appointment Type */}
            <div className="mb-4 flex lg:block flex-col gap-4 font-base-mono space-x-4">
              <Select
                name="appointment-type"
                className="text-light-green bg-black"
                options={[
                  {
                    value: "strategic-discussion",
                    label: "Strategic Discussion",
                  },
                ]}
              />
              <span className="text-sm tracking-tighter">
                (Free for new business*)
              </span>
            </div>
            <hr className="mb-4 border-gray-400 border-b-1.5" />
            {/* Time Zone Selector */}
            <div className="mb-4 font-base-mono">
              <label className="font-bold mr-2">Time in -</label>

              <Select
                name="time-zone"
                className="text-light-green bg-black"
                options={[
                  { value: "UTC", label: "UTC" },
                  { value: "PST", label: "PST" },
                  { value: "EST", label: "EST" },
                ]}
              />
            </div>
            {/* Time Slots */}
            <div className="flex flex-wrap gap-4 lg:gap-20 mb-6 text-center justify-center mt-12 px-0 lg:px-8">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-bold w-auto ${
                    slot.status === "available"
                      ? "bg-light-green text-black"
                      : "bg-gray text-white"
                  }`}
                  onClick={() => setSelectedTime(slot.time)}
                >
                  {slot.time}
                </button>
              ))}
            </div>

            {/* Availability Legend */}
            <div className="flex items-center space-x-4 mb-6 text-base justify-around mt-16">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray mr-1"></div>
                <span>Taken</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-light-green mr-1 border-[1px] border-black"></div>
                <span>Available</span>
              </div>
            </div>
            {/* Footer Note */}
            <div className="mt-10">
              <h3 className="font-bold text-sm mb-5">
                *Your Right to Affordable Digital Excellence
              </h3>
              <p className="text-xs">
                Welcome to ANANSOL, where we stand by the belief that in the age
                of generative AI, affordable digital services are not a
                privilege but a right for small and medium businesses. Schedule
                an appointment for Graphic Design, Strategic Discussions, or a
                General Chat, and let us be the allies in your business journey.
                Especially for those less than a year old, we offer these
                services free of charge.
              </p>
            </div>
          </div>

          {/* Right Section: Calendar */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 py-16">
            <div className="flex justify-between px-8 py-0">
              <button className="text-xl">&lt;</button>
              <div className="text-center">
                <p>September, 2023</p>
              </div>
              <button className="text-xl">&gt;</button>
            </div>
            {/* Calendar Grid */}
            <div className="px-8 py-8">
              <div className="grid grid-cols-7 gap-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                  <div key={index} className="text-center font-bold">
                    {day}
                  </div>
                ))}
                {[...Array(30)].map((_, index) => (
                  <div
                    key={index}
                    className={`text-center border ${
                      index + 1 === 8 ? "bg-light-green" : ""
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
