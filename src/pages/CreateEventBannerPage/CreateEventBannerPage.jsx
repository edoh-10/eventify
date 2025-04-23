import React, { useState } from 'react';
// Example using react-icons/fi, you might need to install it: npm install react-icons
import { FiArrowLeft } from 'react-icons/fi';
import Footer from '../../sections/Footer/Footer';
import Header from '../../sections/Header/Header';
import { useNavigate } from 'react-router-dom';

// Main component for the Event Banner Upload page
function CreateEventBannerPage() {
  const navigate = useNavigate();
  // State to manage the selected file name (optional, for display)
  const [fileName, setFileName] = useState('No file chosen');

  // Handler for file input change
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('No file chosen');
    }
  };

  // Progress steps data
  const steps = ['Edit', 'Banner', 'Ticketing', 'Review'];
  const currentStep = 'Banner'; // Set the current active step

  return (
    <div>
      <Header/>
      <div className="my-20 mx-auto w-[83%] flex flex-col items-center font-sans">
      <div className="w-full  bg-white">
        {/* Header Section */}
        <div className="mb-8 flex items-center">
           {/* Back Arrow Icon */}
          <button className="text-gray-600 hover:text-gray-800 mr-4">
            <FiArrowLeft size={24} />
          </button>
          {/* Event Details */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Event Title</h1>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm text-gray-500">Time</p>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="mb-12 px-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isActive = step === currentStep;
              const isCompleted = steps.indexOf(step) < steps.indexOf(currentStep);

              return (
                <React.Fragment key={step}>
                  {/* Step Circle and Label */}
                  <div className="flex flex-col items-center text-center z-10">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                        isActive || isCompleted ? 'border-indigo-600' : 'border-gray-300'
                      } ${isActive ? 'bg-indigo-600' : isCompleted ? 'bg-indigo-600' : 'bg-white'}`}
                    >
                      {/* Optional: Add checkmark for completed steps */}
                      {isCompleted && <span className="text-white text-xs">✓</span>}
                    </div>
                    <p className={`mt-2 text-xs font-medium ${isActive || isCompleted ? 'text-indigo-600' : 'text-gray-500'}`}>
                      {step}
                    </p>
                  </div>
                  {/* Connecting Line (except for the last step) */}
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 -mx-1 mb-6 ${isCompleted ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>


        {/* Upload Image Section */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Upload Image</h2>
          {/* File Input Area */}
          <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between mb-2">
             {/* Custom styled file input button */}
            <label htmlFor="file-upload" className="cursor-pointer bg-gray-100 text-gray-700 text-sm font-medium py-1.5 px-4 rounded border border-gray-300 hover:bg-gray-200">
              Choose File
            </label>
             {/* Hidden actual file input */}
            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
             {/* Display selected file name */}
            <span className="text-sm text-gray-500 ml-4">{fileName}</span>
          </div>
           {/* Image Requirements Text */}
          <p className="text-xs text-gray-500">
            Feature Image must be at least 1170 pixels wide by 504 pixels high.
          </p>
          <p className="text-xs text-gray-500">
            Valid file formats: JPG, GIF, PNG.
          </p>
        </div>

        {/* Footer Buttons Section */}
        <div className="flex justify-end items-center pt-6 border-t border-gray-200">
           {/* Go Back Button */}
          <button className="text-sm text-indigo-600 hover:underline mr-6">
            Go back to Edit Event
          </button>
           {/* Save & Continue Button */}
          <button onClick={() => navigate("/create-event-ticket")} className="bg-[#2B293D] text-white text-sm font-medium py-2 px-6 rounded-md hover:bg-[#4539B4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

// Export the main component
export default CreateEventBannerPage;
