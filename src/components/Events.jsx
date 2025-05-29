import React from "react";
import { MagicCard } from "./magicui/magic-card";

export default function Contact() {
  return (<>
  <div id="venue" className="py-12 flex flex-col items-center justify-center mt-[5vh]">
    <MagicCard className="p-4 rounded-xl mb-8 flex justify-center items-center" gradientColor="#D9D9D955">
        <div className="flex flex-col items-center">
   <h2 className="text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh]">Venue</h2>
    <div className="max-w-[1000px] w-[80vw] mx-auto p-6 bg-white rounded-2xl shadow-md text-center space-y-6 flex flex-wrap justify-center items-center">
      <div className="mr-10">
        <iframe
          title="IIIT Delhi Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.41089623434!2d77.2683743!3d28.5451355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a8a8692ff7%3A0xa9b9c9f47628579!2sIIIT-Delhi!5e0!3m2!1sen!2sin!4v1652912071551!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, maxWidth: 400 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow"
        ></iframe>
      </div>
       <div className="text-gray-700 space-y-3">
        <div>
          <span className="font-semibold">📍 Venue:</span><br />
          B003 RnD <br />
          IIIT-Delhi, Okhla Industrial Estate, Phase III, New Delhi
            <br />
            Near Govind Puri Metro Station
        </div>
        <div>
          <span className="font-semibold">✉️ Email:</span><br />
          <a href="mailto:aiss@iiitd.ac.in" className="text-blue-600 hover:underline">
            aiss@iiitd.ac.in
          </a>
        </div>
      </div>
    </div>
    </div>
    </MagicCard>
    </div>
    </>
  );
}
