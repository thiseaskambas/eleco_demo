import Image from 'next/image';

const CarsList = ({ allData }) => {
  const dataList = Object.keys(allData).map((data) => {
    if (allData[data].RANGE && allData[data].ACCELERATION) {
      const { Car, Capacity } =
        allData[data].RANGE.length > 1
          ? allData[data].RANGE[0]
          : allData[data].RANGE;

      const picture = `https://picsum.photos/seed/${data}/600/300`;
      return (
        <div key={Car} className="border rounded shadow mb-4">
          <Image src={picture} alt={data} width={400} height={300} />
          <div className="p-4">
            <h2 className="text-center rounded shadow mb-4">{Car}</h2>

            <ul className="rounded shadow p-4">
              <li className="border-b-2">Capacity: {Capacity} kw/h</li>
              <li className="border-b-2">
                0 - 100: {allData[data].ACCELERATION['0-100']} s
              </li>
              <li className="border-b-2">
                0 - 100 spec: {allData[data].ACCELERATION['0-100 spec']} s
              </li>
              <li className="border-b-2">
                👉 Test vs Spec: {allData[data].ACCELERATION['Test vs spec']} s
              </li>
            </ul>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="columns-3 mx-20">{dataList}</div>
    </div>
  );
};

export default CarsList;
