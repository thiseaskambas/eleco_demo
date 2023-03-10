import React, { useEffect, useState } from 'react';

const TableHeader = ({ imageSrc, info, imageDarkSrc }) => {
  const [clicked, setClicked] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const clickHandler = () => {
    clearTimeout(timeoutId);
    setClicked((prev) => !prev);
    const newTimeoutId = setTimeout(() => {
      setClicked(() => false);
    }, 3000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const lightImage = `url(${imageSrc})`;
  const darkImage = `url(${imageDarkSrc || imageSrc})`;

  return (
    <div onClick={clickHandler}>
      {clicked ? (
        <div>{info}</div>
      ) : (
        <div className="group relative inline-block">
          <button
            style={{
              '--light-image': lightImage,
              '--dark-image': darkImage,
            }}
            className="w-11 h-11 border-none rounded-none p-0 bg-center bg-contain bg-no-repeat mx-auto bg-[image:var(--light-image)] dark:bg-[image:var(--dark-image)]"
          />
          <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition bg-light-primary-2 dark:bg-slate-200 dark:text-black p-4 rounded-md text-white absolute left-1/2 transform -translate-x-1/2 top-full z-50 font-light">
            {info}
          </span>
        </div>
      )}
    </div>
  );
};

export default TableHeader;
