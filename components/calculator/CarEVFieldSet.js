import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const CarEVFieldSet = ({ state, className, x, changeHandler, errorState }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const myRef = useRef(null);

  useEffect(() => {
    const { width, height } = myRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);

  return (
    <motion.fieldset
      id="carData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        ease: 'easeOut',
      }}
    >
      <div ref={myRef} className={`${isClicked ? 'hidden' : ''}`}>
        <div className="flex justify-center items-center p-4 bg-light-primary-2 dark:bg-black gap-4">
          <h2 className="text-3xl text-white  font-poppins font-bold bg-light-primary-2 text-center dark:bg-black">
            Véhicule <span className="text-light-primary-4">électrique</span>
          </h2>
          <button
            type="button"
            onClick={() => setIsClicked(true)}
            className="w-10 h-10 m-0 p-0 bg-[url('/icons/info.png')] bg-center bg-contain border-none bg-no-repeat"
          />
        </div>
        <div className="flex flex-col pt-5 px-4 pb-4 bg-white dark:bg-light-primary-2">
          <label htmlFor="purchaseCost">Prix achat (€):</label>
          <span className="error-msg">{errorState.carDataEV.purchaseCost}</span>
          <input
            className="mb-3"
            placeholder="ex: 35000"
            required
            min="0"
            step="100"
            max="10000000"
            type="number"
            id="purchaseCost"
            name="purchaseCost"
            value={state.carDataEV.purchaseCost}
            onChange={(e) => changeHandler(e, 'carDataEV')}
          />
          <label htmlFor="ecoBonus">
            Bonus ecologique (€): <span className="italic">(optionnel)</span>
          </label>
          {/* <span className="error-msg">{errorState.carDataEV.ecoBonus}</span> */}
          <input
            className="mb-3"
            placeholder="ex: 5000"
            min="0"
            max="10000000"
            type="number"
            id="ecoBonus"
            name="ecoBonus"
            value={state.carDataEV.ecoBonus}
            onChange={(e) => changeHandler(e, 'carDataEV')}
          />
          <label htmlFor="consumption">Consomation (kWh/100km):</label>
          <span className="error-msg">{errorState.carDataEV.consumption}</span>
          <input
            className="mb-3"
            placeholder="ex: 18"
            required
            min="0"
            max="1000"
            type="number"
            id="consumption"
            name="consumption"
            value={state.carDataEV.consumption}
            onChange={(e) => changeHandler(e, 'carDataEV')}
          />
          <label htmlFor="insurance">Assurance (€/an):</label>
          <span className="error-msg">{errorState.carDataEV.insurance}</span>
          <input
            className="mb-3"
            placeholder="ex: 650"
            required
            min="0"
            max="10000000"
            type="number"
            id="insurance"
            name="insurance"
            value={state.carDataEV.insurance}
            onChange={(e) => changeHandler(e, 'carDataEV')}
          />
          <label htmlFor="maintenance">Entretien (€/an):</label>
          <span className="error-msg">{errorState.carDataEV.maintenance}</span>
          <input
            className="mb-3"
            placeholder="ex: 600"
            max="10000000"
            required
            min="0"
            type="number"
            id="maintenance"
            name="maintenance"
            value={state.carDataEV.maintenance}
            onChange={(e) => changeHandler(e, 'carDataEV')}
          />
        </div>
      </div>
      <article
        style={{ width: dimensions.width, height: dimensions.height }}
        className={`${isClicked ? '' : 'hidden'} flex flex-col p-4`}
      >
        <section>
          <h3 className="font-bold">Prix :</h3>
          <p>Renseignez le prix d&apos;achat de la VE qui vous intéresse.</p>
        </section>
        <section>
          <h3 className="font-bold">Entretien :</h3>
          <p>
            Pas besoin d&apos;huile, de filtres à air et de bougies
            d&apos;allumage! Les freins régénératifs réduisent l&apos;usure des
            plaquettes de frein, donc moins de réparations et de remplacements.
          </p>
        </section>
        <section>
          <h3 className="font-bold">Consomation :</h3>
          <p>
            En moyenne, la consommation d&apos;une voiture électrique cumule de
            20 à 25 kWh/100 km.
          </p>
        </section>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          className="mt-auto rounded-none border-none bg-light-primary-4 dark:bg-dark-primary-1"
        >
          Fermer
        </button>
      </article>
    </motion.fieldset>
  );
};

export default CarEVFieldSet;
