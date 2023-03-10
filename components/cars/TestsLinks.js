import Link from 'next/link';
import { useRef, useState } from 'react';

const TestsLinks = ({ stringArr, last }) => {
  const [display, setDisplay] = useState(false);
  const contentRef = useRef();
  let height;
  if (contentRef.current) height = `${contentRef.current.scrollHeight}px`;

  const parseName = (testName) => {
    let nameToDisplay = '';
    switch (testName) {
      case 'acceleration':
        nameToDisplay = 'Accélération';
        break;
      case 'banana':
        nameToDisplay = 'Caisses à bananes';
        break;
      case 'braking':
        nameToDisplay = 'Freins';
        break;
      case 'range':
        nameToDisplay = 'Autonomie';
        break;
      case 'thousand':
        nameToDisplay = '1000km';
        break;
      case 'weight':
        nameToDisplay = 'Poids';
        break;
      default:
        nameToDisplay = testName;
    }
    return nameToDisplay;
  };

  return (
    <section className="flex flex-col items-center">
      <div
        className="flex items-center hover:cursor-pointer  p-3 gap-3 dark:bg-transparent"
        onClick={() => setDisplay((prev) => !prev)}
      >
        <h2 className="">Chercher par test</h2>
        <button
          className={`w-8 h-8 m-0 p-0 ${
            display
              ? "bg-[url('/icons/close-button.svg')] dark:bg-[url('/icons/close-button-dark.svg')]"
              : "bg-[url('/icons/arrow-button.svg')] dark:bg-[url('/icons/arrow-button-dark.svg')]"
          } bg-center bg-contain border-none bg-no-repeat`}
        >
          <span className="sr-only">Chercher par test</span>
        </button>
      </div>

      <div
        ref={contentRef}
        className={`transition-[height] delay-100 overflow-hidden `}
        style={{ height: display ? height : '0px' }}
      >
        <div
          className={`flex flex-wrap gap-2 flex-grow  p-3 pb-8 justify-center ${
            last && 'mb-20'
          } dark:bg-transparent`}
        >
          {stringArr.map((el) => {
            const testName = parseName(el);
            return (
              <Link
                className={`m-0 bg-light-primary-2 text-white px-5 py-2 rounded-lg border-none `}
                key={el}
                href={`/tested-cars/results/${el}`}
              >
                {testName}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestsLinks;
