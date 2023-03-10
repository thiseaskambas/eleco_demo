import React, { useState } from 'react';

const TestInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mx-auto">
        <button
          className="bg-light-primary-4 hover:brightness-90 transition-all border-none text-black"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Informations sur les tests
        </button>
      </div>
      <ul
        className={`${
          isOpen ? 'max-h-[300vh]' : 'max-h-0'
        } overflow-hidden transition-all flex flex-col gap-3 bg-white dark:bg-light-primary-2 rounded-none sm:rounded-2xl shadow-lg`}
      >
        <h2 className="text-white bg-black pt-8 pb-4 px-8">
          Les tests sont catégorisés ainsi:
        </h2>
        <li className="py-4 px-8">
          <h3 className="font-bold flex justify-start items-baseline gap-3">
            <div className="w-11 h-11  bg-contain bg-bottom bg-no-repeat bg-[url('/icons/acc_dark.png')] dark:bg-[url('/icons/acc_inv.png')] " />
            Accélération :
          </h3>
          <p>
            En combien de temps une voiture peut-elle atteindre les 100km/h ?
          </p>
        </li>
        <ul className="py-4 px-8">
          <li>
            <h3 className="font-bold flex justify-start items-baseline gap-3">
              <div className="w-11 h-11  bg-contain bg-bottom bg-no-repeat bg-[url('/icons/range_dark.png')] dark:bg-[url('/icons/range_inv.png')]" />
              Autonomie
            </h3>
          </li>
          <li>
            Combien de kilomètres une voiture peut-elle parcourir en roulant à
            90 ou 120km/h si sa batterie est chargée à 100% ?{' '}
          </li>
          <li>
            Et si elle est chargée à 80% comme il est souvent recommandé ?
          </li>
          <li>Combien de temps pour la rechargée de 5 à 80 % ?</li>
          <li>Quelle est sa consomation moyenne réelle ?</li>
        </ul>
        <li className="py-4 px-8">
          <h3 className="font-bold flex justify-start items-baseline gap-3">
            <div className="w-11 h-11  bg-contain bg-bottom bg-no-repeat bg-[url('/icons/route_dark.png')] dark:bg-[url('/icons/route_inv.png')]" />
            1000km
          </h3>
          <p>
            Un test très parlant : combien de temps pour parcourir 1000 km avec
            la voiture testée, temps de pauses pour recharger comprises.
          </p>
        </li>
        <li className="py-4 px-8">
          <h3 className="font-bold flex justify-start items-baseline gap-3">
            <div className="w-11 h-11  bg-contain bg-bottom bg-no-repeat bg-[url('/icons/weight.png')] dark:bg-[url('/icons/weight_inv.png')]" />
            Poids
          </h3>
          <p>Le poids de la voiture et sa distribution</p>
        </li>
        <li className="py-4 px-8">
          <h3 className="font-bold flex justify-start items-baseline gap-3">
            <div className="w-11 h-11  bg-contain bg-bottom bg-no-repeat bg-[url('/icons/banana.png')] dark:bg-[url('/icons/banana_inv.png')]" />
            Caisses à bananes
          </h3>
          <p>
            Encore un test bien sympa. Plutôt que parler en termes de volume
            pour mesurer la capacité de chargement du coffre d&apos;une voiture
            Björn la remplie de caisses à bananes!
          </p>
        </li>
        <li className="pt-4 pb-8 px-8">
          <h3 className="font-bold flex justify-start items-baseline gap-3">
            <div className="w-11 h-11  bg-contain bg-bottom bg-no-repeat bg-[url('/icons/brake.png')] dark:bg-[url('/icons/brake_inv.png')]" />
            Freins
          </h3>
          <p>
            La sécurité étant tout de même un facteur très important pour
            l&apos;achat d&apos;un véhicule, voici un test qui relève en combien
            de mètres et de secondes une voiture passe de 100km/h à un arrêt
            complet.
          </p>
        </li>
      </ul>
    </>
  );
};

export default TestInfo;
