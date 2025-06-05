import React, { useState } from 'react';
import { MagicCard } from './magicui/magic-card';

const scheduleData = [
  {
    title: 'Day 1 (31/07/25)',
    events: [
      {
        title: 'To Be Announced',
        time: 'To Be Announced',
        speaker: '',
      },
    ],
  },
  // {
  //   title: 'Day 2 (06/08/24)',
  //   events: [
  //     {
  //       title: 'Welcome Note',
  //       speaker: 'by Director, DoAA, DoSA, DIRD, DOCA, Registrar-IIIT Delhi',
  //       time: '10:00-10:45',
  //     },
  //     {
  //       title: 'Gender Sensitization Workshop & ICC',
  //       speaker:
  //         'Ms. Nidhi Mathur, external member - Gender Sensitization Workshop & ICC in collaboration with ICC Committee',
  //       time: '11:00-12:00',
  //     },
  //     {
  //       title: 'Introduction to Library, FMS, IT, Finance, Store, IRD',
  //       time: '12:00-13:30',
  //     },
  //     {
  //       title: 'KeyNoteTalk -1',
  //       speaker: 'Dr. Pankaj Jalote: "Getting the most from your 4 years in the Institute"',
  //       time: '14:30-16:00',
  //     },
  //     {
  //       title: 'Knowing the Self',
  //       speaker: 'by Dr. Anuj Grover',
  //       time: '16:00-18:00',
  //     },
  //     {
  //       title: 'Induction Movie & Acoustic Night',
  //       time: '19:00-21:00',
  //     },
  //   ],
  // },
  // {
  //   title: 'Day 3 (07/08/24)',
  //   events: [
  //     {
  //       title: 'Keynote Speaker Session 1',
  //       speaker: 'by Mr. Anshu Gupta (Founder & Director - Goonj)',
  //       time: '10:30-11:30',
  //     },
  //     {
  //       title: 'Session for programming & non-programming students under Labs',
  //       time: '11:30-13:30',
  //     },
  //     {
  //       title: 'DAC and PLAGIARISM',
  //       speaker: 'By Dr. Smriti Singh',
  //       time: '14:30-15:30',
  //     },
  //     {
  //       title: 'Introduction to Placements',
  //       time: '15:30-16:00',
  //     },
  //     {
  //       title: 'Breaking the ICE',
  //       time: '16:00-17:00',
  //     },
  //     {
  //       title: 'Session with the new batch',
  //       speaker: 'by Prof. G.S. Visveswaran',
  //       time: '17:00-18:00',
  //     },
  //     {
  //       title: 'Movie Night',
  //       time: '18:00-21:00',
  //     },
  //   ],
  // }
];

const Schedule = () => {
  const [currentDay, setCurrentDay] = useState(0);

  const handlePrev = () => {
    if (currentDay > 0) setCurrentDay(currentDay - 1);
  };

  const handleNext = () => {
    if (currentDay < scheduleData.length - 1) setCurrentDay(currentDay + 1);
  };

  const { title, events } = scheduleData[currentDay];

  return (
    <>
    <div id="program" className="min-h-screen bg-white p-6 font-sans">
        <div className="text-center mb-8">
            <h1 className="text-[max(5vw,40px)] font-bold text-[#F5A800]">Program</h1>
            <p className="text-gray-600">AISS 2025 - Artificial Intelligence Summer School</p>
        </div>
      <div className="max-w-4xl mx-auto bg-grey rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <div className="space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentDay === 0}
              className="px-4 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50"
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentDay === scheduleData.length - 1}
              className="px-4 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <MagicCard className="p-4 rounded-xl" key={index} gradientColor="#D9D9D955">
              <h3 className="text-lg font-semibold text-gray-700">{event.title}</h3>
              {event.speaker && <p className="text-sm text-gray-600 mt-1">{event.speaker}</p>}
              <p className="text-sm text-gray-500 mt-1">{event.time}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Schedule;
