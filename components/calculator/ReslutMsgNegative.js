const ResultMsgNegative = ({ worthIt, durationStudied }) => {
  return (
    <div className=" col-span-2 border-2  rounded-xl bg-white text-center overflow-hidden  dark:bg-light-primary-2">
      <h3 className="font-bold border-b p-2 bg-light-primary-2 text-white  dark:bg-black">
        Mauvaise <span className="text-light-primary-4">nouvelle... 🥲</span>
      </h3>
      <div className="p-4 ">
        <p>
          Le véhicule éléctrique vous coutera{' '}
          <b>{Math.abs(worthIt)}€ plus cher</b> que le véhicule thermique au
          bout de la periode étudiée ({durationStudied} ans)!
        </p>
      </div>
    </div>
  );
};

export default ResultMsgNegative;
