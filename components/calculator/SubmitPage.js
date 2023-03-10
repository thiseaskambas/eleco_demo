import React from 'react';

const SubmitPage = ({ submitHandler, checked, setChecked }) => {
  return (
    <div className="mt-[15vh] flex flex-col items-center gap-3">
      <button
        className="rounded-3xl border-2  overflow-hidden  bg-light-primary-6/10 text-white text-xl "
        type="submit"
        onClick={(e) => submitHandler(e)}
      >
        Voir les resultas
      </button>
      <div className="flex">
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
          className="w-4 h-4 mx-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="checkbox" className="text-white font-normal leading-4">
          Inclure la valeur <br /> résiduelle des véhicules
        </label>
      </div>
    </div>
  );
};

export default SubmitPage;
