const Backdrop = ({ onClick }) => {
  return (
    <div
      className="fixed left-0 top-0 h-screen max-h-screen w-full bg-light-primary-2/50 z-20 backdrop-blur-sm"
      onClick={onClick}
    />
  );
};

export default Backdrop;
