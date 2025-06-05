import React, { useRef, useState } from 'react';
import { MagicCard } from './magicui/magic-card';

const Form = () => {
  const formRef = useRef();
  const [fields, setFields] = useState({
    email: "",
    name: "",
    affiliation: "",
    transactionId: "",
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div id="register" className='flex flex-col items-center justify-center w-[100%]'>
      <span className='text-[max(48px,6vw)] font-bold text-[#F5A800] mb-[4vh]'>Registration Form</span>
      <MagicCard className="p-4 rounded-xl" gradientColor="#D9D9D955">
        <form
          ref={formRef}
          action="https://script.google.com/macros/s/AKfycbzaX5hAca8w7tE21yttkq4jVYThkTfW0rwa0rWds_MJtnINnqSIqwiPvLgu0Ati_CYfSw/exec"
          method="POST"
          className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6"
        >
          {/* Email */}
          <div className="border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
            <p className="font-medium mb-2 text-lg text-teal-700">What is your Email?</p>
            <div className="relative">
              {(fields.email || document.activeElement.name === "email") && (
                <label className="absolute -top-5 left-2 text-sm text-teal-700 transition-all duration-200 bg-teal-50 px-1">
                  Email
                </label>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={fields.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Name */}
          <div className="border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
            <p className="font-medium mb-2 text-lg text-teal-700">What is your Name?</p>
            <div className="relative">
              {(fields.name || document.activeElement.name === "name") && (
                <label className="absolute -top-5 left-2 text-sm text-teal-700 transition-all duration-200 bg-teal-50 px-1">
                  Name
                </label>
              )}
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={fields.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Affiliation */}
          <div className="border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
            <p className="font-medium mb-2 text-lg text-teal-700">What is your Affiliation?</p>
            <div className="relative">
              {(fields.affiliation || document.activeElement.name === "affiliation") && (
                <label className="absolute -top-5 left-2 text-sm text-teal-700 transition-all duration-200 bg-teal-50 px-1">
                  Affiliation
                </label>
              )}
              <input
                type="text"
                name="affiliation"
                placeholder="Affiliation"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={fields.affiliation}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Small questions in two rows, side by side on desktop */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Location */}
            <div className="flex-1 min-w-[250px] max-w-[350px] border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
              <p className="font-medium mb-2 text-lg text-teal-700">What is your Location?</p>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <label><input type="radio" name="location" value="Delhi-NCR" required className="mr-2" />Delhi-NCR</label>
                <label><input type="radio" name="location" value="Outside Delhi-NCR" className="mr-2" />Outside Delhi-NCR</label>
              </div>
            </div>
            {/* Accommodation */}
            <div className="flex-1 min-w-[250px] max-w-[350px] border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
              <p className="font-medium mb-2 text-lg text-teal-700">Do you need Accommodation?</p>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <label><input type="radio" name="accommodation" value="Yes" required className="mr-2" />Yes</label>
                <label><input type="radio" name="accommodation" value="No" className="mr-2" />No</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Poster Presentation */}
            <div className="flex-1 min-w-[250px] max-w-[350px] border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
              <p className="font-medium mb-2 text-lg text-teal-700">Will you participate in the Poster Presentation?</p>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <label><input type="radio" name="posterPresentation" value="Yes" required className="mr-2" />Yes</label>
                <label><input type="radio" name="posterPresentation" value="No" className="mr-2" />No</label>
                <label><input type="radio" name="posterPresentation" value="Maybe" className="mr-2" />Maybe</label>
              </div>
            </div>
            {/* Hackathon */}
            <div className="flex-1 min-w-[250px] max-w-[350px] border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
              <p className="font-medium mb-2 text-lg text-teal-700">Will you participate in the Hackathon?</p>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <label><input type="radio" name="hackathon" value="Yes" required className="mr-2" />Yes</label>
                <label><input type="radio" name="hackathon" value="No" className="mr-2" />No</label>
                <label><input type="radio" name="hackathon" value="Maybe" className="mr-2" />Maybe</label>
              </div>
            </div>
          </div>

          {/* Participant Category */}
          <div className="border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
            <p className="font-medium mb-2 text-lg text-teal-700">What is your Participant Category?</p>
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
          <div className="border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
            <p className="font-medium mb-2 text-lg text-teal-700">What is your Participant Program?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["B.Tech.", "M.Tech.", "Ph.D.", "Postdoc", "Faculty/Researcher", "Other"].map((label) => (
                <label key={label}>
                  <input type="radio" name="participantProgram" value={label} required className="mr-2" />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Cancel Acknowledgement */}
          <div className="border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
            <p className="font-medium mb-2 text-lg text-teal-700">Cancellation Acknowledgement</p>
            <label className="block text-teal-700">
              <input type="checkbox" name="cancelAcknowledgement" value="Accept" required className="mr-2" />
              I will cancel my registration latest by <strong>July 15th, 2025</strong> if I decide not to attend the summer school.
            </label>
          </div>

          {/* Transaction ID */}
          <div className="border border-teal-300 rounded-lg p-4 mb-4 bg-teal-50">
            <p className="font-medium mb-2 text-lg text-teal-700">What is your Transaction ID?</p>
            <div className="relative">
              {(fields.transactionId || document.activeElement.name === "transactionId") && (
                <label className="absolute -top-5 left-2 text-sm text-teal-700 transition-all duration-200 bg-teal-50 px-1">
                  Transaction ID
                </label>
              )}
              <label className="block font-medium mb-1">
                Pay your fees <a href="https://form.qfixonline.com/aiss" className="text-blue-600 underline" target="_blank" rel="noreferrer">here</a> and add the transaction ID below
              </label>
              <input
                type="text"
                name="transactionId"
                placeholder="Transaction ID"
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={fields.transactionId}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full max-w-xs mx-auto block bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 text-white py-4 rounded-lg transition text-2xl font-bold"
          >
            Submit
          </button>
        </form>
      </MagicCard>
      <p className="text-sm text-gray-500 mt-4">
        if this form does not work, you can use the google form <a href="https://forms.gle/ALiS1ALVHkosfDAbA" className="text-blue-600 underline" target="_blank" rel="noreferrer">here</a>.
      </p>
    </div>
  );
};

export default Form;