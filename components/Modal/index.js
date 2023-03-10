import Backdrop from '../Backdrop';
import ClientOnlyPortal from '../ClientOnlyPortal';
const Modal = ({ handleClose, children, open }) => {
  if (!open) return null;
  const yOffset = window.pageYOffset;

  return (
    <ClientOnlyPortal selector="#modal">
      <Backdrop onClick={handleClose} />
      <div
        style={{ top: `calc(40vh + ${yOffset}px)` }}
        className={`absolute translate-y-[-50%] left-[50%]  translate-x-[-50%] min-w-[290px]  z-20`}
      >
        {children}
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
