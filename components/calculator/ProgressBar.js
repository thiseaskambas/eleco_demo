import React from 'react';

const ProgressBar = ({ stepState }) => {
  const barClassName = (() => {
    switch (stepState) {
      case 6:
        return 'w-0';
      case 5:
        return 'w-1/6';
      case 4:
        return 'w-2/6';
      case 3:
        return 'w-3/6';
      case 2:
        return 'w-4/6';
      case 1:
        return 'w-5/6';
      case 0:
        return 'w-full';
      default:
        return 'w-full';
    }
  })();

  return (
    <div
      id="progress-ctn"
      className="h-4 min-w-full bg-gradient-to-r from-light-primary-8 to-light-primary-success"
    >
      <div
        id="progress-fill"
        className={`bg-light-primary-end h-full ${barClassName} ml-auto dark:bg-dark-primary-mid`}
      />
    </div>
  );
};

export default ProgressBar;
