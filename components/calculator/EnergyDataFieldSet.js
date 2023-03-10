import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import warningIcon from '../../public/icons/warning.png';

const EnergyDataFieldSet = ({
  state,
  changeHandler,
  className,
  x,
  errorState,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const myRef = useRef(null);

  useEffect(() => {
    const { width, height } = myRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);
  return (
    <motion.fieldset
      id="energyData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        // duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <div ref={myRef} className={`${isClicked ? 'hidden' : ''}`}>
        <div className="flex justify-center items-center gap-4 p-4 bg-light-primary-2 dark:bg-black">
          <h2 className="text-3xl text-white font-poppins font-bold bg-light-primary-2 text-center dark:bg-black">
            Cout de l&apos;<span className="text-light-primary-4">énergie</span>
          </h2>
          <button
            type="button"
            onClick={() => setIsClicked(true)}
            className="w-10 h-10 m-0 p-0 bg-[url('/icons/info.png')] bg-center bg-contain border-none bg-no-repeat"
          />
        </div>
        <div className="flex flex-col pt-5 px-4 pb-4 bg-white dark:bg-light-primary-2">
          <label htmlFor="chargingPriceHP">
            Electricité - heures pleines(€/kWh):
          </label>
          <span className="error-msg">
            {errorState.energyData.chargingPriceHP}
          </span>
          <input
            className="mb-3"
            required
            placeholder="ex: 0,18"
            min="0"
            step=".01"
            type="number"
            id="chargingPriceHP"
            name="chargingPriceHP"
            value={state.energyData.chargingPriceHP}
            onChange={(e) => changeHandler(e, 'energyData')}
          />
          <label htmlFor="chargingPriceHC">
            Electricité - heures creuses(€/kWh){' '}
            <span className="italic">(optionnel)</span>:
          </label>
          <span className="error-msg">
            {errorState.energyData.chargingPriceHC}
          </span>
          <input
            className="mb-3"
            placeholder="ex: 0,15"
            min="0"
            step=".01"
            lang="en"
            type="number"
            id="chargingPriceHC"
            name="chargingPriceHC"
            value={state.energyData.chargingPriceHC}
            onChange={(e) => changeHandler(e, 'energyData')}
          />

          <label htmlFor="gasPrice">Carburant (€/lt):</label>
          <span className="error-msg">{errorState.energyData.gasPrice}</span>
          <input
            className="mb-3"
            required
            placeholder="ex: 1,75"
            min="0"
            step=".01"
            type="number"
            id="gasPrice"
            name="gasPrice"
            value={state.energyData.gasPrice}
            onChange={(e) => changeHandler(e, 'energyData')}
          />
        </div>
      </div>
      <article
        style={{ width: dimensions.width, minHeight: dimensions.height }}
        className={`${
          isClicked ? '' : 'hidden'
        } flex flex-col p-4 overflow-y-auto gap-1`}
      >
        <section>
          En février 2023, le prix en France est de{' '}
          <span className="font-bold">0,21€/kWh</span> selon les tarifs
          règlementés d&apos;EDF, pour une puissance de compteur de 6 kVA, en
          option base.
        </section>
        <section>
          <Image
            alt="warning"
            width="24"
            src={warningIcon}
            className="inline-block "
          />{' '}
          Le coût de recharge sur autoroute varie de{' '}
          <span className="font-bold">0,44€/kWh</span> à{' '}
          <span className="font-bold">0,70€/kWh</span> selon le fournisseur!
        </section>
        <section>
          Le calculateur concidère que vous chargez 50% du temps en heures
          creuses et 50% en heures pleines.
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

export default EnergyDataFieldSet;
