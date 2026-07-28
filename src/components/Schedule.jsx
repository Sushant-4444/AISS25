import React, { useState } from 'react';
import { MagicCard } from './magicui/magic-card';

const scheduleData = [
  {
    label: 'Day 1',
    date: '6th August',
    events: [
      { title: 'Inauguration Ceremony', time: '9:30 – 11:00', type: 'ceremony' },
      { title: 'Tea Break',             time: '11:00 – 11:30', type: 'break' },
      { title: 'Mathworks Hands-on Session 1', time: '11:30 – 13:00', type: 'session' },
      { title: 'Lunch',                 time: '13:00 – 14:00', type: 'break' },
      { title: 'Guest Talk',            time: '14:00 – 15:30', speaker: 'Dr. Sourav Garg', type: 'talk' },
      { title: 'Mathworks Hands-on Session 2', time: '16:00 – 17:30', type: 'session' },
      { title: 'Robotics Lab Visit',    time: 'After Session', type: 'extra' },
    ],
  },
  {
    label: 'Day 2',
    date: '7th August',
    events: [
      { title: 'Guest Talk', time: '9:30 – 11:00',  speaker: 'Dr. Rahul Kala',      type: 'talk' },
      { title: 'Tea Break',  time: '11:00 – 11:30', type: 'break' },
      { title: 'Guest Talk', time: '11:30 – 13:00', speaker: 'Dr. Pradipta Biswas', type: 'talk' },
      { title: 'Lunch',      time: '13:00 – 14:00', type: 'break' },
      { title: 'Guest Talk', time: '14:00 – 15:30', speaker: 'Dr. Sujit PB',    type: 'talk' },
      { title: 'Guest Talk', time: '16:00 – 17:30', speaker: 'Dr. Manohar Kumar',   type: 'talk' },
      { title: 'Dinner',     time: 'After Session',  type: 'extra' },
    ],
  },
  {
    label: 'Day 3',
    date: '8th August',
    events: [
      { title: 'Guest Talk',       time: '9:30 – 11:00',  speaker: 'Dr. Vineet Vashista', type: 'talk' },
      { title: 'Tea Break',        time: '11:00 – 11:30', type: 'break' },
      { title: 'Invited Talk',      time: '11:30 – 13:00', speaker: 'Dr. Antony Thomas', type: 'talk' },
      { title: 'Lunch',            time: '13:00 – 14:00', type: 'break' },
      { title: 'Invited Talk',     time: '14:00 – 15:30', speaker: 'Dr. Ravi Garg',    type: 'talk' },
      { title: 'Closing Ceremony', time: '16:00 – 17:30', type: 'ceremony' },
    ],
  },
];

const typeStyles = {
  talk:     { bar: 'bg-[#F5A800]',  badge: 'bg-amber-50 text-[#a56f00] border border-amber-200' },
  session:  { bar: 'bg-blue-400',   badge: 'bg-blue-50 text-blue-700 border border-blue-200' },
  ceremony: { bar: 'bg-purple-400', badge: 'bg-purple-50 text-purple-700 border border-purple-200' },
  break:    { bar: 'bg-slate-300',  badge: 'bg-slate-50 text-slate-500 border border-slate-200' },
  extra:    { bar: 'bg-emerald-400',badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
};

const typeLabel = {
  talk:     'Guest Talk',
  session:  'Hands-on',
  ceremony: 'Ceremony',
  break:    'Break',
  extra:    'Special',
};

const Schedule = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const { label, date, events } = scheduleData[currentDay];

  return (
    <div id="program" className="min-h-screen bg-white p-6 font-sans">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-[max(5vw,40px)] font-bold text-[#F5A800]">Program Schedule</h1>
        <p className="text-gray-500 mt-1">AISS 2026 — Artificial Intelligence Summer School</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Day tab buttons */}
        <div className="flex gap-3 mb-8 justify-center">
          {scheduleData.map((day, i) => (
            <button
              key={i}
              onClick={() => setCurrentDay(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                currentDay === i
                  ? 'bg-gradient-to-r from-[#F5A800] to-[#c47f00] text-white shadow-md scale-105'
                  : 'bg-white border border-[#f1d18c] text-[#a56f00] hover:bg-amber-50'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Day header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f1d18c]" />
          <div className="text-center">
            <span className="text-lg font-bold text-slate-800">{label}</span>
            <span className="mx-2 text-slate-400">·</span>
            <span className="text-base text-slate-500">{date}</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f1d18c]" />
        </div>

        {/* Event list */}
        <div className="space-y-3">
          {events.map((event, index) => {
            const styles = typeStyles[event.type] || typeStyles.talk;
            return (
              <MagicCard
                key={index}
                className="rounded-2xl overflow-hidden"
                gradientColor="#D9D9D955"
              >
                <div className="flex items-stretch">
                  {/* Left colored bar */}
                  <div className={`w-1.5 flex-shrink-0 ${styles.bar}`} />

                  <div className="flex-1 px-5 py-4 flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-semibold text-slate-800">{event.title}</h3>
                      </div>
                      {event.speaker && (
                        <p className="text-sm text-slate-500 mt-0.5">{event.speaker}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{event.time}</span>
                    </div>
                  </div>
                </div>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
