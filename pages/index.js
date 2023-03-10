import Link from 'next/link';
import CustomHead from '../components/customHead';

import { getAllDataLight } from '../lib/csvParser';

export async function getStaticProps() {
  const allDataLight = await getAllDataLight();

  return {
    props: {
      allDataLight,
    },
  };
}

const Home = ({ allDataLight }) => {
  return (
    <>
      <CustomHead
        title="Voitures électiques & électrompatibilité | eleco.dev"
        description="Êtes vous prêt(e)s pour une transition à électrique? Est-il rentable de vendre votre voiture thermique pour passer à l'électique? Quelle voiture vous convient? Accédez au calculateur et à tous les tests efféctués par Bjørn Nyland."
      />
      <div className="flex flex-col  min-h-screen bg-[url('../public/images/tesla_light_xs.webp')] sm:bg-[url('../public/images/tesla_light_xl.webp')] bg-cover bg-center bg-no-repeat flex-grow dark:bg-[url('../public/images/tesla_night_xs.webp')] sm:dark:bg-[url('../public/images/tesla_night_xl.webp')]">
        <div className="flex flex-col flex-grow gap-12 mt-[5vh]  sm:mt-[10vh] px-6">
          <div className="flex flex-col  items-center">
            <h2 className="text-4xl mb-3 font-extrabold">
              ÊTES-VOUS ÉLECTRO-COMPATIBLE ?
            </h2>
            <Link
              className="bg-gradient-to-r from-light-primary-start to-light-primary-end px-6 py-3 block w-fit text-center font-bold text-white dark:bg-gradient-to-r dark:from-dark-primary-0 dark:via-dark-primary-1 dark:to-dark-primary-2 hover:brightness-110 transition-all"
              href={'/calculator'}
            >
              Accédez au calculateur.
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl mb-3 font-extrabold">
              {allDataLight.length} VOITURES ELECTRIQUES TESTÈES
            </h2>
            <Link
              className="bg-gradient-to-r from-light-primary-start to-light-primary-end px-6 py-3 block w-fit text-center font-bold text-white dark:bg-gradient-to-r dark:from-dark-primary-0 dark:via-dark-primary-1 dark:to-dark-primary-2 hover:brightness-110 transition-all"
              href={'/tested-cars'}
            >
              Explorer les résultats.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
