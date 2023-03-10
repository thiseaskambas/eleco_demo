import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoImg from '../../public/icons/logo_lg.png';

const Footer = () => {
  return (
    <footer className="pt-16 pb-4 px-4 font-lato bg-white dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="ml-2 self-start">
            <Image
              alt="logo"
              src={logoImg}
              width="120"
              className="inline-block min-w-[120px] mr-8"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Sitemap
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/calculator" className="hover:underline">
                  Calculateur
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/tested-cars" className="hover:underline">
                  Tests des voitures
                </Link>
              </li>
              <ul>
                <li className="ml-4 mb-4">
                  <Link
                    href="/tested-cars/results/acceleration"
                    className="hover:underline"
                  >
                    &#8226; Accélération
                  </Link>
                </li>
                <li className="ml-4 mb-4">
                  <Link
                    href="/tested-cars/results/banana"
                    className="hover:underline"
                  >
                    &#8226; Caisses à bananes
                  </Link>
                </li>
                <li className="ml-4 mb-4">
                  <Link
                    href="/tested-cars/results/braking"
                    className="hover:underline"
                  >
                    &#8226; Freins
                  </Link>
                </li>
                <li className="ml-4 mb-4">
                  <Link
                    href="/tested-cars/results/range"
                    className="hover:underline"
                  >
                    &#8226; Autonomie
                  </Link>
                </li>
                <li className="ml-4 mb-4">
                  <Link
                    href="/tested-cars/results/thousand"
                    className="hover:underline"
                  >
                    &#8226; 1000km
                  </Link>
                </li>
                <li className="ml-4 mb-4">
                  <Link
                    href="/tested-cars/results/weight"
                    className="hover:underline"
                  >
                    &#8226; Poids
                  </Link>
                </li>
              </ul>
              <li className="mb-4">
                <Link href="/about" className="hover:underline">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Liens & Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.automobile-propre.com/"
                  className="hover:underline"
                >
                  Automobile Propre
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@bjornnyland/featured"
                  className="hover:underline"
                >
                  Bjørn Nyland Youtube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Retrouvez-moi
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/thiseaskambas"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/tkambas/"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            Eleco.dev
          </Link>{' '}
          All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 items-center sm:justify-center sm:mt-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/eleco.dev/"
          >
            <div className="w-8 h-8 bg-[url('/icons/instagram.png')] dark:bg-[url('/icons/instagram_inv.png')] bg-contain bg-center bg-no-repeat">
              <span className="sr-only">Instagram page</span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/tkambas/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <div className="w-8 h-8 bg-[url('/icons/linkedin.png')] dark:bg-[url('/icons/linkedin_inv.png')] bg-contain bg-center bg-no-repeat">
              <span className="sr-only">LinkedIn page</span>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/thiseaskambas"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <div className="w-8 h-8 bg-[url('/icons/github.png')] dark:bg-[url('/icons/github_inv.png')] bg-contain bg-center bg-no-repeat">
              <span className="sr-only">GitHub page</span>
            </div>
          </a>
        </div>
      </div>
      <hr className="mt-6 border-gray-200 sm:mx-auto dark:border-gray-700 mb-28" />
    </footer>
  );
};

export default Footer;
