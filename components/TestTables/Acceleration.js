import Image from 'next/image';
import React, { useState } from 'react';
import TableHeader from '../TableHeader';
import Modal from '../Modal';
import { Youtube } from '../Youtube';

const accImg = '/headers/acc.png';
const specImg = '/headers/spec.png';
const driveImg = '/headers/drive.png';
const weightImg = '/headers/weight.png';
const horseImg = '/headers/horse-power.png';
const versusImg = '/headers/versus.png';
const calendarImg = '/headers/calendar.png';
const tiresImg = '/headers/tires.png';
const carImg = '/headers/car_full.png';
const youtubeImg = '/headers/youtube.png';
const youtubeDarkImg = '/headers/youtube_dark.png';

const Acceleration = ({ tests, className, fullTest }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [btnTxt, setBtnTxt] = useState('détails');
  const [modalOpen, setModalOpen] = useState(false);
  const [embedId, setEmbedId] = useState('');

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
          <h3 className="p-3 font-bold bg-light-primary-2 text-white text-left flex items-center gap-x-4 dark:bg-black">
            Accélération
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
              <TableHeader info="Motorisation" imageSrc={driveImg} />
            </th>

            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Accélération (secondes)" imageSrc={accImg} />
            </th>

            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Accélération spec (secondes)"
                imageSrc={specImg}
              />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="test VS spec" imageSrc={versusImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Date" imageSrc={calendarImg} />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Puissance (chevaux)" imageSrc={horseImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Pneux" imageSrc={tiresImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Poids (kg)" imageSrc={weightImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Roue arrière
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Roue avant
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Vidéo" imageSrc={youtubeImg} />
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
                      className="block my-2 font-extrabold sm:table-cell sm:p-2 sm:rounded-lg "
                    >
                      {test.Car}
                    </td>
                  </>
                )}
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Motorisation" imageSrc={driveImg} />
                </th>
                <td
                  data-th="Motorisation"
                  className="block my-2 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Drive}
                </td>

                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="0-100km/h (secondes)" imageSrc={accImg} />
                </th>
                <td
                  data-th="0-100 (secondes)"
                  className="block my-2 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.ZeroTo100}
                </td>

                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="0-100 spec. (secondes)"
                    imageSrc={specImg}
                  />
                </th>
                <td
                  data-th="0-100 Spec (secondes)"
                  className="block my-2 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.ZeroTo100spec}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="test VS spec" imageSrc={versusImg} />
                </th>
                <td
                  data-th="test VS spec"
                  className={`${
                    showDetails
                      ? 'block my-2 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.TestVsSpec}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Date" imageSrc={calendarImg} />
                </th>
                <td
                  data-th="Date"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-2 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Date}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader
                    info="Puissance (cheveaux)"
                    imageSrc={horseImg}
                  />
                </th>
                <td
                  data-th="Hp"
                  className={`${
                    showDetails
                      ? 'block my-2 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Hp}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Pneux" imageSrc={tiresImg} />
                </th>
                <td
                  data-th="Pneux"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block max-w-full break-words my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Tires}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Poids (kg)" imageSrc={weightImg} />
                </th>
                <td
                  data-th="Poids (kg)"
                  className={[
                    'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg ',
                  ]}
                >
                  {test.Weight}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden'
                      : 'hidden'
                  }`}
                >
                  Roue arrière
                </th>
                <td
                  data-th="Roue arrière"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-2 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.WheelRear}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden'
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
                <th className="font-extrabold flex justify-center items-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Vidéo" imageSrc={youtubeDarkImg} />
                </th>
                <td
                  data-th="Vidéo"
                  className="block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg"
                >
                  {test.Youtube ? (
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setEmbedId(test.Youtube);
                      }}
                      className="flex relative p-0 overflow-hidden mx-auto hover:brightness-150 transition-all"
                    >
                      <span className="sr-only">watch video</span>
                      <Image
                        width="120"
                        height="90"
                        alt=""
                        src={`https://img.youtube.com/vi/${test.Youtube}/mqdefault.jpg`}
                      />
                    </button>
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        open={modalOpen}
        handleClose={() => {
          setModalOpen(false);
          setEmbedId('');
        }}
      >
        <div className="w-[100vw] lg:w-[512px] relative h-0 pb-[56.25%] bg-black">
          <Youtube embedId={embedId} />
        </div>
      </Modal>
    </div>
  );
};

export default Acceleration;
