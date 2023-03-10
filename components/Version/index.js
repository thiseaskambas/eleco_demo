import React, { useState } from 'react';
import VersionsTests from '../VersionTests';

const Version = ({ version, testNames, filters }) => {
  const [display, setDisplay] = useState(false);
  const containsTest = Object.keys(version).some((key) =>
    filters.includes(key)
  );

  if (!containsTest) {
    return null;
  }

  return (
    <div className="pt-2 pb-2">
      <div className="flex items-center gap-x-4">
        <h2
          onClick={() => setDisplay((prev) => !prev)}
          className="hover:cursor-pointer"
        >
          {version.version}
        </h2>
        <button
          onClick={() => setDisplay((prev) => !prev)}
          className={`w-6 h-6 m-0 p-0 ${
            display
              ? "bg-[url('/icons/close-button.svg')] dark:bg-[url('/icons/close-button-dark.svg')]"
              : "bg-[url('/icons/arrow-button.svg')] dark:bg-[url('/icons/arrow-button-dark.svg')]"
          } bg-center bg-contain border-none bg-no-repeat`}
        >
          <span className="sr-only">Test results</span>
        </button>
      </div>
      {display && (
        <ul>
          <VersionsTests version={version} testNames={testNames} />
        </ul>
      )}
    </div>
  );
};

export default Version;
