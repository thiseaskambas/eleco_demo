// const energyData = {
//   chargingPriceHC: '', //EUR
//   chargingPriceHP: '', //EUR
//   gasPrice: '', //EUR/lt
// };

// const usageData = {
//   workHomeDistance: '', //km
//   dailyCommutes: '', //number
//   daysWorkedPerY: '', //number
//   weekendKM: '', //km
//   otherKMPerW: '', //km
// };

// const usageExpected = {
//   totalKMPerY: '', //km
// };

// const carDataICE = {
//   purchaseCost: '', //EUR
//   insurance: '', //EUR
//   maintenance: '', //EUR
//   consumption: '', //lt/100km
// };
// const carDataEV = {
//   consumption: '', //kWh/100km
//   purchaseCost: '', //EUR
//   insurance: '', //EUR
//   maintenance: '', //EUR
//   ecoBonus: '', //EUR
// };

//const durationStudied = {
// yearsStudied: '' //years
// }

const carDepreciation = [20, 15, 10, 10, 7, 6];

const calculator = ({
  energyData,
  usageData,
  usageExpected,
  carDataICE,
  carDataEV,
  durationStudied,
}) => {
  const totalKMPerY =
    usageExpected.totalKMPerY ||
    usageData.workHomeDistance *
      usageData.dailyCommutes *
      usageData.daysWorkedPerY +
      usageData.weekendKM * 52 +
      usageData.otherKMPerW * 52; // km

  const evConsumptionPerY = Number(
    ((totalKMPerY / 100) * carDataEV.consumption).toFixed(2)
  ); //kWh

  const chargeEVCostPerY = energyData.chargingPriceHC
    ? Number(
        (
          evConsumptionPerY *
          (0.5 * energyData.chargingPriceHP + energyData.chargingPriceHC * 0.5)
        ).toFixed(2)
      )
    : Number((evConsumptionPerY * energyData.chargingPriceHP).toFixed(2)); //EUR

  const evKMCost = Number(
    (
      ((0.5 * energyData.chargingPriceHP + 0.5 * energyData.chargingPriceHC) *
        carDataEV.consumption) /
      100
    ).toFixed(2)
  ); //EUR

  const gasICECostPerY = Number(
    (
      ((energyData.gasPrice * carDataICE.consumption) / 100) *
      totalKMPerY
    ).toFixed(2)
  ); //EUR
  const iceKMCost = Number(
    ((carDataICE.consumption / 100) * energyData.gasPrice).toFixed(2)
  );

  const gasIceVSevCostPerY = Number(
    (gasICECostPerY - chargeEVCostPerY).toFixed(0)
  );

  const carEVCostAtEndOfPeriod = Number(
    (
      carDataEV.purchaseCost +
      (carDataEV.insurance + carDataEV.maintenance + chargeEVCostPerY) *
        durationStudied.yearsStudied -
      (carDataEV.ecoBonus || 0)
    ).toFixed(0)
  );

  const carEVValueAtEndOfPeriod = (() => {
    const purchaseCost = carDataEV.purchaseCost;
    let currPrice = carDataEV.purchaseCost;

    for (let i = 0; i < durationStudied.yearsStudied; i++) {
      if (carDepreciation[i]) {
        currPrice = currPrice - (purchaseCost * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (purchaseCost * 6) / 100;
      }
    }
    return parseInt(currPrice);
  })();

  const carICEValueAtEndOfPeriod = (() => {
    const purchaseCost = carDataICE.purchaseCost;
    let currPrice = carDataICE.purchaseCost;
    for (let i = 0; i < durationStudied.yearsStudied; i++) {
      if (carDepreciation[i]) {
        currPrice = currPrice - (purchaseCost * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (purchaseCost * 6) / 100;
      }
    }
    return parseInt(currPrice);
  })();

  const carICECostAtEndOfPeriod = Number(
    (
      carDataICE.purchaseCost +
      (carDataICE.insurance + carDataICE.maintenance + gasICECostPerY) *
        durationStudied.yearsStudied
    ).toFixed(0)
  );

  const carICECostPerKmAtEnd = Number(
    (
      carICECostAtEndOfPeriod /
      (totalKMPerY * durationStudied.yearsStudied)
    ).toFixed(2)
  );
  const carEVCostPerKmAtEnd = Number(
    (
      carEVCostAtEndOfPeriod /
      (totalKMPerY * durationStudied.yearsStudied)
    ).toFixed(2)
  );

  return {
    gasIceVSevCostPerY,
    gasICECostPerY,
    chargeEVCostPerY,
    carEVCostAtEndOfPeriod,
    carICECostAtEndOfPeriod,
    carEVValueAtEndOfPeriod,
    carICEValueAtEndOfPeriod,
    totalKMPerY,
    evKMCost,
    iceKMCost,
    carICECostPerKmAtEnd,
    carEVCostPerKmAtEnd,
  };
};

export default calculator;
