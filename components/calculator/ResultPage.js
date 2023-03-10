import React from 'react';
import ResultMsgNegative from './ReslutMsgNegative';
import ResultMsgNeutral from './ReslutMsgNeutral';
import ResultMsgPositive from './ReslutMsgPositive';
import ResultData from './ResultData';

const ResultPage = ({ results, checked, worthIt, state, resetSteps }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-light-primary-start to-light-primary-end  dark:from-dark-primary-1 dark:via-dark-primary-1 dark:to-dark-primary-2">
      <div className="max-w-3xl">
        <h2 className="text-xl p-2 text-white font-poppins font-extrabold text-center my-2 sm:my-5">
          Résultas
        </h2>
        <div
          id="results-ctn"
          className="grid grid-cols-2 gap-5 mx-4 mt-4 sm:mt-[10vh]"
        >
          <ResultData
            carCostAtEnd={results.carICECostAtEndOfPeriod}
            carType="Thermique"
            energyCostPerYear={results.gasICECostPerY}
            carCostPerKMAtEnd={results.carICECostPerKmAtEnd}
            carValueAtEnd={results.carICEValueAtEndOfPeriod}
            checked={checked}
          />
          <ResultData
            carCostAtEnd={results.carEVCostAtEndOfPeriod}
            carType="Electrique"
            energyCostPerYear={results.chargeEVCostPerY}
            carCostPerKMAtEnd={results.carEVCostPerKmAtEnd}
            carValueAtEnd={results.carEVValueAtEndOfPeriod}
            checked={checked}
          />
          {worthIt > 1000 && (
            <ResultMsgNegative
              durationStudied={state.durationStudied.yearsStudied}
              worthIt={worthIt}
            />
          )}
          {worthIt < -1000 && (
            <ResultMsgPositive
              durationStudied={state.durationStudied.yearsStudied}
              worthIt={worthIt}
            />
          )}
          {worthIt > -1000 && worthIt < 1000 && (
            <ResultMsgNeutral
              durationStudied={state.durationStudied.yearsStudied}
              worthIt={worthIt}
            />
          )}
        </div>
      </div>
      <button
        className="bg-light-primary-4 dark:bg-dark-primary-2 border-2 mt-8"
        onClick={() => {
          resetSteps();
          window.scrollTo(0, 0);
        }}
      >
        Recommencer
      </button>
    </div>
  );
};

export default ResultPage;
