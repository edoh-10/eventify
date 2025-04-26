// import React from "react";
// import Header from "../../sections/Header/Header";
// import Footer from "../../sections/Footer/Footer";
// import { FaArrowLeft } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { Music } from "lucide-react";
// import InterestBtns from "../../components/selectInetrestBtns/interestBtns";


// function SelectInterestsPage() {
// // initialisation de navigate
// const navigate = useNavigate();

// // function pour le btn de retour
// const goBack = () => {
//   navigate(-1);
// }

// // btns tables
// const music = [
//   {
//     id: "Concerts",
//     texte: "Concerts,"
//   },
//   {
//     id: "Music Festivals",
//     texte: "Music Festivals",
//   },
//   {
//     id: "Music Workshops",
//     texte: "Music Workshops",
//   },
//   {
//     id: "Dj Nights",
//     texte: "Dj Nights",
//   }

// ]
//   return (
//     <div>
//       <Header />
//       <div>
//         <div className="w-[83%] mx-auto flex flex-col flex-wrap ">
//           {/* en tête de la page */}
//           <div className="flex items-center">
//             <button onClick={goBack} className="absolute top-24 left-20">
//               <FaArrowLeft className="text-[28px] "/>
//             </button>
//             <div>
//             <h2 className="font-[Montserrat] font-[700] text-[24px] mb-6">Share your interests with us</h2>
//             <p className="font-[Open Sans] font-[400] text-[20px] ">
//               Choose your interests below to get personalized event suggestions
//             </p>
//             </div>
//           </div>
//           {/* formulaire */}
//           <div>
           
//             <form action="">
//               {/* Music */}
//               <InterestBtns content={music} titre="Music" />
//               {/* Arts & Culture */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Arts & Culture</h2>
//                 <div className="flex items-center mb-10 mt-4 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Arts Exhibitions" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Cultural Festivals" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Theater Plays" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Dance Performances" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Food & Drink */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Food & Drink</h2>
//                 <div className="flex items-center mb-10 mt-4 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Food Festivals" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Wine Tastings" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Cooking Classes" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Beer Festivals" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Sports & Fitness */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Sports & Fitness</h2>
//                 <div className="flex items-center mb-10 mt-4 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Marathons" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Yoga Sessions" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Fitness Workshops" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Sporting Events" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Business & Networking */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Business & Networking</h2>
//                 <div className="flex items-center mt-4 mb-10 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Conferences" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Seminars" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Workshops" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Networking Events" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Family & Kids */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Family & Kids</h2>
//                 <div className="flex items-center mt-4 mb-10 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Family-Friendly Events" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Children's Workshops" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Kid-Friendly Shows" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Educational Activities" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Technology */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Technology</h2>
//                 <div className="flex items-center mt-4 mb-10 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Tech Coferences" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Hackathons" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Startup Events" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Gadget Expos" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Comedy & Entertainment */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Comedy & Entertainment</h2>
//                 <div className="flex items-center mt-4 mb-10 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Stand-up Comedy" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Improv Nights" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Comedy Festivals" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Magic Shows" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Charity & Causes */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Charity & Causes</h2>
//                 <div className="flex items-center mb-10 mt-4 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input
//                       type="button"
//                       value="Fundraising Events"
//                       name=""
//                       id=""
//                     />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Charity Galas" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Benefit Concerts" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Auctions &Fundraisers" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Education & Learning */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Education & Learning</h2>
//                 <div className="flex items-center mb-10 mt-4 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Lectures & Talks" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Workshops" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Educational Seminars" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Skill-Building Sessions" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//               {/* Travel & Adventures */}
//               <div className="mt-8">
//                 <h2 className="font-[Open Sans] font-[600] text-[20px] ">Travel & Adventures</h2>
//                 <div className="flex items-center mt-4 mb-10 ">
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="City Tours" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Adventure Travel" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Cultural Experiences" />
//                   </div>
//                   <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
//                     <input type="button" value="Cruise vacations" />
//                   </div>
//                 </div>
//                 <span>
//                   <hr />
//                 </span>
//               </div>
//             </form>
//           </div>
//           <div className="flex items-center justify-end my-20 ">
//           <div className=" flex items-center justify-center w-[330px] h-[74px] border-solid border-[1px]  border-[#2B293D] bg-[#2B293D] rounded-md">
//           <button className="font-[Open Sans] font-[700] text-[20px] text-[#fff]">Save my Interests</button>
//           </div>
//         </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default SelectInterestsPage;








import React, { useState } from "react";
import Header from "../../sections/Header/Header"; // Ajustez le chemin si nécessaire
import Footer from "../../sections/Footer/Footer"; // Ajustez le chemin si nécessaire
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Check } from 'lucide-react'; // Pour indiquer la sélection

// Données structurées pour les catégories et intérêts
const interestCategories = [
  {
    title: "Music",
    interests: [
      { id: "music_concerts", text: "Concerts" },
      { id: "music_festivals", text: "Music Festivals" },
      { id: "music_workshops", text: "Music Workshops" },
      { id: "music_dj_nights", text: "DJ Nights" },
    ]
  },
  {
    title: "Arts & Culture",
    interests: [
      { id: "arts_exhibitions", text: "Arts Exhibitions" },
      { id: "arts_cultural_festivals", text: "Cultural Festivals" },
      { id: "arts_theater_plays", text: "Theater Plays" },
      { id: "arts_dance_performances", text: "Dance Performances" },
    ]
  },
  {
    title: "Food & Drink",
    interests: [
      { id: "food_festivals", text: "Food Festivals" },
      { id: "food_wine_tastings", text: "Wine Tastings" },
      { id: "food_cooking_classes", text: "Cooking Classes" },
      { id: "food_beer_festivals", text: "Beer Festivals" },
    ]
  },
  {
    title: "Sports & Fitness",
    interests: [
        { id: "sports_marathons", text: "Marathons" },
        { id: "sports_yoga", text: "Yoga Sessions" },
        { id: "sports_fitness_workshops", text: "Fitness Workshops" },
        { id: "sports_events", text: "Sporting Events" },
    ]
  },
  {
    title: "Business & Networking",
    interests: [
        { id: "business_conferences", text: "Conferences" },
        { id: "business_seminars", text: "Seminars" },
        { id: "business_workshops", text: "Workshops" },
        { id: "business_networking", text: "Networking Events" },
    ]
  },
  {
    title: "Family & Kids",
    interests: [
        { id: "family_friendly", text: "Family-Friendly Events" },
        { id: "family_children_workshops", text: "Children's Workshops" },
        { id: "family_kid_shows", text: "Kid-Friendly Shows" },
        { id: "family_educational", text: "Educational Activities" },
    ]
  },
   {
    title: "Technology",
    interests: [
        { id: "tech_conferences", text: "Tech Conferences" },
        { id: "tech_hackathons", text: "Hackathons" },
        { id: "tech_startup", text: "Startup Events" },
        { id: "tech_expos", text: "Gadget Expos" },
    ]
  },
  {
    title: "Comedy & Entertainment",
    interests: [
        { id: "comedy_standup", text: "Stand-up Comedy" },
        { id: "comedy_improv", text: "Improv Nights" },
        { id: "comedy_festivals", text: "Comedy Festivals" },
        { id: "comedy_magic", text: "Magic Shows" },
    ]
  },
  {
    title: "Charity & Causes",
    interests: [
        { id: "charity_fundraising", text: "Fundraising Events" },
        { id: "charity_galas", text: "Charity Galas" },
        { id: "charity_benefit_concerts", text: "Benefit Concerts" },
        { id: "charity_auctions", text: "Auctions & Fundraisers" },
    ]
  },
  {
    title: "Education & Learning",
    interests: [
        { id: "education_lectures", text: "Lectures & Talks" },
        { id: "education_workshops", text: "Workshops" },
        { id: "education_seminars", text: "Educational Seminars" },
        { id: "education_skill_building", text: "Skill-Building Sessions" },
    ]
  },
  {
    title: "Travel & Adventures",
    interests: [
        { id: "travel_tours", text: "City Tours" },
        { id: "travel_adventure", text: "Adventure Travel" },
        { id: "travel_cultural", text: "Cultural Experiences" },
        { id: "travel_cruise", text: "Cruise Vacations" },
    ]
  },
];

// Composant pour un bouton d'intérêt individuel
function InterestButton({ id, text, isSelected, onToggle }) {
  return (
    <button
      type="button" // Important pour ne pas soumettre le formulaire
      onClick={() => onToggle(id)}
      // Styles conditionnels pour l'état sélectionné/non sélectionné
      className={`
        flex items-center justify-center
        py-2 px-5 mr-3 mb-3 /* Ajustement padding/marge */
        border border-solid rounded-full
        text-sm sm:text-base /* Taille de texte responsive */
        transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFE047] /* Style de focus */
        ${isSelected
          ? 'bg-[#FFE047] border-[#FFE047] text-[#2B293D] font-semibold' // Style sélectionné (jaune)
          : 'bg-white border-gray-400 text-gray-700 hover:bg-gray-100 hover:border-gray-500' // Style non sélectionné
        }
      `}
    >
      {isSelected && <Check size={16} className="mr-1.5" />} {/* Icône si sélectionné */}
      {text}
    </button>
  );
}

// Composant principal de la page
function SelectInterestsPage() {
  const navigate = useNavigate();
  // État pour stocker les IDs des intérêts sélectionnés
  const [selectedInterests, setSelectedInterests] = useState({});

  // Fonction pour basculer la sélection d'un intérêt
  const toggleInterest = (interestId) => {
    setSelectedInterests(prev => ({
      ...prev,
      [interestId]: !prev[interestId] // Inverse la valeur booléenne pour cet ID
    }));
  };

  // Fonction pour le bouton de retour
  const goBack = () => {
    navigate(-1);
  };

  // Fonction pour sauvegarder les intérêts (à implémenter)
  const saveInterests = (e) => {
      e.preventDefault(); // Empêche la soumission standard du formulaire
      const selectedIds = Object.keys(selectedInterests).filter(id => selectedInterests[id]);
      console.log("Intérêts sélectionnés :", selectedIds);
      // Ici, vous ajouteriez la logique pour envoyer ces IDs à votre backend ou les stocker localement.
      alert("Intérêts sauvegardés (voir console) !");
      // Optionnel: naviguer vers une autre page après sauvegarde
      // navigate('/user');
  }

  return (
    <div className="flex flex-col min-h-screen"> {/* Fond légèrement gris */}
      <Header />

      {/* Conteneur principal avec padding responsive */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="w-[83%] mx-auto bg-white p-6 md:p-10">

          {/* En-tête de la page - responsive */}
          <div className="relative flex flex-col sm:flex-row items-center mb-8 md:mb-12">
            <button
              onClick={goBack}
              className="absolute left-0 top-0 sm:static sm:mr-6 mb-4 sm:mb-0 text-gray-600 hover:text-[#2B293D]"
              aria-label="Retour"
            >
              <FaArrowLeft className="text-2xl sm:text-3xl" />
            </button>
            <div className="text-center sm:text-left">
              <h1 className="font-[Montserrat] font-bold text-xl sm:text-2xl lg:text-3xl mb-2 text-[#2B293D]">
                Partagez vos centres d'intérêt
              </h1>
              <p className="font-[Open Sans] text-sm sm:text-base lg:text-lg text-gray-600">
                Choisissez vos intérêts pour recevoir des suggestions d'événements personnalisées.
              </p>
            </div>
          </div>

          {/* Formulaire contenant les catégories d'intérêts */}
          <form onSubmit={saveInterests}>
            <div className="space-y-8"> {/* Espace entre les catégories */}
              {interestCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="font-[Open Sans] font-semibold text-lg sm:text-xl text-[#2B293D] mb-4 border-b pb-2">
                    {category.title}
                  </h2>
                  {/* Conteneur flex pour les boutons, avec retour à la ligne */}
                  <div className="flex flex-wrap items-center">
                    {category.interests.map((interest) => (
                      <InterestButton
                        key={interest.id}
                        id={interest.id}
                        text={interest.text}
                        isSelected={!!selectedInterests[interest.id]} // Vérifie si l'ID est dans l'état (et true)
                        onToggle={toggleInterest}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton de sauvegarde - responsive */}
            <div className="flex justify-center sm:justify-end mt-10 md:mt-16">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-[#2B293D] hover:bg-[#4539B4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFE047] transition duration-150 ease-in-out"
              >
                Sauvegarder mes Intérêts
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SelectInterestsPage;
