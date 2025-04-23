


import React, { useState } from 'react';
import { X, MinusCircle, PlusCircle } from 'lucide-react';

// Main App component
export default function SelectTicket({handleTicket, handleDetails}) {
  return (
    <div>
      <TicketSelector handleTicket={handleTicket} handleDetails={handleDetails}/>
    </div>
  );
}

// Ticket Selector Component
function TicketSelector({handleTicket, handleDetails}) {
  // State to manage the quantity of tickets
  const [quantity, setQuantity] = useState(1);
  // Price per ticket (example)
  const ticketPrice = 200.00;

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to decrease quantity, ensuring it doesn't go below 1
  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Calculate total price
  const totalPrice = (quantity * ticketPrice).toFixed(2);

  return (
    // Main container for the modal/card
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Select Tickets</h2> {/* Titre: Sélectionner les Billets */}
        <button onClick={handleTicket} className="text-gray-500 hover:text-gray-700">
          <X size={24} /> {/* Icône de fermeture */}
        </button>
      </div>

      {/* Ticket Types Section */}
      <div className="p-4">
        {/* Header for Ticket Types */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
          <span>Ticket Types</span> {/* Types de Billets */}
          <span>Quantity</span> {/* Quantité */}
        </div>

        {/* Ticket Item */}
        <div className="flex items-center border border-gray-200 rounded-md p-3 relative">
          {/* Green indicator bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-500 rounded-l-md"></div>
          {/* Ticket Details */}
          <div className="flex-grow ml-3">
            <h3 className="font-medium text-gray-900">Standard Ticket</h3> {/* Billet Standard */}
            <p className="text-gray-700">₹ {ticketPrice.toFixed(2)}</p> {/* Prix */}
          </div>
          {/* Quantity Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={decreaseQuantity}
              disabled={quantity <= 1} // Disable if quantity is 1
              className="text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Diminuer la quantité" // Decrease quantity
            >
              <MinusCircle size={24} />
            </button>
            <span className="font-medium text-lg text-gray-900 w-6 text-center">{quantity}</span> {/* Current quantity */}
            <button
              onClick={increaseQuantity}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Augmenter la quantité" // Increase quantity
            >
              <PlusCircle size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
        {/* Quantity and Total */}
        <div>
          <span className="text-gray-700">Qty: {quantity}</span> {/* Quantité */}
          <span className="ml-4 font-semibold text-gray-900">Total: ₹{totalPrice}</span> {/* Total */}
        </div>
        {/* Proceed Button */}
        <button onClick={handleDetails} className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition duration-150 ease-in-out">
          Proceed {/* Continuer */}
          <span className="ml-1">&gt;</span>
        </button>
      </div>
    </div> 
  );
}
