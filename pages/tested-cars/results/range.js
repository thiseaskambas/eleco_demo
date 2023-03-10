import { useEffect, useState } from 'react';
import { getOneFileData } from '../../../lib/csvParser';
import { Range } from '../../../components/TestTables';

export async function getStaticProps() {
  const data = await getOneFileData('range');
  const sorted = [...data].sort((a, b) => a.Car.localeCompare(b.Car));

  return {
    props: {
      sorted,
    },
  };
}

const RangeResults = ({ sorted }) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(sorted);

  const filterData = (string, arr) => {
    setQuery(() => string);
    setFiltered(() =>
      arr.filter((el) =>
        el.Car.toLowerCase()
          .split('-')
          .join(' ')
          .includes(string.toLowerCase().replaceAll('-', ' '))
      )
    );
  };

  const sortData = (sortBy) => {
    switch (sortBy) {
      case 'range80':
        setFiltered((prev) =>
          [...prev].sort(
            (a, b) =>
              parseFloat(b.Range75.replace(',', '.') || '0') -
              parseFloat(a.Range75.replace(',', '.') || '0')
          )
        );
        break;
      case 'range100':
        setFiltered((prev) =>
          [...prev].sort(
            (a, b) =>
              parseFloat(b.Range100.replace(',', '.') || '0') -
              parseFloat(a.Range100.replace(',', '.') || '0')
          )
        );
        break;
      case 'chargeTime':
        setFiltered((prev) =>
          [...prev].sort(
            (a, b) =>
              parseFloat(a.ChargingTime75.replace(',', '.') || '0') -
              parseFloat(b.ChargingTime75.replace(',', '.') || '0')
          )
        );
        break;
      case 'conso':
        setFiltered((prev) =>
          [...prev].sort(
            (a, b) =>
              parseFloat(a.WhPerKm.replace(',', '.') || '0') -
              parseFloat(b.WhPerKm.replace(',', '.') || '0')
          )
        );
        break;
      case 'alpha':
        setFiltered((prev) =>
          [...prev].sort((a, b) => a.Car.localeCompare(b.Car))
        );
        break;
      default:
        setFiltered(() => sorted);
    }
  };

  return (
    <>
      <form className="mx-auto max-w-4xl p-8 flex justify-center gap-2 dark:bg-transparent items-center flex-wrap">
        <label htmlFor="query" className="font-semibold">
          Filtrer :{' '}
        </label>
        <input
          className="w-32"
          id="query"
          value={query}
          onChange={(e) => filterData(e.target.value, sorted)}
          maxLength="20"
          autoComplete="off"
        />

        <div className="flex justify-center gap-2 dark:bg-transparent items-center flex-wrap">
          <div className="w-full text-center sm:w-fit sm:text-left">
            Trier par:
          </div>
          <button
            type="button"
            className="bg-white/30 text-white hover:bg-white/10 active:bg-black/10 transition-colors"
            onClick={() => sortData('range100')}
          >
            Autonomie (100%)
          </button>
          <button
            type="button"
            className="bg-white/30 text-white hover:bg-white/10 active:bg-black/10 transition-colors"
            onClick={() => sortData('range80')}
          >
            Autonomie (80%)
          </button>
          <button
            type="button"
            className="bg-white/30 text-white hover:bg-white/10 active:bg-black/10 transition-colors"
            onClick={() => sortData('chargeTime')}
          >
            Temps de charge
          </button>
          <button
            type="button"
            className="bg-white/30 text-white hover:bg-white/10 active:bg-black/10 transition-colors"
            onClick={() => sortData('conso')}
          >
            Consomation
          </button>
          <button
            type="button"
            className="bg-white/30 text-white hover:bg-white/10 active:bg-black/10 transition-colors"
            onClick={() => sortData('alpha')}
          >
            Ordre alphabétique
          </button>
        </div>
      </form>
      <div>
        <Range
          tests={filtered}
          fullTest={true}
          className="lg:rounded-xl overflow-x-auto overflow-y-hidden lg:border-2 bg-white dark:bg-light-primary-2 max-w-5xl mx-auto dark:border-black mb-32"
        />
      </div>
    </>
  );
};

export default RangeResults;
