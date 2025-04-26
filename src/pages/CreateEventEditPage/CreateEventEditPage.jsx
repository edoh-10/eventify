import React, { useState } from 'react';
// Import icons from react-icons
import { FaArrowLeft, FaCalendarAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import { BsCircleFill, BsCheckCircleFill } from 'react-icons/bs'; // Using different icons for progress steps
import Header from '../../sections/Header/Header';
import Footer from '../../sections/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaTicketAlt,
  FaUser,
  FaCheckCircle,
  FaRegCircle,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline, IoMdRadioButtonOff } from "react-icons/io"; // Icônes alternatives si besoin

// Main App component
function CreateEventEditPage() {
    const navigate = useNavigate();
    // State for form inputs
    const [formData, setFormData] = useState({
        eventTitle: '',
        eventCategory: '',
        eventType: 'single', // Default to single event
        startDate: '',
        startTime: '00:00',
        endTime: '00:00',
        eventLocation: '',
        eventDescription: '',
    });

    // State for the current active step in the progress bar
    const [activeStep] = useState(0); // 'Edit' is the first step (index 0)

    // Progress steps configuration
    const steps = [
        { name: 'Edit' },
        { name: 'Banner' },
        { name: 'Ticketing' },
        { name: 'Review' },
    ];

    // Handler for input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'radio' ? value : value // Handle radio buttons specifically
        }));
    };

    // Handler for form submission (basic example)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add logic here to proceed to the next step or submit data
        alert('Form submitted! Check the console for data.'); // Replace alert in production
    };


    const progressSteps = [
        { name: "Edit", completed: true },
        { name: "Banner", completed: false },
        { name: "Ticketing", completed: false },
        { name: "Review", completed: false }, // La dernière étape n'est pas encore complétée
      ];
      const currentStepIndex = progressSteps.findIndex((step) => !step.completed); // Trouve la première étape non complétée


    return (
        <div>
          <Header/>
          <div className="p-4 md:p-8 font-inter"> {/* Added font-inter */}
            <div className="max-w-[83%] mx-auto bg-white p-6 md:p-8">
                {/* Back Button */}
                <button className="text-gray-600 mb-6 hover:text-gray-800 flex items-center absolute left-32 top-16">
                    <FaArrowLeft className="mt-2 tex-[28px]" />
                </button>

                <h1 className="text-2xl font-semibold mb-4">Create a New Event</h1>

{/* Barre de progression */}
          <div className="mb-8 px-4">
            <div className="flex items-center justify-between">
              {progressSteps.map((step, index) => (
                <React.Fragment key={step.name}>
                  <div className="flex flex-col items-center text-center">
                    {/* Icône de l'étape */}
                    <div
                      className={`rounded-full w-6 h-6 flex items-center justify-center mb-1 ${
                        step.completed
                          ? "bg-blue-600 text-white"
                          : index === currentStepIndex
                          ? "border-2 border-blue-600 text-blue-600"
                          : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {step.completed ? (
                        <FaCheckCircle size={14} />
                      ) : (
                        <IoMdRadioButtonOff size={14} />
                      )}
                    </div>
                    {/* Nom de l'étape */}
                    <span
                      className={`text-xs font-medium ${
                        step.completed || index === currentStepIndex
                          ? "text-gray-700"
                          : "text-gray-400"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  {/* Ligne de connexion entre les étapes */}
                  {index < progressSteps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 -mt-4 ${
                        progressSteps[index + 1].completed ||
                        index + 1 === currentStepIndex
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>


                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Event Details Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Event Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            {/* Event Title */}
                            <div>
                                <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 mb-1">Event Title <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    id="event-title"
                                    name="eventTitle"
                                    value={formData.eventTitle}
                                    onChange={handleChange}
                                    placeholder="Enter the name of your event"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            {/* Event Category */}
                            <div>
                                <label htmlFor="event-category" className="block text-sm font-medium text-gray-700 mb-1">Event Category <span className="text-red-500">*</span></label>
                                <select
                                    id="event-category"
                                    name="eventCategory"
                                    value={formData.eventCategory}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                                >
                                    <option value="" disabled>Please select one</option>
                                    <option value="conference">Conference</option>
                                    <option value="workshop">Workshop</option>
                                    <option value="concert">Concert</option>
                                    <option value="festival">Festival</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Date & Time Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Date & Time</h2>
                        {/* Event Type */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Event Type <span className="text-red-500">*</span></label>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="single-event"
                                        name="eventType"
                                        value="single"
                                        checked={formData.eventType === 'single'}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="single-event" className="ml-2 block text-sm text-gray-900">Single Event</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="recurring-event"
                                        name="eventType"
                                        value="recurring"
                                        checked={formData.eventType === 'recurring'}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="recurring-event" className="ml-2 block text-sm text-gray-900">Recurring Event</label>
                                </div>
                            </div>
                        </div>
                        {/* Date/Time Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                            {/* Start Date */}
                            <div>
                                <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">Session(s) Start Date <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <FaCalendarAlt />
                                    </span>
                                    <input
                                        type="date"
                                        id="start-date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            {/* Start Time */}
                            <div>
                                <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-1">Start Time <span className="text-red-500">*</span></label>
                                <div className="relative">
                                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <FaClock />
                                    </span>
                                    <input
                                        type="time"
                                        id="start-time"
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            {/* End Time */}
                            <div className="relative">
                                <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
                                <div className="relative">
                                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <FaClock />
                                    </span>
                                    <input
                                        type="time"
                                        id="end-time"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                {/* Info Icon */}
                                <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 mt-3 text-gray-400 cursor-pointer" title="End time information">
                                    <FaInfoCircle />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Location</h2>
                        <div>
                            <label htmlFor="event-location" className="block text-sm font-medium text-gray-700 mb-1">Where will your event take place? <span className="text-red-500">*</span></label>
                            <select
                                id="event-location"
                                name="eventLocation"
                                value={formData.eventLocation}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                            >
                                <option value="" disabled>Please select one</option>
                                <option value="venue">Venue (Physical Address)</option>
                                <option value="online">Online</option>
                                <option value="tbd">To Be Announced</option>
                            </select>
                            {/* Conditional Address Field can be added here based on selection */}
                        </div>
                    </div>

                    {/* Additional Information Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Additional Information</h2>
                        <div>
                            <label htmlFor="event-description" className="block text-sm font-medium text-gray-700 mb-1">Event Description <span className="text-red-500">*</span></label>
                            <textarea
                                id="event-description"
                                name="eventDescription"
                                rows="4"
                                value={formData.eventDescription}
                                onChange={handleChange}
                                required
                                placeholder="Describe what's special about your event & other important details here..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-end mt-8">
                        <button
                            onClick={() => navigate("/create-event-banner") }
                            type="submit"
                            className="bg-[#2B293D] text-white px-6 py-2 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save & Continue
                        </button>
                    </div>
                </form> 
            </div>
        </div>
        <Footer/>
        </div>
    );
}

// Export the App component as default
export default CreateEventEditPage;
