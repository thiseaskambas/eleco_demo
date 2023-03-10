import React from 'react';

const ResultData = ({
  carCostAtEnd,
  carCostPerKMAtEnd,
  carValueAtEnd,
  checked,
  carType,
  energyCostPerYear,
}) => {
  return (
    <div className="border-2  rounded-xl bg-white text-center overflow-hidden dark:bg-light-primary-2">
      <h3 className="font-bold border-b p-2 bg-light-primary-2 text-white dark:bg-black">
        Coût <span className="text-light-primary-4">{carType}</span>
      </h3>
      <div className="my-4">
        <h4>Coût total :</h4>
        <p className="font-bold">
          <span>{carCostAtEnd}</span> €
        </p>
        <h4>
          Cout {carType === 'Thermique' ? 'des carburants' : 'des recharges'}{' '}
          par an:
        </h4>
        <p className="font-bold">
          <span>{energyCostPerYear}</span> €
        </p>
        <h4>Cout au km</h4>
        <p className="font-bold">
          <span>{carCostPerKMAtEnd}</span> €
        </p>
        {checked && (
          <>
            <h4>Valeur résiduelle</h4>
            <p className="font-bold">{carValueAtEnd} €</p>
            <h4>Cout net</h4>
            <p className="font-bold">{carCostAtEnd - carValueAtEnd} €</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultData;
