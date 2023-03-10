import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function DurationFieldSet({ state, changeHandler, className, x, errorState }) {
  const [isClicked, setIsClicked] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const myRef = useRef(null);

  useEffect(() => {
    const { width, height } = myRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);

  return (
    <motion.fieldset
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <div ref={myRef} className={`${isClicked ? 'hidden' : ''}`}>
        <div className="flex justify-center items-center p-4 gap-4 bg-light-primary-2 dark:bg-black">
          <h2 className="text-3xl text-white font-poppins font-bold bg-light-primary-2 text-center dark:bg-black">
            Durée de <span className="text-light-primary-4">détention</span>
          </h2>
          <button
            type="button"
            onClick={() => setIsClicked(true)}
            className="w-10 h-10 m-0 p-0 bg-[url('/icons/info.png')] bg-center bg-contain border-none bg-no-repeat"
          />
        </div>

        <div className="flex flex-col pt-5 px-4 pb-4 bg-white dark:bg-light-primary-2">
          <label htmlFor="durationStudied">Années</label>
          <span className="error-msg">
            {errorState.durationStudied.yearsStudied}
          </span>
          <input
            className="mb-3"
            min="1"
            placeholder="ex: 8"
            step="1"
            type="number"
            id="durationStudied"
            name="yearsStudied"
            value={state.durationStudied.yearsStudied}
            onChange={(e) => changeHandler(e, 'durationStudied')}
          />
        </div>
      </div>
      <article
        style={{ width: dimensions.width, minHeight: dimensions.height }}
        className={`${
          isClicked ? '' : 'hidden'
        } flex flex-col p-4 overflow-y-auto`}
      >
        <section>
          <p>
            Les VE coûtent plus cher à l&apos;achat mais offrent des économies
            sur le <span className="font-bold">long terme </span>
            grâce aux coûts d&apos;entretien et d&apos;énergie réduits.
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
}

export default DurationFieldSet;
