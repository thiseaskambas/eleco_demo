import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import logoImg from '../../public/icons/logo_lg.png';
import darkImg from '../../public/icons/night.png';
import lightImg from '../../public/icons/light.png';

const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-red-500 transition ease transform duration-300`;

const Nav = () => {
  const [mounted, setMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`${
        navOpen ? 'h-screen' : 'h-14'
      } flex flex-col items-center bg-black text-white sm:justify-center sm:h-14 sm:flex-row`}
    >
      <Link href="/" className="ml-2 self-start">
        <Image
          alt="logo"
          src={logoImg}
          width="120"
          className="inline-block min-w-[120px] mr-8"
        />
      </Link>
      <ul
        className={`flex flex-col ${
          navOpen ? 'flex' : 'hidden sm:flex'
        } mt-6 w-full sm:mt-0 sm:flex-row items-center mx-auto sm:justify-center sm:gap-12 sm:flex-grow m-0`}
      >
        <li className="py-6 sm:py-0 w-full text-center active:bg-slate-700">
          <Link
            onClick={() => setNavOpen(false)}
            href="/tested-cars"
            className="sm:hover:border-b-2 font-bold sm:font-normal hover:font-bold transition-all whitespace-nowrap"
          >
            Voitures testées
          </Link>
        </li>
        <li className="py-6 sm:py-0 w-full text-center active:bg-slate-700">
          <Link
            onClick={() => setNavOpen(false)}
            href="/calculator"
            className="sm:hover:border-b-2 font-bold sm:font-normal hover:font-bold transition-all whitespace-nowrap"
          >
            Calculateur
          </Link>
        </li>
        <li className="py-6 sm:py-0 w-full text-center active:bg-slate-700">
          <Link
            onClick={() => setNavOpen(false)}
            href="/about"
            className="sm:hover:border-b-2 font-bold sm:font-normal hover:font-bold transition-all whitespace-nowrap"
          >
            À propos
          </Link>
        </li>
        <li className="py-6 sm:py-0 w-full justify-center gap-3 flex flex-col items-center sm:hidden">
          <label
            className="font-bold text-white"
            onClick={() => {
              setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            }}
          >
            {' '}
            DARK MODE: {currentTheme === 'dark' ? 'ON' : 'OFF'}
          </label>
          <label className="relative inline-flex items-center mb-5 cursor-pointer">
            <button
              className="w-8 h-8 p-1 bg-white/50"
              onClick={() => {
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
              }}
            >
              {currentTheme === 'dark' ? (
                <Image alt="light-mode" src={lightImg} />
              ) : (
                <Image alt="dark-mode" src={darkImg} />
              )}
            </button>
          </label>
        </li>
      </ul>
      <div className="w-32 hidden sm:flex justify-end">
        <button
          className="w-8 h-8 p-1 bg-white dark:bg-black/50 mr-4"
          onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        >
          {currentTheme === 'dark' ? (
            <Image alt="light-mode" src={lightImg} />
          ) : (
            <Image alt="dark-mode" src={darkImg} />
          )}
        </button>
      </div>
      <div className="absolute right-0 top-1 w-12 h-12 flex justify-center items-center sm:hidden">
        <button
          aria-label="Open navigation menu"
          onClick={() => setNavOpen((prev) => !prev)}
          className="p-0 border-none rounded-none flex flex-col h-12 w-12 justify-center items-center group"
        >
          <div
            className={`${genericHamburgerLine} ${
              navOpen
                ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              navOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              navOpen
                ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
