


import React, { useState } from 'react';
import Header from '../../sections/Header/Header'; // Ajustez le chemin si nécessaire
import Footer from '../../sections/Footer/Footer'; // Ajustez le chemin si nécessaire
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Importation des icônes

// Composant principal de la page de contact
function Contact() {
  // États pour les champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  // État pour le message de succès/erreur après soumission
  const [formStatus, setFormStatus] = useState('');

  // Gestionnaire pour les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // --- Logique de soumission (Exemple) ---
    // Ici, vous intégreriez normalement un appel API pour envoyer l'email ou enregistrer le message.
    // Pour la démo, nous allons juste simuler un succès.
    console.log('Form Data Submitted:', formData);
    setFormStatus('Votre message a été envoyé avec succès !'); // Message de succès
    setFormData({ name: '', email: '', subject: '', message: '' }); // Réinitialiser le formulaire

    // Optionnel : masquer le message après quelques secondes
    setTimeout(() => setFormStatus(''), 5000);
    // --- Fin de la logique de soumission ---
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* En-tête de l'application */}
      <Header />

      {/* Contenu principal de la page */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Titre de la page */}
          <h1 className="text-3xl md:text-4xl font-bold font-[Montserrat] text-center mb-4 text-[#2B293D]">
            Contactez-Nous
          </h1>
          <p className="text-center text-gray-600 font-[Open Sans] mb-10 md:mb-16">
            Une question, une suggestion ou besoin d'aide ? Remplissez le formulaire ci-dessous.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Section Formulaire */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Champ Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-[Open Sans]">
                    Nom Complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFE047] focus:border-transparent transition duration-150 ease-in-out"
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-[Open Sans]">
                    Adresse E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Votre adresse e-mail"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFE047] focus:border-transparent transition duration-150 ease-in-out"
                  />
                </div>

                {/* Champ Sujet */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 font-[Open Sans]">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFE047] focus:border-transparent transition duration-150 ease-in-out"
                  />
                </div>

                {/* Champ Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-[Open Sans]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Écrivez votre message ici..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFE047] focus:border-transparent transition duration-150 ease-in-out"
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#2B293D] hover:bg-[#4539B4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFE047] transition duration-150 ease-in-out"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le Message
                  </button>
                </div>

                {/* Affichage du statut du formulaire */}
                {formStatus && (
                  <p className="mt-4 text-center text-green-600 font-medium">{formStatus}</p>
                )}
              </form>
            </div>

            {/* Section Informations de Contact */}
            <div className="space-y-6 font-[Open Sans]">
              <h2 className="text-2xl font-semibold font-[Montserrat] text-[#2B293D] mb-6">
                Nos Coordonnées
              </h2>
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-[#FFE047] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <a href="mailto:contact@eventify.com" className="text-gray-600 hover:text-[#2B293D] hover:underline break-all">
                    contact@eventify.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Réponse sous 24h ouvrées</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-[#FFE047] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
                  <a href="tel:+229XXXXXXXX" className="text-gray-600 hover:text-[#2B293D] hover:underline">
                    +229 XX XX XX XX {/* Remplacez par un vrai numéro */}
                  </a>
                   <p className="text-sm text-gray-500 mt-1">Lun - Ven, 9h - 17h</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-[#FFE047] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Adresse</h3>
                  <p className="text-gray-600">
                    123 Rue Imaginaire, <br />
                    Quartier Fictif, Cotonou, <br />
                    Bénin {/* Remplacez par une vraie adresse */}
                  </p>
                   {/* Optionnel: Lien Google Maps */}
                   <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-[#4539B4] hover:underline mt-2 inline-block">
                     Voir sur la carte
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pied de page de l'application */}
      <Footer />
    </div>
  );
}

export default Contact;
