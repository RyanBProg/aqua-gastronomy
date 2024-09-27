"use client";

import { FormEvent, RefObject, useRef, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, isWithinInterval } from "date-fns";
import { format } from "date-fns";
import { motion } from "framer-motion";

export default function page() {
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const [selectedTime, setSelectedTime] = useState<null | string>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const timeSlots = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      setAvailableTimes(timeSlots);
      setSelectedTime(null);
    }
  };

  // Filter dates to only show up to 1 month from now
  const filterDates = (date: Date) => {
    const today = new Date();
    const nextMonth = addMonths(today, 1);
    return isWithinInterval(date, { start: today, end: nextMonth });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSelectedDate(null);
    setAvailableTimes([]);
    setSelectedTime(null);

    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <div className="contentContainer my-40">
      <h1 className="text-[6rem] text-white/20 font-bold leading-tight">
        Reservations
      </h1>
      <div className="font-normal container lg:max-w-[800px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl mx-auto">
        {/* Date Picker */}
        <div className="mb-6 grid">
          <label className="text-neutral-300 mb-2">Select a Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            filterDate={filterDates} // Limits dates to next month
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            className="w-full text-neutral-700 px-3 py-2 rounded-md"
          />
        </div>
        {/* Show Available Time Slots */}
        {selectedDate && (
          <form onSubmit={handleSubmit}>
            <h3 className="mb-2 text-neutral-300">
              Available Times for {format(selectedDate, "MMMM d, yyyy")}:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {availableTimes.length > 0 ? (
                availableTimes.map((time, index) => (
                  <motion.button
                    key={index}
                    value={time}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => setSelectedTime(e.currentTarget.value)}
                    className={`${
                      selectedTime === time ? "bg-neutral-400" : "bg-white"
                    } px-4 py-2 text-black rounded-md`}>
                    {time}
                  </motion.button>
                ))
              ) : (
                <p className="text-gray-500">No available time slots</p>
              )}
            </div>
            {selectedTime && (
              <motion.button
                type="submit"
                className="mt-10 bg-gradient-to-r from-blue-400 to-teal-300 text-black rounded-md px-6 py-2 text-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}>
                Submit
              </motion.button>
            )}
          </form>
        )}
        <Modal dialogRef={dialogRef} />
      </div>
    </div>
  );
}

type TModal = {
  dialogRef: RefObject<HTMLDialogElement>;
};

function Modal({ dialogRef }: TModal) {
  return (
    <dialog ref={dialogRef} className="rounded-lg p-10">
      <h2 className="font-bold text-3xl mb-2">Thanks For Your Booking</h2>
      <p className="text-neutral-700 text-lg">We look forward to seeing you</p>
      <button
        className="block mx-auto mt-6 bg-gradient-to-r from-blue-400 to-teal-300 text-black rounded-md px-6 py-2 text-lg font-semibold"
        onClick={() => dialogRef.current && dialogRef.current.close()}>
        Ok
      </button>
    </dialog>
  );
}
