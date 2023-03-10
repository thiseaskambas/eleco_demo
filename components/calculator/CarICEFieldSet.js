import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const CarICEFieldSet = ({ state, className, x, changeHandler, errorState }) => {
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
      initial={{ x, y: 0 }}
      animate={{ x: 0 }}
      transition={{
        ease: 'easeOut',
      }}
    >
      <div ref={myRef} className={`${isClicked ? 'hidden' : ''}`}>
        <div className="flex justify-center items-center p-4 gap-4 bg-light-primary-2 dark:bg-black">
          <h2 className="text-3xl text-white font-poppins font-bold ">
            Véhicule <span className="text-light-primary-4">thermique</span>
          </h2>

          <button
            type="button"
            onClick={() => setIsClicked(true)}
            className="w-10 h-10 m-0 p-0 bg-[url('/icons/info.png')] bg-center bg-contain border-none bg-no-repeat"
          />
        </div>

        <div className="flex flex-col px-4 pb-4 pt-5  bg-white dark:bg-light-primary-2">
          <label htmlFor="purchaseCost">Prix achat (€):</label>
          <span className="error-msg">
            {errorState.carDataICE.purchaseCost}
          </span>
          <input
            className="mb-3"
            placeholder="ex: 35000"
            required
            min="0"
            max="1000000"
            step="100"
            type="number"
            id="purchaseCost"
            name="purchaseCost"
            value={state.carDataICE.purchaseCost}
            onChange={(e) => changeHandler(e, 'carDataICE')}
          />
          <label htmlFor="consumption">Consomation (lt/100km):</label>
          <span className="error-msg">{errorState.carDataICE.consumption}</span>
          <input
            className="mb-3"
            placeholder="ex: 5,2"
            step="0.1"
            required
            min="0"
            max="100"
            type="number"
            id="consumption"
            name="consumption"
            value={state.carDataICE.consumption}
            onChange={(e) => changeHandler(e, 'carDataICE')}
          />
          <label htmlFor="insurance">Assurance (€/an):</label>
          <span className="error-msg">{errorState.carDataICE.insurance}</span>
          <input
            className="mb-3"
            placeholder="ex: 750"
            required
            min="0"
            type="number"
            id="insurance"
            name="insurance"
            value={state.carDataICE.insurance}
            onChange={(e) => changeHandler(e, 'carDataICE')}
          />
          <label htmlFor="maintenance">Entretien (€/an):</label>
          <span className="error-msg">{errorState.carDataICE.maintenance}</span>
          <input
            className="mb-3"
            placeholder="ex: 700"
            required
            min="0"
            type="number"
            id="maintenance"
            name="maintenance"
            value={state.carDataICE.maintenance}
            onChange={(e) => changeHandler(e, 'carDataICE')}
          />
        </div>
      </div>
      <article
        style={{ width: dimensions.width, height: dimensions.height }}
        className={`${
          isClicked ? '' : 'hidden'
        } flex flex-col p-4 overflow-y-auto`}
      >
        <section>
          <h3 className="font-bold">Prix :</h3>
          <p>
            Renseignez le prix d&apos;achat de la VT qui vous intéresse ou 0 si
            vous en possédez déjà une.
          </p>
        </section>
        <section>
          <h3 className="font-bold">Consomation :</h3>
          <p>
            Les VT les plus économes peuvent consommer moins de 5 L/100 km, les
            moins efficaces plus de 15 L/100 km. En moyenne, on peut estimer
            environ 7 à 10 L/100 km.
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

export default CarICEFieldSet;
