const ResultMsgNeutral = ({ worthIt, durationStudied }) => {
  return (
    <div className=" col-span-2 border-2  rounded-xl bg-white text-center overflow-hidden  dark:bg-light-primary-2">
      <h3 className="font-bold border-b p-2 bg-light-primary-2 text-white  dark:bg-black">
        Résultat <span className="text-light-primary-4">neutre... 🤷‍♀️</span>
      </h3>
      <div className="p-4">
        <p>
          La difference de cout entre les deux véhicules n&apos;est pas
          importnate, vous pouvez acheter le véhicule éléctrique mais cela sera{' '}
          <b>indifferent</b> financierement.
        </p>
      </div>
    </div>
  );
};

export default ResultMsgNeutral;
