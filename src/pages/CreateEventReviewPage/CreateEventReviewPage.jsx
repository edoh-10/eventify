import React from "react";
// Importation des icônes nécessaires depuis react-icons
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTicketAlt,
  FaUser,
  FaCheckCircle,
  FaRegCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline, IoMdRadioButtonOff } from "react-icons/io"; // Icônes alternatives si besoin
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer"; 

// Composant principal de l'aperçu de l'événement
const CreateEventReviewPage = () => {
  // État de la progression (exemple : 4 étapes, la 4ème est active)
  const progressSteps = [
    { name: "Edit", completed: true },
    { name: "Banner", completed: true },
    { name: "Ticketing", completed: true },
    { name: "Review", completed: false }, // La dernière étape n'est pas encore complétée
  ];
  const currentStepIndex = progressSteps.findIndex((step) => !step.completed); // Trouve la première étape non complétée

  return (
    <div>
      <Header />
      <div className="w-[83%] mx-auto my-10">
        <div className="p-4 font-sans">
          {/* En-tête avec bouton retour et titre */}
          <div className="mb-6 flex items-center">
            <button className=" mr-4">
              <FaArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Event Title
              </h1>
              <p className="text-sm text-gray-500">Location • Time</p>
            </div>
          </div>

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
            <p className="text-sm text-yellow-600 font-medium mt-4">
              Nearly there! Check everything's correct.
            </p>
          </div>

          {/* Contenu principal de l'aperçu */}
          <div className="bg-white border border-black rounded-lg shadow-md p-6 max-w-4xl mx-auto">
            {/* Placeholder pour l'image/bannière */}
            <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center mb-6">
              {/* Vous pouvez remplacer ceci par une balise <img> */}
              <svg
                className="w-16 h-16 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            {/* Titre de l'événement */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Event Title
            </h2>

            {/* Section Date/Heure et Billets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Date et Heure */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Date and Time
                </h3>
                <div className="flex items-center text-gray-600 mb-1">
                  <FaCalendarAlt className="mr-2 text-gray-500" />
                  <span>Day, Date</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="ml-6">Time</span>{" "}
                  {/* Alignement avec l'icône */}
                </div>
                <button className="text-sm text-blue-600 hover:underline">
                  Add to Calendar
                </button>
              </div>

              {/* Informations sur les billets */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Ticket Information
                </h3>
                <div className="flex items-center text-gray-600">
                  <FaTicketAlt className="mr-2 text-gray-500" />
                  <span>Ticket Type : Price / ticket</span>
                </div>
              </div>
            </div>

            {/* Section Lieu */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-500" />
                <span>Address</span>
              </div>
              {/* Placeholder pour la carte */}
              <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center relative">
                <FaMapMarkerAlt className="text-red-500 text-4xl" />
                {/* Contrôles de la carte (simulés) */}
                <div className="absolute top-2 right-2 bg-white rounded shadow p-1 space-y-1">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-600">
                    +
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center text-gray-600">
                    -
                  </button>
                </div>
                <div className="absolute top-2 left-2 bg-white rounded shadow p-1">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-600">
                    {/* Icône "fullscreen" ou similaire */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Section Organisateur */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Hosted by
              </h3>
              <div className="flex items-center">
                {/* Placeholder pour l'avatar de l'organisateur */}
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <FaUser className="text-gray-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Host Name</p>
                  <div className="flex space-x-2 mt-1">
                    <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200">
                      Contact
                    </button>
                    <button className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 border border-gray-300">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Event Description
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Vestibulum a pharetra facilisis varius proin ultrices tellus. Ac
                viverra pharetra sit elementum magna nullam ornare in ac.
                Egestas velit sed. Elementum adipiscing sed metus morbi velit
                massa donec.
              </p>
            </div>
          </div>

          {/* Pied de page avec les boutons d'action */}
          <div className="mt-8 flex justify-end space-x-4 max-w-4xl mx-auto">
            <button className="px-6 py-2 rounded-md text-sm font-medium bg-yellow-400 text-yellow-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
              Save for Later
            </button>
            <button className="px-6 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Publish Event
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEventReviewPage;
