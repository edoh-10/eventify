import React, { useState } from 'react';
import Header from '../../sections/Header/Header'; // Ajustez le chemin si nécessaire
import Footer from '../../sections/Footer/Footer'; // Ajustez le chemin si nécessaire
import { EventCard } from '../../components/eventsCard/EventsCard'; // Importation de votre composant carte
import ContentData from '../../utils/popularEventsContentData'; // Exemple avec les données des événements populaires
// Vous pourriez vouloir combiner plusieurs sources de données ou utiliser une API ici
// import OnlineData from '../../utils/bestOnlineEventsData';
// import TrendingEventsData from '../../utils/trendingEventsData';

// Composant principal pour la page affichant tous les événements
function AllEventsPage() {
  // Combine or fetch all event data here
  // Pour l'exemple, nous utilisons seulement ContentData
  const allEvents = [...ContentData]; // Ajoutez OnlineData, TrendingEventsData, etc. si nécessaire

  // Styles pour le composant EventCard (repris de PopularEvents.jsx pour la cohérence)
  const styleEventsCard = [
    "flex flex-wrap gap-6 mx-auto justify-center", // Ajusté pour la grille, gap-6 pour l'espacement
    "w-full max-w-sm h-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300", // Style de la carte individuelle (ajusté)
    "flex flex-col relative", // Conteneur image + catégorie
    "absolute bg-white p-1 rounded-full flex justify-center items-center top-3 right-3 text-yellow-500 cursor-pointer hover:text-yellow-400", // Style bouton étoile/favori
    "w-full h-48 object-cover", // Style de l'image (ajusté)
    "absolute bg-[#FFE047] p-1 bottom-0 left-0 rounded-tr-md text-sm font-semibold text-gray-800", // Style de la catégorie
    "flex p-4", // Conteneur pour les détails texte
    "flex flex-col w-16 text-center font-[Montserrat] text-sm font-bold mr-4", // Conteneur Date (ajusté)
    "text-[#4539B4]", // Style Mois
    "flex flex-col font-[Open Sans] flex-grow", // Conteneur principal des détails texte
    "text-lg font-semibold text-gray-800 mb-1 line-clamp-2", // Style Titre (ajusté)
    "text-sm text-gray-600 mb-1 line-clamp-1", // Style Adresse (ajusté)
    "text-sm text-gray-500 mb-2", // Style Heure
    "flex items-center text-sm text-gray-700 mt-auto pt-2 border-t border-gray-100", // Conteneur Prix & Intéressés (ajusté)
    "flex items-center mr-4", // Section Prix
    "mr-1 text-gray-500", // Style icône Prix (ajusté)
    "flex items-center", // Section Intéressés
    "mr-1 text-gray-500", // Style icône Intéressés (ajusté)
  ];

  // État pour la gestion des favoris (simulation)
  const [favorites, setFavorites] = useState({});

  // Fonction pour gérer le clic sur l'étoile (simulation)
  const handleFavoriteClick = (eventId) => {
    setFavorites(prev => ({
      ...prev,
      [eventId]: !prev[eventId] // Bascule l'état favori
    }));
    // Ici, vous pourriez appeler une API pour sauvegarder le favori de l'utilisateur
    console.log(`Event ${eventId} favorite status toggled`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100"> {/* Fond légèrement différent */}
      {/* En-tête de l'application */}
      <Header />

      {/* Contenu principal de la page */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        {/* Titre de la page */}
        <h1 className="text-3xl md:text-4xl font-bold font-[Montserrat] text-center mb-10 text-[#2B293D]">
          Tous les Événements
        </h1>

        {/* Section Filtres/Tri (Optionnelle - à développer) */}
        {/* <div className="mb-8 flex justify-center md:justify-end">
          <select className="p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFE047]">
            <option>Trier par Pertinence</option>
            <option>Trier par Date</option>
            <option>Trier par Prix</option>
          </select>
        </div> */}

        {/* Grille des événements */}
        {allEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {/* Itération sur les données des événements */}
            {allEvents.map((event) => (
              <EventCard
                key={event.id}
                Content={[event]} // EventCard attend un tableau, même pour un seul élément
                styleDiv={styleEventsCard} // Utilisation des styles définis
                handleDisplay={() => handleFavoriteClick(event.id)} // Utilisation de handleDisplay pour l'action favori
                // Ajoutez d'autres props nécessaires à EventCard si besoin
              />
            ))}
          </div>
        ) : (
          // Message si aucun événement n'est trouvé
          <p className="text-center text-gray-500 font-[Open Sans] mt-10">
            Aucun événement à afficher pour le moment.
          </p>
        )}

        {/* Pagination (Optionnelle - à développer) */}
        {/* <div className="mt-12 flex justify-center">
          <button className="px-4 py-2 mx-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Précédent</button>
          <button className="px-4 py-2 mx-1 bg-[#2B293D] text-white rounded-md">1</button>
          <button className="px-4 py-2 mx-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
          <button className="px-4 py-2 mx-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Suivant</button>
        </div> */}

      </main>

      {/* Pied de page de l'application */}
      <Footer />
    </div>
  );
}

export default AllEventsPage;
