import React from 'react';
import Header from '../../sections/Header/Header'; // Ajustez le chemin si nécessaire
import Footer from '../../sections/Footer/Footer'; // Ajustez le chemin si nécessaire
import { Target, Eye, Sparkles, Users, CalendarCheck, Search } from 'lucide-react'; // Importation des icônes pertinentes

// Composant principal de la page "À Propos"
function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Léger fond gris pour différencier */}
      {/* En-tête de l'application */}
      <Header />

      {/* Contenu principal de la page */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md"> {/* Contenu dans une carte blanche */}

          {/* Titre de la page */}
          <h1 className="text-3xl md:text-4xl font-bold font-[Montserrat] text-center mb-6 text-[#2B293D]">
            À Propos d'Eventify
          </h1>
          <p className="text-center text-lg text-gray-600 font-[Open Sans] mb-10 md:mb-16">
            Connecter les gens à travers des expériences mémorables.
          </p>

          {/* Section Notre Mission */}
          <section className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center md:space-x-6">
              <div className="mb-4 md:mb-0 text-[#FFE047] bg-[#2B293D] p-3 rounded-full">
                <Target size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold font-[Montserrat] text-[#2B293D] mb-3">
                  Notre Mission
                </h2>
                <p className="text-gray-700 font-[Open Sans] leading-relaxed">
                  Chez Eventify, notre mission est de simplifier la découverte et la participation à des événements. Nous voulons être la plateforme incontournable où chacun peut trouver des événements qui correspondent à ses passions, que ce soit localement ou à travers le monde, et où les organisateurs peuvent facilement atteindre leur public.
                </p>
              </div>
            </div>
          </section>

          {/* Section Notre Vision */}
          <section className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 text-right md:text-left">
               {/* Inverser l'ordre sur mobile si nécessaire ou ajuster avec flex-row-reverse */}
              <div className="order-1 md:order-2 mb-4 md:mb-0 text-[#FFE047] bg-[#2B293D] p-3 rounded-full">
                 <Eye size={32} />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-semibold font-[Montserrat] text-[#2B293D] mb-3">
                  Notre Vision
                </h2>
                <p className="text-gray-700 font-[Open Sans] leading-relaxed">
                  Nous aspirons à créer un monde plus connecté où les événements enrichissent la vie des gens. Nous envisageons une plateforme dynamique et intelligente qui non seulement répertorie les événements, mais inspire également de nouvelles expériences et favorise les rencontres significatives.
                </p>
              </div>
            </div>
          </section>

          {/* Section Pourquoi Eventify ? */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl font-semibold font-[Montserrat] text-center text-[#2B293D] mb-10">
              Pourquoi Choisir Eventify ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Avantage 1 */}
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <Search size={40} className="mx-auto mb-4 text-[#FFE047]" />
                <h3 className="text-lg font-semibold font-[Montserrat] text-[#2B293D] mb-2">Découverte Facile</h3>
                <p className="text-sm text-gray-600 font-[Open Sans]">
                  Trouvez rapidement des événements pertinents grâce à notre recherche intuitive et nos filtres avancés.
                </p>
              </div>
              {/* Avantage 2 */}
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <CalendarCheck size={40} className="mx-auto mb-4 text-[#FFE047]" />
                <h3 className="text-lg font-semibold font-[Montserrat] text-[#2B293D] mb-2">Gestion Simplifiée</h3>
                <p className="text-sm text-gray-600 font-[Open Sans]">
                  Organisateurs, créez et gérez vos événements et vos billets en quelques clics.
                </p>
              </div>
              {/* Avantage 3 */}
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <Sparkles size={40} className="mx-auto mb-4 text-[#FFE047]" />
                <h3 className="text-lg font-semibold font-[Montserrat] text-[#2B293D] mb-2">Expériences Personnalisées</h3>
                <p className="text-sm text-gray-600 font-[Open Sans]">
                  Recevez des suggestions d'événements basées sur vos centres d'intérêt pour ne rien manquer.
                </p>
              </div>
            </div>
          </section>

          {/* Section Notre Équipe (Optionnelle) */}
          <section>
             <div className="flex flex-col md:flex-row items-center md:space-x-6">
              <div className="mb-4 md:mb-0 text-[#FFE047] bg-[#2B293D] p-3 rounded-full">
                <Users size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold font-[Montserrat] text-[#2B293D] mb-3">
                  Notre Équipe
                </h2>
                <p className="text-gray-700 font-[Open Sans] leading-relaxed">
                  Derrière Eventify se trouve une équipe passionnée de développeurs, designers et experts en événements, tous dédiés à vous offrir la meilleure expérience possible. Nous croyons au pouvoir des événements pour rassembler les gens et nous travaillons sans relâche pour améliorer notre plateforme.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Pied de page de l'application */}
      <Footer />
    </div>
  );
}

export default About;
