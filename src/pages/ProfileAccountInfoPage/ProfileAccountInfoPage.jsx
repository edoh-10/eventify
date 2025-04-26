import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

// Composant principal pour les paramètres du compte
function AccountSettings() {
  // --- États pour Change Email ---
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [currentEmail] = useState("andreagomes@example.com");

  // --- États pour Account Info ---
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
    website: "",
    company: "",
  });
  const [contactDetails, setContactDetails] = useState({
    phoneNumber: "",
    address: "",
    cityTown: "",
    country: "",
    pincode: "",
  });
  // Simule l'état de l'upload de photo (pourrait être une URL ou null)
  const [profilePhoto, setProfilePhoto] = useState(null);

  // --- État pour la page active ---
  // Définir 'Account Info' comme page active par défaut
  const [activePage, setActivePage] = useState("Account Info");

  // --- Gestionnaires ---

  // Gestionnaire pour la sauvegarde de l'e-mail
  const handleSaveEmail = (e) => {
    e.preventDefault();
    if (newEmail === confirmEmail && newEmail !== "") {
      console.log("Saving new email:", newEmail);
      alert("Nouvel e-mail enregistré !");
    } else if (newEmail !== confirmEmail) {
      console.error("Emails do not match");
      alert("Les e-mails ne correspondent pas.");
    } else {
      console.error("New email is empty");
      alert("Veuillez entrer un nouvel e-mail.");
    }
  };

  // Gestionnaire pour le clic sur "Set Password"
  const handleSetPasswordClick = () => {
    console.log("Set Password button clicked");
    alert("Logique pour définir le mot de passe à implémenter.");
  };

  // Gestionnaire pour la sauvegarde du profil
  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log("Saving profile info:", profileInfo);
    console.log("Saving contact details:", contactDetails);
    // Ajoutez ici la logique de sauvegarde (appel API, etc.)
    alert("Profil sauvegardé !");
  };

  // Gestionnaire pour les changements dans les champs de Profile Info
  const handleProfileInfoChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Gestionnaire pour les changements dans les champs de Contact Details
  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Gestionnaire pour le clic sur l'upload de photo (à implémenter)
  const handlePhotoUploadClick = () => {
    console.log("Upload photo clicked");
    // Ouvrir un sélecteur de fichiers ou un modal d'upload
    alert("Logique d'upload de photo à implémenter.");
  };

  // --- Composants de Section ---

  // Composant pour la barre latérale (inchangé)
  const Sidebar = () => (
    <div className="w-64 bg-gray-50 p-6 h-full border-r border-gray-200 flex flex-col">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Account Settings
      </h2>
      <nav className="flex-1 space-y-1">
        {["Account Info", "Change Email", "Password"].map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ease-in-out flex items-center space-x-3 ${
              activePage === page
                ? "bg-gray-200 text-gray-900" // Style actif
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800" // Style inactif/survol
            }`}
          >
            {/* Icônes optionnelles */}
            {page === "Account Info" && <FiUser className="h-5 w-5" />}
            {page === "Change Email" && <FiMail className="h-5 w-5" />}
            {page === "Password" && <FiLock className="h-5 w-5" />}
            <span>{page}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  // Composant pour la section Changer Email (inchangé)
  const ChangeEmailContent = () => (
    <div className="flex-1 p-8 lg:p-10">
      <h1 className="text-2xl font-bold mb-8 text-gray-800">Change Email</h1>
      <form onSubmit={handleSaveEmail} className="space-y-6 max-w-lg">
        {/* Affichage de l'e-mail actuel */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="w-full sm:w-32 text-sm font-medium text-gray-700 mb-1 sm:mb-0 shrink-0">
            Current Email:
          </label>
          <span className="text-sm text-gray-900 flex-1 break-words">
            {currentEmail}
          </span>
        </div>
        {/* Champ pour le nouvel e-mail */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="new-email"
            className="w-full sm:w-32 text-sm font-medium text-gray-700 mb-1 sm:mb-0 shrink-0"
          >
            New Email:
          </label>
          <input
            type="email"
            id="new-email"
            name="newEmail" // Ajout de l'attribut name
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter new email"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Champ pour confirmer le nouvel e-mail */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="confirm-email"
            className="w-full sm:w-32 text-sm font-medium text-gray-700 mb-1 sm:mb-0 shrink-0"
          >
            Confirm Email:
          </label>
          <input
            type="email"
            id="confirm-email"
            name="confirmEmail" // Ajout de l'attribut name
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder="Enter again"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Bouton de sauvegarde */}
        <div className="pt-2">
          <button
            type="submit"
            className="sm:ml-32 inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2B293D] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Save New Email
          </button>
        </div>
      </form>
    </div>
  );

  // Composant pour la section Mot de passe (inchangé)
  const PasswordContent = () => (
    <div className="flex-1 p-8 lg:p-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Set Password</h1>
      <p className="text-sm text-gray-600 mb-6">
        A password has not been set for your account.
      </p>
      <button
        onClick={handleSetPasswordClick}
        className="inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2B293D] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        Set Password
      </button>
    </div>
  );

  // --- NOUVEAU / MIS À JOUR ---
  // Composant pour la section Account Info
  const AccountInfoContent = () => (
    <div className="flex-1 p-8 lg:p-10">
      <h1 className="text-2xl font-bold mb-8 text-gray-800">
        Account Information
      </h1>

      {/* Section Photo de Profil */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Profile Photo
        </h2>
        <div className="flex items-center space-x-4">
          {/* Placeholder pour l'image */}
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative group">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              // Placeholder Icon (remplacez par FiUser si importé)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
            {/* Bouton/Icône d'upload superposé */}
            <button
              onClick={handlePhotoUploadClick}
              className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Upload profile photo"
            >
              {/* Icône Camera (remplacez par FiCamera si importé) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Formulaire pour les informations */}
      <form onSubmit={handleSaveProfile} className="space-y-10 max-w-2xl">
        {/* Section Informations du Profil */}
        <div>
          <h2 className="text-lg font-semibold mb-5 text-gray-700">
            Profile Information
          </h2>
          <div className="space-y-4">
            {/* First Name */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="firstName"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={profileInfo.firstName}
                onChange={handleProfileInfoChange}
                placeholder="Enter first name"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Last Name */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="lastName"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={profileInfo.lastName}
                onChange={handleProfileInfoChange}
                placeholder="Enter last name"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Website */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="website"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                Website:
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={profileInfo.website}
                onChange={handleProfileInfoChange}
                placeholder="Enter website"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Company */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="company"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                Company:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={profileInfo.company}
                onChange={handleProfileInfoChange}
                placeholder="Enter company name"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Section Coordonnées */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Contact Details
          </h2>
          <p className="text-xs text-gray-500 mb-5">
            These details are private and only used to contact you for ticketing
            or prizes.
          </p>
          <div className="space-y-4">
            {/* Phone Number */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="phoneNumber"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={contactDetails.phoneNumber}
                onChange={handleContactDetailsChange}
                placeholder="Enter phone number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Address */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="address"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={contactDetails.address}
                onChange={handleContactDetailsChange}
                placeholder="Enter address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* City/Town */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="cityTown"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                City/Town:
              </label>
              <input
                type="text"
                id="cityTown"
                name="cityTown"
                value={contactDetails.cityTown}
                onChange={handleContactDetailsChange}
                placeholder="Enter city"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Country */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="country"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={contactDetails.country}
                onChange={handleContactDetailsChange}
                placeholder="Enter country"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {/* Pincode */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="pincode"
                className="w-full sm:w-32 text-sm font-medium text-gray-600 mb-1 sm:mb-0 shrink-0"
              >
                Pincode:
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={contactDetails.pincode}
                onChange={handleContactDetailsChange}
                placeholder="Enter pincode"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Bouton de sauvegarde du profil */}
        <div className="pt-4">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2B293D] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Save My Profile
          </button>
        </div>
      </form>
    </div>
  );
  // --- FIN NOUVEAU / MIS À JOUR ---

  const [menu, setMenu] = useState(true);
  const handleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  // --- Rendu Principal ---
  return (
    <div>
      <Header />
      <div className="flex min-h-screen bg-white font-sans">
        {/* Barre latérale */}

        <div className="hidden md:block">
          <Sidebar />
        </div>

        {!menu && (
          <div className="md:hidden">
            <Sidebar />
          </div>
        )}

        {menu ? (
          <div className="mt-2 ml-2">
            <button onClick={handleMenu} className="md:hidden">
              <LuMenu size={30} />
            </button>
          </div>
        ) : (
          <div className="mt-2 ml-2">
            <button onClick={handleMenu} className="md:hidden">
              <IoMdClose size={30} />
            </button>
          </div>
        )}

        {/* Contenu principal */}
        <div className="flex-1 overflow-y-auto">
          {activePage === "Account Info" && <AccountInfoContent />}
          {activePage === "Change Email" && <ChangeEmailContent />}
          {activePage === "Password" && <PasswordContent />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Exportez le composant
export default AccountSettings;
