



import React, { useState } from 'react';
import { ArrowLeft, X, CalendarDays } from 'lucide-react';

// Sample country code data (add more as needed)
const countryCodes = [
  { code: '+229', name: 'BJ', country: 'Benin' },
  { code: '+91', name: 'IN', country: 'India' },
  { code: '+1', name: 'US', country: 'USA' },
  { code: '+44', name: 'GB', country: 'UK' },
  { code: '+33', name: 'FR', country: 'France' },
  { code: '+234', name: 'NG', country: 'Nigeria' },
  // Add more countries here
]; 

// Main App component to display the form
export default function AttendeeDetail({handleDetail, handleOrder}) {
  // Example data - ideally passed as props
  const eventDetails = {
    name: "Sound Of Christmas 2023",
    date: "Saturday, 2 December 2023",
    ticketType: "Standard Ticket",
    ticketNumber: 1,
    quantity: 1,
    totalPrice: 200.00,
  };

  return (
    // Simulate the light blue page background from the image
    <div>
        {/* White container for the form, replicating image structure */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden border border-gray-200"> {/* Added border */}
        <AttendeeForm {...eventDetails} handleDetail={handleDetail} handleOrder={handleOrder}/>
      </div>
    </div>
  );
}

// Attendee Form Component - Updated with Country Code Selector
function AttendeeForm({ name: eventName, date, ticketType, ticketNumber, quantity, totalPrice, handleDetail, handleOrder }) {
  // State for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  // State for selected country code prefix
  const [selectedPrefix, setSelectedPrefix] = useState(countryCodes[0].code); // Default to Benin
  // State for the phone number part (without prefix)
  const [phone, setPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    // Use flex-col and ensure height allows footer to stick at bottom if content grows
    <div className="flex flex-col h-full">
      {/* Header Section - White background, dark text, bottom border */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <button  className="text-gray-600 hover:text-gray-800">
          <ArrowLeft size={24} /> {/* Icône retour */}
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Attendee Details</h2> {/* Titre: Détails du participant */}
        <button onClick={handleDetail} className="text-gray-400 hover:text-gray-600">
          <X size={24} /> {/* Icône de fermeture */}
        </button>
      </div>

      {/* Main Content Area - White background */}
      <div className="p-5 flex-grow overflow-y-auto bg-white">
        {/* Event and Ticket Info */}
        <div className="mb-4"> {/* Reduced bottom margin */}
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{eventName}</h3>
          {/* Added border below date */}
          <div className="flex items-center text-sm text-gray-500 mb-3 pb-3 border-b border-gray-200">
            <CalendarDays size={16} className="mr-2 flex-shrink-0" />
            <span>{date}</span>
          </div>
          {/* Removed background from ticket info */}
          <p className="text-sm font-medium text-gray-700 pt-3"> {/* Added top padding */}
            {ticketType}: Ticket # {ticketNumber}
          </p>
        </div>

        {/* Form Fields Section - No surrounding border, direct fields */}
        <div className="space-y-4 mb-6"> {/* Removed border/padding div */}
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name {/* Nom complet */}
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Attendee's full name" // Entrez le nom complet du participant
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            />
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your e-mail" // Entrez votre e-mail
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            />
          </div>

          {/* Phone - Updated with Select Dropdown */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone {/* Téléphone */}
            </label>
            {/* Container with border to mimic input field */}
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-cyan-500 focus-within:border-cyan-500">
               {/* Country Code Selector */}
               <select
                 id="countryCode"
                 value={selectedPrefix}
                 onChange={(e) => setSelectedPrefix(e.target.value)}
                 // Style the select to blend in: remove default appearance, add padding, border-right
                 className="appearance-none bg-gray-50 pl-3 pr-2 py-2 text-gray-600 text-sm border-r border-gray-300 focus:outline-none flex-shrink-0"
                 aria-label="Country code" // Indicatif pays
               >
                 {countryCodes.map((country) => (
                   <option key={country.code} value={country.code}>
                     {country.name} ({country.code})
                   </option>
                 ))}
               </select>
               {/* Phone Number Input */}
              <input
                type="tel"
                id="phone"
                value={phone} // Bind to the phone number state (without prefix)
                onChange={(e) => setPhone(e.target.value)} // Update only the number part
                placeholder="Attendee's Phone Number" // Numéro de téléphone du participant
                // Removed internal border, rely on parent's border and select's border-r
                className="w-full px-3 py-2 border-none focus:outline-none sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start mb-6">
           <div className="flex items-center h-5">
             <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300 rounded"
              />
           </div>
           <div className="ml-3 text-sm">
             <label htmlFor="terms" className="text-gray-600">
               I accept the <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500 underline">Terms of Service</a> and have read the <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500 underline">Privacy Policy</a>.
               {/* J'accepte les Conditions d'utilisation et j'ai lu la Politique de confidentialité. */}
             </label>
           </div>
        </div>
      </div>

      {/* Footer Section - White background, top border */}
      <div className="bg-white p-4 border-t border-gray-200 flex justify-between items-center">
        <div>
          <span className="text-gray-700">Qty: {quantity}</span> {/* Quantité */}
          <span className="ml-4 font-semibold text-gray-900">Total: ₹{totalPrice.toFixed(2)}</span> {/* Total */}
        </div>
        <button onClick={handleOrder} className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-5 rounded-md flex items-center transition duration-150 ease-in-out">
          Continue to Checkout {/* Continuer vers le paiement */}
          <span className="ml-1 font-semibold">&gt;</span>
        </button>
      </div>
    </div>
  );
}
