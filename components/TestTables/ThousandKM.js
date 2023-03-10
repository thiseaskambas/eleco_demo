import Image from 'next/image';
import { useState } from 'react';
import Modal from '../Modal';
import TableHeader from '../TableHeader';
import { Youtube } from '../Youtube';

const durationImg = '/headers/duration.png';
const consumptionImg = '/headers/consumption.png';
const kmhImg = '/headers/kmh.png';
const tempImg = '/headers/temp.png';
const carImg = '/headers/car_full.png';
const youtubeImg = '/headers/youtube.png';
const youtubeDarkImg = '/headers/youtube_dark.png';
const calendarImg = '/headers/calendar.png';

const ThousandKM = ({ tests, className, fullTest }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [embedId, setEmbedId] = useState('');

  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2 p-3">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-3 text-left dark:bg-black">
            1000km
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
              <TableHeader info="Durée" imageSrc={durationImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Km/h" imageSrc={kmhImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="kWh/100km" imageSrc={consumptionImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Température" imageSrc={tempImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Date" imageSrc={calendarImg} />
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
                className="odd:bg-light-primary-0  even:text-black even:bg-light-primary-4 text-white dark:even:bg-dark-primary-1  dark:odd:bg-dark-primary-mid dark:text-white rounded-3xl my-5 py-5 grid grid-cols-2 sm:table-row"
              >
                {fullTest && (
                  <>
                    <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                      <TableHeader info="Voiture" imageSrc={carImg} />
                    </th>
                    <td
                      data-th="Voiture"
                      className="block my-2 font-extrabold  sm:table-cell sm:p-2 sm:rounded-lg sm:font-semibold"
                    >
                      {test.Car}
                    </td>
                  </>
                )}
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Durée" imageSrc={durationImg} />
                </th>
                <td
                  data-th="Durée"
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Time}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Km/h" imageSrc={kmhImg} />
                </th>
                <td
                  data-th="Km/h"
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.kmPerH}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="kWh/100km" imageSrc={consumptionImg} />
                </th>
                <td
                  data-th="KWh/km"
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {(Number(test.WhPerKm.replace(',', '.')) / 10).toFixed(1)}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Température" imageSrc={tempImg} />
                </th>
                <td
                  data-th="Température"
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Temp}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Date" imageSrc={calendarImg} />
                </th>
                <td
                  data-th="Date"
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Date}
                </td>
                <th className="font-extrabold flex items-center justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Vidéo" imageSrc={youtubeDarkImg} />
                </th>
                <td
                  data-th="Vidéo"
                  className="block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
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

export default ThousandKM;
