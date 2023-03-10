import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'csvData');

export const getAllData = async () => {
  const data = [];

  const files = fs.readdirSync(dataDirectory);
  for (const file of files) {
    if (file !== 'DEGRADATION.csv' && file !== 'NOISE.csv') {
      await new Promise((resolve, reject) => {
        fs.createReadStream(`${dataDirectory}/${file}`)
          //by adding the columns option, the first line will be considered as column names
          //The ltrim option is used to trim the whitespace from the data
          .pipe(parse({ delimiter: ';', columns: true, ltrim: true }))
          .on('data', function (row) {
            const testName = file.split('.')[0];
            const carNameLength = row.Car.length;
            const maker = row.Car.split(' ')[0];
            const modelStart = row.Car.indexOf(' ') + 1;
            let modelEnd = row.Car.indexOf(' - ');
            if (modelEnd === -1) {
              modelEnd = carNameLength;
            }
            const model = row.Car.substring(modelStart, modelEnd);
            const modelID =
              maker.toLowerCase() +
              '-' +
              model.split(' ').join('-').toLowerCase();
            const version =
              modelEnd === carNameLength
                ? 'Base'
                : row.Car.substring(modelEnd + 3);

            const versionID = `${modelID}-${version
              .split(' ')
              .join('-')
              .toLowerCase()}`;

            const modelInArrayIndex = data.findIndex(
              (model) => model.id === modelID
            );

            const { Car, ...lightRow } = row;

            if (modelInArrayIndex === -1) {
              const newRow = {
                maker,
                model,
                id: modelID,
                versions: [
                  {
                    version: version,
                    id: versionID,
                    [testName]: [{ ...lightRow }],
                  },
                ],
                // isModel: true,
              };

              data.push(newRow);
            } else if (modelInArrayIndex > -1) {
              if (data[modelInArrayIndex].versions.length === 0) {
                data[modelInArrayIndex].versions.push({
                  version: version,
                  id: versionID,
                  [testName]: [{ ...lightRow }],
                });
              } else {
                const versionInModelIndex = data[
                  modelInArrayIndex
                ].versions.findIndex((version) => version.id === versionID);

                if (versionInModelIndex === -1) {
                  data[modelInArrayIndex].versions.push({
                    version: version,
                    id: versionID,
                    [testName]: [{ ...lightRow }],
                  });
                } else if (versionInModelIndex > -1) {
                  if (
                    data[modelInArrayIndex].versions[
                      versionInModelIndex
                    ].hasOwnProperty(testName)
                  ) {
                    data[modelInArrayIndex].versions[versionInModelIndex][
                      testName
                    ] = [
                      ...data[modelInArrayIndex].versions[versionInModelIndex][
                        testName
                      ],
                      { ...lightRow },
                    ];
                  } else {
                    data[modelInArrayIndex].versions[versionInModelIndex][
                      testName
                    ] = [{ ...lightRow }];
                  }
                }
              }
            }
          })
          .on('error', function (error) {
            reject(error);
          })
          .on('end', function () {
            resolve();
          });
      });
    }
  }

  return data.sort((a, b) => {
    return a.maker.localeCompare(b.maker);
  });
};

export const getAllCarNames = async () => {
  const data = new Set();
  //get files (ie filenames)
  const files = fs.readdirSync(dataDirectory);
  for (const file of files) {
    if (file !== 'DEGRADATION.csv')
      await new Promise((resolve, reject) => {
        fs.createReadStream(`${dataDirectory}/${file}`)
          //The ltrim option is used to trim the whitespace from the data
          .pipe(parse({ delimiter: ';', from_line: 2, ltrim: true }))
          .on('data', function (row) {
            data.add(row[0]);
          })
          .on('error', function (error) {
            reject(error);
          })
          .on('end', function () {
            resolve('success');
          });
      });
  }
  return [...data];
};

export const getAllMakers = async () => {
  const data = new Set();
  //get files (ie filenames)
  const files = fs.readdirSync(dataDirectory);
  for (const file of files) {
    if (file !== 'DEGRADATION.csv' && file !== 'NOISE.csv')
      await new Promise((resolve, reject) => {
        fs.createReadStream(`${dataDirectory}/${file}`)
          //The ltrim option is used to trim the whitespace from the data
          .pipe(parse({ delimiter: ';', from_line: 2, ltrim: true }))
          .on('data', function (row) {
            data.add(row[0].split(' ')[0]);
          })
          .on('error', function (error) {
            reject(error);
          })
          .on('end', function () {
            resolve('success');
          });
      });
  }
  return [...data].sort((a, b) => {
    return a.localeCompare(b);
  });
};
export const getAllTestNames = () => {
  const data = [];
  //get files (ie filenames)
  const fileNames = fs.readdirSync(dataDirectory);
  for (const name of fileNames) {
    if (name !== 'DEGRADATION.csv' && name !== 'NOISE.csv')
      data.push(name.split('.')[0]);
  }
  return data;
};

export const getOneFileData = async (csvName) => {
  const data = [];
  await new Promise((resolve, reject) => {
    fs.createReadStream(`${dataDirectory}/${csvName}.csv`)
      //The ltrim option is used to trim the whitespace from the data
      .pipe(parse({ delimiter: ';', columns: true, ltrim: true }))
      .on('data', function (row) {
        data.push(row);
      })
      .on('error', function (error) {
        reject(error);
      })
      .on('end', function () {
        resolve();
      });
  });
  return data;
};

export const getAllFullTestedVersions = async (testsArray) => {
  const data = await getAllData();
  return data.reduce((acc, car) => {
    const filtered = car.versions.filter((version) => {
      return testsArray.every((test) => version.hasOwnProperty(test));
    });
    if (filtered.length) {
      acc.push({ ...car, versions: filtered });
    }
    return acc;
  }, []);
};

export const getCarsByMaker = async (makerName) => {
  const data = await getAllData();
  return data.reduce((acc, car) => {
    if (car.maker === makerName) {
      acc.push(car);
    }
    return acc;
  }, []);
};
export const getCarsByMakerLight = async (makerName) => {
  const data = await getAllData();
  return data.reduce((acc, car) => {
    if (car.maker === makerName) {
      acc.push(car.model);
    }
    return acc;
  }, []);
};

export const getAllModelsByMaker = async () => {
  const data = await getAllData();
  const newData = {};
  for (const car of data) {
    if (newData[car.maker]) {
      newData[car.maker] = [
        ...newData[car.maker],
        { model: car.model, id: car.id, totalVersions: car.versions.length },
      ];
    } else {
      newData[car.maker] = [
        { model: car.model, id: car.id, totalVersions: car.versions.length },
      ];
    }
  }
  return newData;
};

//for confirmation (same result as getAllMakers)
export const getAllMakersFromParsedData = async () => {
  const data = await getAllData();
  const makers = [];
  for (const car of data) {
    if (makers.indexOf(car.maker) === -1) {
      makers.push(car.maker);
    }
  }
  return makers;
};

export const getAllModelsFromParsedData = async () => {
  const data = await getAllData();
  const modles = [];
  for (const car of data) {
    modles.push(`${car.maker} - ${car.model}`);
  }
  return modles;
};

export const getAllDataLight = async () => {
  const data = await getAllData();
  const lightData = data.map((el) => {
    let { isModel, ...rest } = el;
    return { ...rest, versions: el.versions.length };
  });
  return lightData;
};

export const getAllModelIds = async () => {
  const data = await getAllData();
  return data.map((el) => {
    return {
      params: {
        id: el.id,
      },
    };
  });
};

export const getModelData = async (id) => {
  const data = await getAllData();
  return data.find((el) => el.id === id);
};
