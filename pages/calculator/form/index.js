import { useEffect, useState } from 'react';

import { CarEVFieldSet } from '../../../components/calculator';
import { CarICEFieldSet } from '../../../components/calculator';
import { DurationFieldSet } from '../../../components/calculator';
import { EnergyDataFieldSet } from '../../../components/calculator';
import { UsageDataFieldSet } from '../../../components/calculator';
import { UsageExpectedFieldSet } from '../../../components/calculator';
import ErrorMessage from '../../../components/calculator/ErrorMessage';
import {
  initialResultsState,
  initialState,
  initialStateErrors,
  initialStateDev,
} from '../../../components/calculator/initialStates';
import NavButtons from '../../../components/calculator/NavButtons';
import ProgressBar from '../../../components/calculator/ProgressBar';
import ResultPage from '../../../components/calculator/ResultPage';
import SubmitPage from '../../../components/calculator/SubmitPage';
import CustomHead from '../../../components/customHead';

import calculator from '../../../helpers/calculator';

const Calculator = () => {
  const [state, setState] = useState(
    process.env.NEXT_PUBLIC_ENV === 'DEV' ? initialStateDev : initialState
  );
  const [errorState, setErrorState] = useState(initialStateErrors);
  const [errorCount, setErrorCount] = useState(0);
  const [stepState, setStepState] = useState(0);
  const [x, setX] = useState(0);
  const [results, setResults] = useState(initialResultsState);
  const [worthIt, setWorthIt] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setWorthIt(
        Number(
          (
            results.carEVCostAtEndOfPeriod -
            results.carEVValueAtEndOfPeriod -
            (results.carICECostAtEndOfPeriod - results.carICEValueAtEndOfPeriod)
          ).toFixed(0)
        )
      );
    } else {
      setWorthIt(
        Number(
          (
            results.carEVCostAtEndOfPeriod - results.carICECostAtEndOfPeriod
          ).toFixed(0)
        )
      );
    }
  }, [
    results.carEVCostAtEndOfPeriod,
    results.carICECostAtEndOfPeriod,
    checked,
    results.carEVValueAtEndOfPeriod,
    results.carICEValueAtEndOfPeriod,
  ]);

  const convertDataToNumbers = (obj) => {
    const newObj = {};
    for (const key in obj) {
      const element = obj[key];
      if (typeof element === 'object') {
        newObj[key] = convertDataToNumbers(element);
      } else {
        newObj[key] = Number(Math.abs(Number(element)).toFixed(3));
      }
    }
    return newObj;
  };
  const checkValuesEntered = (obj) => {
    let errors = 0;
    for (const outerKey in obj) {
      const element = obj[outerKey];
      if (typeof element === 'object' && !outerKey.startsWith('usage')) {
        for (const innerKey in element) {
          if (
            !element[innerKey].trim().length &&
            innerKey !== 'chargingPriceHC' &&
            innerKey !== 'ecoBonus'
          ) {
            errors += 1;
            setErrorState((prev) => ({
              ...prev,
              [outerKey]: {
                ...prev[outerKey],
                [innerKey]: '*Ce champ est obligatoire',
              },
            }));
          }
        }
      }
    }

    if (!obj.usageExpected.totalKMPerY.trim().length) {
      for (const key in obj.usageData) {
        if (!obj.usageData[key].trim().length) {
          errors += 1;
          setErrorState((prev) => ({
            ...prev,
            usageData: {
              ...prev.usageData,
              [key]:
                "*Vous n'avez pas rentré de KM annuel, ce champ est donc obligatoire",
            },
          }));
        }
      }
    }
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const height = window.innerHeight;
    const errors = checkValuesEntered(state);
    if (!errors) {
      const convertedInputToNumbers = convertDataToNumbers(state);
      setResults(() => calculator(convertedInputToNumbers));
      window.scrollBy({ top: height, behavior: 'smooth' });
    } else {
      setErrorCount(errors);
      setTimeout(() => {
        setErrorCount(0);
      }, 4000);
    }
  };

  const changeHandler = (e, objName) => {
    let { value, name } = e.target;
    value = value.replace(/\,/, '.');

    if (
      !value.trim().length &&
      !objName.startsWith('usage') &&
      name !== 'chargingPriceHC' &&
      name !== 'ecoBonus'
    ) {
      setErrorState((prev) => ({
        ...prev,
        [objName]: {
          ...prev[objName],
          [name]: '*Ce champ est obligatoire',
        },
      }));
    } else if (objName === 'usageExpected' && value > 0) {
      for (const key in state.usageData) {
        if (!state.usageData[key].trim().length) {
          setErrorState((prev) => ({
            ...prev,
            usageData: {
              ...prev.usageData,
              [key]: '',
            },
          }));
        }
      }
    } else {
      setErrorState((prev) => ({
        ...prev,
        [objName]: {
          ...prev[objName],
          [name]: '',
        },
      }));
    }
    setState((prev) => ({
      ...prev,
      [objName]: {
        ...prev[objName],
        [name]: value,
      },
    }));
  };

  return (
    <>
      <CustomHead
        title="Calculez votre électrocompatibilité | eleco.dev"
        description="Découvrez si il est rentable de passer à l'électrique selon vos trajets, le prix d'achat d'une voiture électrique qui vous intéresse et le coût de l'énergie..!"
      />
      <div className="flex flex-col flex-grow justify-between min-h-screenNoNav">
        <ProgressBar stepState={stepState} />
        <h1
          aria-label="Calculateur éléctro-compatibilité"
          className="text-xl p-2 text-white font-poppins font-extrabold text-center"
        ></h1>
        <form
          autoComplete="off"
          className=" text-lg flex flex-col flex-grow overflow-x-hidden sm:items-center mt-[1vh] sm:mt-[10vh]"
          lang="fr"
        >
          {stepState === 0 && (
            <CarEVFieldSet
              x={x}
              state={state}
              errorState={errorState}
              className="bg-white overflow-hidden  min-w-[275px] shadow-2xl max-w-2xl  dark:bg-black "
              changeHandler={changeHandler}
            />
          )}
          {stepState === 1 && (
            <CarICEFieldSet
              x={x}
              state={state}
              errorState={errorState}
              className="bg-white overflow-hidden  min-w-[275px] shadow-2xl max-w-2xl dark:bg-black"
              changeHandler={changeHandler}
            />
          )}
          {stepState === 2 && (
            <EnergyDataFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] shadow-2xl max-w-2xl dark:bg-black"
            />
          )}
          {stepState === 3 && (
            <UsageExpectedFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] shadow-2xl max-w-2xl dark:bg-black"
            />
          )}
          {stepState === 4 && (
            <UsageDataFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] shadow-2xl max-w-2xl dark:bg-black"
            />
          )}

          {stepState === 5 && (
            <DurationFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] shadow-2xl max-w-2xl dark:bg-black"
            />
          )}
          {stepState === 6 && (
            <>
              {errorCount > 0 && <ErrorMessage />}
              <SubmitPage
                submitHandler={submitHandler}
                checked={checked}
                setChecked={setChecked}
                errorCount={errorCount}
              />
            </>
          )}
        </form>
        <NavButtons
          stepState={stepState}
          setStepState={setStepState}
          setX={setX}
          state={state}
        />
      </div>
      {stepState === 6 && (
        <ResultPage
          results={results}
          checked={checked}
          worthIt={worthIt}
          state={state}
          resetSteps={() => setStepState(0)}
        />
      )}
    </>
  );
};

export default Calculator;
