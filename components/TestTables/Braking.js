import { useState } from 'react';

import TableHeader from '../TableHeader';

const brakeTimeImg = '/headers/brake_time.png';
const brakeTimeDarkImg = '/headers/brake_time_dark.png';
const meterImg = '/headers/meter.png';
const roadImg = '/headers/road.png';
const tiresImg = '/headers/tires.png';
const tempImg = '/headers/temp.png';
const seasonImg = '/headers/season.png';
const weightImg = '/headers/weight.png';
const carImg = '/headers/car_full.png';

const Braking = ({ tests, className, fullTest }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [btnTxt, setBtnTxt] = useState('détails');

  const clickHandler = () => {
    if (!showDetails && !showMoreDetails) {
      setShowDetails(true);
      setBtnTxt('+ de détails');
    } else if (showDetails && !showMoreDetails) {
      setShowMoreDetails(true);
      setBtnTxt('- de détails');
    } else if (showDetails && showMoreDetails) {
      setShowDetails(false);
      setShowMoreDetails(false);
      setBtnTxt('détails');
    }
  };

  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2 p-3">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-3 text-left flex items-center gap-x-4 dark:bg-black">
            Freins
            <button
              className="font-light hover:bg-white/25"
              onClick={clickHandler}
            >
              {btnTxt}
            </button>
          </h3>
        </caption>
        <thead>
          <tr>
            {fullTest && (
              <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
                <TableHeader info="Voiture" imageSrc={carImg} />
              </th>
            )}
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="100 à 0 km/h (secondes)"
                imageSrc={brakeTimeImg}
                imageDarkSrc={brakeTimeDarkImg}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Distance (mètres)" imageSrc={meterImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Surface" imageSrc={roadImg} />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Total (kg)" imageSrc={weightImg} />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Température" imageSrc={tempImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Saison" imageSrc={seasonImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Pneux" imageSrc={tiresImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Roue arrière
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Roue avant
            </th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr
                key={i}
                className="odd:bg-light-primary-0  even:text-black even:bg-light-primary-4 text-white dark:even:bg-dark-primary-1  dark:odd:bg-dark-primary-mid dark:text-white rounded-3xl my-5 p-5 grid grid-cols-2 sm:table-row"
              >
                {fullTest && (
                  <>
                    <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                      <TableHeader info="Voiture" imageSrc={carImg} />
                    </th>
                    <td
                      data-th="Voiture"
                      className="block my-2 font-extrabold   before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                    >
                      {test.Car}
                    </td>
                  </>
                )}
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="100 à 0 km/h (secondes)"
                    imageSrc={brakeTimeImg}
                    imageDarkSrc={brakeTimeDarkImg}
                  />
                </th>
                <td
                  data-th="100 à 0 km/h (secondes)"
                  className="block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Secs100to0KmPerH}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Distance (mètres)" imageSrc={meterImg} />
                </th>
                <td
                  data-th="Distance (mètres)"
                  className="block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Distance}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Surface" imageSrc={roadImg} />
                </th>
                <td
                  data-th="Surface"
                  className="block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Surface}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Poids" imageSrc={weightImg} />
                </th>
                <td
                  data-th="Poids"
                  className={`${
                    showDetails
                      ? 'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Weight}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Température (°C)" imageSrc={tempImg} />
                </th>
                <td
                  data-th="Température"
                  className={`${
                    showDetails
                      ? 'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Temp}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Saison" imageSrc={seasonImg} />
                </th>
                <td
                  data-th="Saison"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Season}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Pneux" imageSrc={tiresImg} />
                </th>
                <td
                  data-th="Pneux"
                  className="block max-w-full break-words my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Tires}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden'
                      : 'hidden'
                  }`}
                >
                  Roue arrière
                </th>
                <td
                  data-th="Roue arrière"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.WheelRear}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden'
                      : 'hidden'
                  }`}
                >
                  Roue avant
                </th>
                <td
                  data-th="Roue avant"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.WheelFront}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Braking;
