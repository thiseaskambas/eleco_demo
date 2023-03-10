const MakerBtn = ({ maker, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`m-0 bg-light-primary-2 text-white px-5 py-2 rounded-lg border-none `}
    >
      {maker}
    </button>
  );
};

export default MakerBtn;
