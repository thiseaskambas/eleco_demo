import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import warningIcon from '../../public/icons/warning.png';

const UsageExpectedFieldSet = ({
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
      id="usageExpected"
      className={className}
      initial={{ opacity: 0, x, y: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <div ref={myRef} className={`${isClicked ? 'hidden' : ''}`}>
        <div className="flex justify-center items-center gap-4 p-4 bg-light-primary-2 dark:bg-black">
          <h2 className="text-3xl text-white font-poppins font-bold bg-light-primary-2 text-center dark:bg-black">
            <span className="text-light-primary-4">Kilomètrage</span> annuel
          </h2>
          <button
            type="button"
            onClick={() => setIsClicked(true)}
            className="w-10 h-10 m-0 p-0 bg-[url('/icons/info.png')] bg-center bg-contain border-none bg-no-repeat"
          />
        </div>

        <div className="flex flex-col pt-5 px-4 pb-4 bg-white dark:bg-light-primary-2">
          <p className="text-base leading-5 mb-4">
            <Image
              alt="warning"
              width="24"
              src={warningIcon}
              className="inline-block "
            />{' '}
            Si vous ne connaissez pas votre kilomètrage annuel, laissez cette
            case <b>vide</b> et utilisez le <b>similutateur</b> de l&apos;étape
            suivante
          </p>
          <label htmlFor="totalKMPerY">
            Total de KM/an <span className="italic">(optionnel)</span>
          </label>
          <span className="error-msg">
            {errorState.usageExpected.totalKMPerY}
          </span>
          <input
            className="mb-3"
            min="0"
            placeholder="ex: 12500"
            type="number"
            id="totalKMPerY"
            name="totalKMPerY"
            value={state.usageExpected.totalKMPerY}
            onChange={(e) => changeHandler(e, 'usageExpected')}
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
          <p>
            Une voiture immatriculée en France métropolitaine roule en moyenne{' '}
            <span className="font-bold">12000km</span> dans une année
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

export default UsageExpectedFieldSet;
