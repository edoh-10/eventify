import React from 'react';
import { ArrowLeft, X, Lock } from 'lucide-react';

// Main App component to display the order summary
export default function Order({closeOrder, procedeOrder}) {
  // Example data - ideally passed as props
  const orderDetails = {
    ticketType: "Standard Ticket",
    attendeeName: "Andrea Gomes",
    attendeeEmail: "andreagomes@example.com",
    ticketPrice: 200.00,
    subTotal: 200.00,
    tax: 11.80,
    orderTotal: 211.80,
  };

  return (
    // Simulate the light grey page background from the image
    <div>
        {/* Container for the order summary card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm overflow-hidden border-t-4 border-cyan-400"> {/* Added top border */}
        <OrderSummary {...orderDetails} closeOrder={closeOrder} procedeOrder={procedeOrder}/>
      </div>
    </div>
  );
}

// Order Summary Component
function OrderSummary({ ticketType, attendeeName, attendeeEmail, ticketPrice, subTotal, tax, orderTotal, closeOrder, procedeOrder }) {

  // Helper function to format currency
  const formatCurrency = (amount) => {
    // Basic formatting, adjust as needed for specific currency symbols/placement
    return `₹${amount.toFixed(2)}`;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header Section - White background, dark text */}
      <div className="flex justify-between items-center p-4">
        <button className="text-gray-600 hover:text-gray-800">
          <ArrowLeft size={24} /> {/* Icône retour */}
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2> {/* Titre: Récapitulatif de la commande */}
        <button onClick={closeOrder} className="text-gray-400 hover:text-gray-600">
          <X size={24} /> {/* Icône de fermeture */}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-5 flex-grow bg-gray-50"> {/* Light grey background for content */}

        {/* Ticket Stub Section - Simplified visual representation */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden border border-gray-200">
           {/* Top part of the stub */}
           <div className="bg-white p-3 border-b-2 border-blue-500">
             <h3 className="text-blue-600 font-semibold text-center text-md">{ticketType}</h3>
           </div>
           {/* Bottom part of the stub */}
           <div className="p-4 flex justify-between items-start">
             <div>
               <p className="text-sm font-medium text-gray-800">{attendeeName}</p>
               <p className="text-xs text-gray-500">{attendeeEmail}</p>
             </div>
             <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded">
               {formatCurrency(ticketPrice)}
             </span>
           </div>
        </div>


        {/* Price Summary Section */}
        <div className="space-y-2 text-sm mb-4">
          {/* Sub Total */}
          <div className="flex justify-between items-center text-gray-700">
            <span>Sub Total:</span> {/* Sous-total */}
            <span>{formatCurrency(subTotal)}</span>
          </div>
          {/* Tax */}
          <div className="flex justify-between items-center text-gray-700">
            <span>Tax:</span> {/* Taxe */}
            <span>{formatCurrency(tax)}</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-4" />

        {/* Order Total */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold text-gray-900">Order Total:</span> {/* Total de la commande */}
          <span className="text-lg font-bold text-gray-900">{formatCurrency(orderTotal)}</span>
        </div>

      </div>

      {/* Footer Section - Pay Button */}
      <div className="bg-white p-4 border-t border-gray-200">
        <button onClick={procedeOrder} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition duration-150 ease-in-out">
          <Lock size={18} className="mr-2" /> {/* Icône cadenas */}
          Pay Now {/* Payer maintenant */}
        </button>
      </div>
    </div>
  );
}
