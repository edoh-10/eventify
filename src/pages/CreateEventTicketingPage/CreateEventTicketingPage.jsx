import React, { useState } from 'react';
// Assurez-vous d'installer react-icons : npm install react-icons
import { IoArrowBack, IoAddCircleOutline } from 'react-icons/io5';
import { FaTicketAlt, FaRegCircle } from 'react-icons/fa'; // Utilisation d'icônes alternatives si 'FREE' n'est pas directement disponible
import Header from '../../sections/Header/Header';
import Footer from '../../sections/Footer/Footer';
import { useNavigate } from 'react-router-dom';



// Composant principal de l'application
export default function CreateEventTicketingPage() {
 

  return (
    <div>
      <Header/>
      <EventTicketing />
      <Footer/>
    </div>
  );
}

// Composant pour le formulaire de billetterie
function EventTicketing() {
  const navigate = useNavigate();
  // État pour suivre le type d'événement sélectionné
  const [eventType, setEventType] = useState('ticketed'); // 'ticketed' ou 'free'
  // État pour gérer les tickets (simplifié pour l'exemple)
  const [tickets, setTickets] = useState([{ name: '', price: '0.00' }]);

  // Fonction pour ajouter un nouveau champ de ticket (simplifié)
  const addTicketField = () => {
    setTickets([...tickets, { name: '', price: '0.00' }]);
  };

  // Étapes de la barre de progression
  const steps = ['Edit', 'Banner', 'Ticketing', 'Review'];
  const currentStep = 'Ticketing'; // Étape actuelle basée sur l'image

  return (
    <div className=" flex items-center justify-center font-sans w-[83%] mx-auto">
      <div className="bg-white p-8 w-full">
        {/* En-tête */}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-800 mr-4">
            <IoArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Event Title</h1>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm text-gray-500">Time</p>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="mb-10 mt-6 px-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      step === currentStep || steps.indexOf(step) < steps.indexOf(currentStep)
                        ? 'bg-indigo-600 border-indigo-600'
                        : 'bg-white border-gray-300'
                    } ${step === currentStep ? 'ring-2 ring-offset-2 ring-indigo-300' : ''}`}
                  >
                    {/* Affiche une coche pour les étapes complétées */}
                    {steps.indexOf(step) < steps.indexOf(currentStep) && (
                       <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    )}
                  </div>
                  <span className={`mt-2 text-xs ${step === currentStep ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
                    {step}
                  </span>
                </div>
                {/* Ligne de connexion entre les étapes */}
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 ${steps.indexOf(step) < steps.indexOf(currentStep) ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div> 


        {/* Section Type d'événement */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">What type of event are you running?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Option Événement avec Billets */}
            <button
              onClick={() => setEventType('ticketed')}
              className={`border rounded-lg p-6 text-center transition-all duration-200 ${
                eventType === 'ticketed'
                  ? 'border-indigo-600 ring-2 ring-indigo-200 shadow-lg'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <FaTicketAlt size={32} className="mx-auto mb-3 text-indigo-600" />
              <span className="font-semibold text-gray-800 block">Ticketed Event</span>
              <span className="text-sm text-gray-500">My event requires tickets for entry</span>
            </button>
            {/* Option Événement Gratuit */}
            <button
              onClick={() => setEventType('free')}
              className={`border rounded-lg p-6 text-center transition-all duration-200 ${
                eventType === 'free'
                  ? 'border-indigo-600 ring-2 ring-indigo-200 shadow-lg'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
               {/* Icône simple pour 'FREE' */}
              <div className="w-8 h-8 mx-auto mb-3 border-2 border-gray-500 rounded-full flex items-center justify-center">
                 <span className="text-xs font-bold text-gray-600">FREE</span>
              </div>
              <span className="font-semibold text-gray-800 block">Free Event</span>
              <span className="text-sm text-gray-500">I'm running a free event</span>
            </button>
          </div>
        </div>

        {/* Section Vente de Billets (affichée seulement si 'ticketed') */}
        {eventType === 'ticketed' && (
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">What tickets are you selling?</h2>
            {tickets.map((ticket, index) => (
              <div key={index} className="flex items-end gap-4 mb-4">
                {/* Champ Nom du Ticket */}
                <div className="flex-grow">
                  <label htmlFor={`ticketName-${index}`} className="block text-sm font-medium text-gray-600 mb-1">
                    Ticket Name
                  </label>
                  <input
                    type="text"
                    id={`ticketName-${index}`}
                    placeholder="Ticket Name e.g. General Admission"
                    value={ticket.name}
                    onChange={(e) => { /* Gérer le changement */ }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {/* Champ Prix du Ticket */}
                <div className="w-40">
                  <label htmlFor={`ticketPrice-${index}`} className="block text-sm font-medium text-gray-600 mb-1">
                    Ticket Price
                  </label>
                   <div className="relative">
                     <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 sm:text-sm">
                       ₹
                     </span>
                    <input
                      type="text" // Utiliser text pour permettre '0.00'
                      id={`ticketPrice-${index}`}
                      value={ticket.price}
                      onChange={(e) => { /* Gérer le changement et la validation */ }}
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                   </div>
                </div>
                 {/* Bouton Ajouter (seulement pour le dernier ticket) */}
                 {index === tickets.length - 1 && (
                    <button
                        onClick={addTicketField}
                        className="p-2 text-indigo-600 hover:text-indigo-800"
                        aria-label="Ajouter un type de ticket"
                    >
                        <IoAddCircleOutline size={28} />
                    </button>
                 )}
                 {/* Espace réservé pour aligner si pas le dernier ticket */}
                 {index < tickets.length - 1 && (
                    <div className="w-[44px]"></div> // Largeur approx du bouton + padding
                 )}
              </div>
            ))}

          </div>
        )}

        {/* Pied de page avec boutons */}
        <div className="flex justify-between items-center mt-10 border-t pt-6">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
            Go back
          </button>
          <button onClick={() => navigate("/create-event-preview")} className="px-6 py-2 bg-[#2B293D] text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
