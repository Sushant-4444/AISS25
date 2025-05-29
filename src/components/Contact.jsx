import React, { useRef } from 'react';
import { MagicCard } from './magicui/magic-card';

const Form = () => {
  const formRef = useRef();

  return (
    <div id="register" className='flex flex-col items-center justify-center w-[100%]'>
        <span className='text-[max(40px,5vw)] font-bold text-[#F5A800] mb-[4vh]'>Registration Form</span>
    <MagicCard className="p-4 rounded-xl" gradientColor="#D9D9D955">
              {/* Form content goes here */}
               <form
      ref={formRef}
      action="https://script.google.com/macros/s/AKfycbxaLARg9Ct4kWQ_Pc3-zOpSugbbCWljUDRSintCjQ4lNZZttwgLOkNigqOPCsLixMoeAA/exec"
      method="POST"
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6"
    >
      {/* <h2 className="text-2xl font-bold text-center">Summer School Registration</h2> */}

      {/* Email */}
      <input type="email" name="email" placeholder="Email *" required className="w-full p-3 border border-gray-300 rounded-lg" />

      {/* Name */}
      <input type="text" name="name" placeholder="Name *" required className="w-full p-3 border border-gray-300 rounded-lg" />

      {/* Affiliation */}
      <input type="text" name="affiliation" placeholder="Affiliation *" required className="w-full p-3 border border-gray-300 rounded-lg" />

      {/* Location */}
      <div>
        <p className="font-medium mb-2">Location *</p>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <label><input type="radio" name="location" value="Delhi-NCR" required className="mr-2" />Delhi-NCR</label>
          <label><input type="radio" name="location" value="Outside Delhi-NCR" className="mr-2" />Outside Delhi-NCR</label>
        </div>
      </div>

      {/* Accommodation */}
      <div>
        <p className="font-medium mb-2">Accommodation Needed *</p>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <label><input type="radio" name="accommodation" value="Yes" required className="mr-2" />Yes</label>
          <label><input type="radio" name="accommodation" value="No" className="mr-2" />No</label>
        </div>
      </div>

      {/* Participant Category */}
      <div>
        <p className="font-medium mb-2">Participant Category *</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "IIIT-Delhi Student (BTech, MTech, PhD)",
            "Student other than IIIT-Delhi (BTech, MTech, PhD)",
            "Postdoc",
            "Faculty",
            "Industrial Expert",
            "Other"
          ].map((label) => (
            <label key={label}>
              <input type="radio" name="participantCategory" value={label} required className="mr-2" />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Participant Program */}
      <div>
        <p className="font-medium mb-2">Participant Program *</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["B.Tech.", "M.Tech.", "Ph.D.", "Postdoc", "Faculty/Researcher", "Other"].map((label) => (
            <label key={label}>
              <input type="radio" name="participantProgram" value={label} required className="mr-2" />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Poster Presentation */}
      <div>
        <p className="font-medium mb-2">Will you participate in the Poster Presentation? *</p>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <label><input type="radio" name="posterPresentation" value="Yes" required className="mr-2" />Yes</label>
          <label><input type="radio" name="posterPresentation" value="No" className="mr-2" />No</label>
          <label><input type="radio" name="posterPresentation" value="Maybe" className="mr-2" />Maybe</label>
        </div>
      </div>

      {/* Hackathon Participation */}
      <div>
        <p className="font-medium mb-2">Will you participate in the Hackathon? *</p>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <label><input type="radio" name="hackathon" value="Yes" required className="mr-2" />Yes</label>
          <label><input type="radio" name="hackathon" value="No" className="mr-2" />No</label>
          <label><input type="radio" name="hackathon" value="Maybe" className="mr-2" />Maybe</label>
        </div>
      </div>

      {/* Cancel Acknowledgement */}
      <label className="block text-sm">
        <input type="checkbox" name="cancelAcknowledgement" value="Accept" required className="mr-2" />
        I will cancel my registration latest by <strong>July 15th, 2025</strong> if I decide not to attend the summer school.
      </label>

      {/* Transaction ID */}
      <div>
        <label className="block font-medium mb-1">
          Pay your fees <a href="https://form.qfixonline.com/aiss" className="text-blue-600 underline" target="_blank" rel="noreferrer">here</a> and add the transaction ID below *
        </label>
        <input type="text" name="transactionId" placeholder="Transaction ID" required className="w-full p-3 border border-gray-300 rounded-lg" />
      </div>

      {/* Submit */}
      <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 text-white py-3 rounded-lg transition">
        Submit
      </button>
    </form>
    </MagicCard>
    </div>
  );
};

export default Form;
