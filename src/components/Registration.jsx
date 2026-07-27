import React, { useState } from 'react';
import { MagicCard } from './magicui/magic-card';

const scheduleData = [
  {
    title: 'Day 1 (06/08/26)',
    events: [
      {
        title: 'TBD',
        time: '09:30 - 11:00',
        speaker: '',
      },
      {
        title: 'Tea Break',
        time: '11:00 - 11:30',
        speaker: '',
      },
      {
        title: 'Hands On Session',
        speaker: 'Rajesh',
        time: '11:30 - 13:00',
      },
      {
        title: 'Lunch',
        time: '13:00 - 14:00',
        speaker: '',
      },
      {
        title: 'Invited Talk',
        speaker: 'Saurav',
        time: '14:00 - 15:30',
      },
      {
        title: 'Mathworks Hands On Session',
        speaker: '',
        time: '16:00 - 17:30',
      },
      {
        title: 'Robotics Lab Visit',
        time: 'After Session',
        speaker: '',
      },
    ],
  },
  {
    title: 'Day 2 (07/08/26)',
    events: [
      {
        title: 'Invited Talk',
        speaker: 'Rahul Kala',
        time: '09:30 - 11:00',
      },
      {
        title: 'Tea Break',
        time: '11:00 - 11:30',
        speaker: '',
      },
      {
        title: 'Invited Talk',
        speaker: 'Pradipto',
        time: '11:30 - 13:00',
      },
      {
        title: 'Lunch',
        time: '13:00 - 14:00',
        speaker: '',
      },
      {
        title: 'Invited Talk',
        speaker: 'Manohar',
        time: '14:00 - 15:30',
      },
      {
        title: 'Invited Talk',
        speaker: 'Sujit',
        time: '16:00 - 17:30',
      },
      {
        title: 'Dinner',
        time: '19:00 Onwards',
        speaker: '',
      },
    ],
  },
  {
    title: 'Day 3 (08/08/26)',
    events: [
      {
        title: 'Invited Talk',
        speaker: 'Vineet',
        time: '09:30 - 11:00',
      },
      {
        title: 'Tea Break',
        time: '11:00 - 11:30',
        speaker: '',
      },
      {
        title: 'Invited Talk',
        speaker: 'Antony',
        time: '11:30 - 13:00',
      },
      {
        title: 'Lunch',
        time: '13:00 - 14:00',
        speaker: '',
      },
      {
        title: 'TBD',
        time: '14:00 - 15:30',
        speaker: '',
      },
      {
        title: 'Invited Talk',
        speaker: 'Ravi',
        time: '16:00 - 17:30',
      },
      {
        title: 'TBD',
        time: 'After Session',
        speaker: '',
      },
    ],
  },
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
            <p className="text-gray-600">AISS 2026 - Artificial Intelligence Summer School</p>
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
