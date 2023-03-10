import { getAllDataLight, getAllTestNames } from '../../lib/csvParser';

import MakerSection from '../../components/cars/MakerSection';
import ModelsSection from '../../components/cars/ModelsSection';
import CustomHead from '../../components/customHead';

import TestsLinks from '../../components/cars/TestsLinks';
import TestInfo from '../../components/TestInfo';

export async function getStaticProps() {
  const allDataLight = await getAllDataLight();
  const testNames = getAllTestNames();

  return {
    props: {
      allDataLight,
      testNames,
    },
  };
}

const Cars = ({ allDataLight, testNames }) => {
  const dataByMaker = allDataLight.reduce((acc, cur) => {
    const foundIndex = acc.findIndex((el) => el?.maker === cur.maker);
    if (foundIndex !== -1) {
      const { maker, ...rest } = cur;
      acc[foundIndex].models.push({ ...rest });
    } else {
      const { maker, ...rest } = cur;
      acc.push({ maker: cur.maker, models: [rest] });
    }
    return acc.sort((a, b) => {
      return a.maker.localeCompare(b.maker);
    });
  }, []);

  return (
    <>
      <CustomHead
        title="Tests de voitures électriques"
        description="Tous les résultats que vous pouvez trouver sont fournis par Bjørn Nyland, YouTubeur professionnel depuis 2018, qui teste pratiquement toutes les voitures électriques qui existent."
      />
      <div className="min-h-screenNoNav flex flex-col items-center max-w-4xl mx-auto">
        <div className="flex flex-col gap-8 mt-[1vh] sm:mt-[10vh]">
          <div className="bg-white dark:bg-light-primary-2 rounded-none sm:rounded-2xl overflow-hidden shadow-lg">
            <h1
              aria-label="Tous les tests"
              className="text-xl px-8 py-4 text-white bg-black font-poppins font-extrabold text-center"
            >
              Tous les tests
            </h1>
            <p className="text-lg leading-7 p-8">
              Tous les résultats que vous pouvez trouver sont fournis par{' '}
              <strong>
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@bjornnyland/featured"
                  className="hover:underline"
                >
                  Bjørn Nyland
                </a>
              </strong>
              , YouTubeur professionnel depuis 2018, qui teste pratiquement
              toutes les voitures électriques qui existent.
            </p>
          </div>
          <TestInfo />
          <div className="flex flex-col shadow-lg rounded-none sm:rounded-2xl mb-32">
            <MakerSection dataByMaker={dataByMaker} />
            <TestsLinks stringArr={testNames} />
            <ModelsSection allDataLight={allDataLight} last={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
