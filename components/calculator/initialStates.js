export const initialState = {
  energyData: {
    chargingPriceHC: '',
    chargingPriceHP: '',
    gasPrice: '',
  },
  usageData: {
    workHomeDistance: '',
    dailyCommutes: '',
    daysWorkedPerY: '',
    weekendKM: '',
    otherKMPerW: '',
  },
  usageExpected: {
    totalKMPerY: '',
  },
  carDataICE: {
    purchaseCost: '',
    insurance: '',
    maintenance: '',
    consumption: '',
  },
  carDataEV: {
    purchaseCost: '',
    consumption: '',
    insurance: '',
    maintenance: '',
    ecoBonus: '',
  },
  durationStudied: {
    yearsStudied: '',
  },
};
export const initialStateDev = {
  energyData: {
    chargingPriceHC: '0.18',
    chargingPriceHP: '0.20',
    gasPrice: '1.9',
  },
  usageData: {
    workHomeDistance: '',
    dailyCommutes: '',
    daysWorkedPerY: '',
    weekendKM: '',
    otherKMPerW: '',
  },
  usageExpected: {
    totalKMPerY: '13000',
  },
  carDataICE: {
    purchaseCost: '12000',
    insurance: '700',
    maintenance: '1000',
    consumption: '5.2',
  },
  carDataEV: {
    purchaseCost: '52000',
    consumption: '0.15',
    insurance: '700',
    maintenance: '400',
    ecoBonus: '5000',
  },
  durationStudied: {
    yearsStudied: '8',
  },
};

export const initialStateErrors = {
  energyData: {
    chargingPriceHC: '',
    chargingPriceHP: '',
    gasPrice: '',
  },
  usageData: {
    workHomeDistance: '',
    dailyCommutes: '',
    daysWorkedPerY: '',
    weekendKM: '',
    otherKMPerW: '',
  },
  usageExpected: {
    totalKMPerY: '',
  },
  carDataICE: {
    purchaseCost: '',
    insurance: '',
    maintenance: '',
    consumption: '',
  },
  carDataEV: {
    purchaseCost: '',
    consumption: '',
    insurance: '',
    maintenance: '',
    ecoBonus: '',
  },
  durationStudied: {
    yearsStudied: '',
  },
};

export const initialResultsState = {
  carEVCostAtEndOfPeriod: '',
  carEVValueAtEndOfPeriod: '',
  carICECostAtEndOfPeriod: '',
  carICEValueAtEndOfPeriod: '',
  evKMCost: '',
  iceKMCost: '',
  gasIceVSevCostPerY: '',
  totalKMPerY: '',
  carICECostPerKmAtEnd: '',
  carEVCostPerKmAtEnd: '',
};
