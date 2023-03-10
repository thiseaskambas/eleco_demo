import React from 'react';

const NavButtons = ({ stepState, setStepState, setX, state }) => {
  const canNavToNext = (() => {
    switch (stepState) {
      case 0:
        const { carDataEV } = state;
        return Boolean(
          carDataEV.consumption &&
            carDataEV.insurance &&
            carDataEV.maintenance &&
            carDataEV.purchaseCost
        );
      case 1:
        const { carDataICE } = state;
        return Boolean(
          carDataICE.consumption &&
            carDataICE.insurance &&
            carDataICE.maintenance &&
            carDataICE.purchaseCost
        );
      case 2:
        const { energyData } = state;
        return Boolean(energyData.chargingPriceHP && energyData.gasPrice);
      case 3:
        return true;
      case 4:
        const {
          dailyCommutes,
          daysWorkedPerY,
          otherKMPerW,
          weekendKM,
          workHomeDistance,
        } = state.usageData;
        const { totalKMPerY } = state.usageExpected;
        return Boolean(
          totalKMPerY ||
            (dailyCommutes &&
              daysWorkedPerY &&
              otherKMPerW &&
              weekendKM &&
              workHomeDistance)
        );

      case 5:
        const { durationStudied } = state;
        return Boolean(durationStudied.yearsStudied);
      default:
        return true;
    }
  })();

  return (
    <div className="flex self-stretch font-bold font-poppins text-white border-y-2 bg-light-primary-8 dark:bg-dark-primary-2">
      {stepState > 0 && stepState < 7 && (
        <button
          className={`${
            stepState > 5 ? 'border-0' : 'border-r'
          }  flex-1 rounded-none border-0 font-normal text-xl py-4 hover:bg-white/20 active:bg-white/30 transition-all dark:active:bg-black/10`}
          type="button"
          onClick={() => {
            setStepState((prev) => prev - 1), setX(() => -1000);
            window.scrollTo(0, 0);
          }}
        >
          Précédent
        </button>
      )}
      {stepState < 6 && (
        <button
          className={`${
            stepState < 1 ? 'border-0' : 'border-l'
          }  flex-1 rounded-none border-0 text-xl py-4 hover:bg-white/30 active:bg-white/20 transition-all dark:active:bg-black/30 disabled:bg-slate-500 disabled:active:disabled:bg-slate-500 disabled:hover:bg-slate-500`}
          type="button"
          onClick={() => {
            setStepState((prev) => prev + 1), setX(() => 1000);
            window.scrollTo(0, 0);
          }}
          disabled={!canNavToNext}
        >
          Suivant
        </button>
      )}
    </div>
  );
};

export default NavButtons;
