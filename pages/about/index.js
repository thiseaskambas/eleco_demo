import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import CustomHead from '../../components/customHead';
import SocialLinks from './SocialLinks';

const About = () => {
  return (
    <>
      <Script
        src="https://static.addtoany.com/menu/page.js"
        strategy="afterInteractive"
      />
      <CustomHead
        title="À propos | eleco.dev"
        description="Je m'appelle Thésée Kambas, je suis développeur web autodidacte et j'ai créé se site pour vous aider à comprendre si il est avantageux de passer à une voiture électique."
      />
      <div className="min-h-screenNoNav flex flex-col items-center max-w-4xl mx-auto">
        <div className="flex flex-col gap-8 mt-[1vh] sm:mt-[5vh]">
          <div className="bg-white dark:bg-light-primary-2 rounded-none sm:rounded-2xl overflow-hidden shadow-lg">
            <h1
              aria-label="Design & développment : KAMBAS Thésée"
              className="text-xl px-2 sm:px-8 py-4 text-white bg-black font-poppins font-extrabold text-center"
            >
              Design & développment
            </h1>
            <div className="flex flex-col px-2 sm:px-8 py-4 sm:grid sm:grid-cols-[1fr_3fr] gap-4">
              <div className="flex items-start my-8 sm:my-0 gap-4">
                <div className="felx">
                  <div className="bg-[url('/images/thesee.webp')] w-40 h-40 rounded-full bg-center bg-cover" />
                </div>
                <div className="flex flex-col flex-grow gap-2 sm:hidden">
                  <h2 className="text-4xl font-bold">
                    <span className=" text-light-primary-4">Kambas</span> Thésée
                  </h2>
                  <SocialLinks />
                  <div>Full stack web dev</div>
                </div>
              </div>

              <div className="hidden sm:flex flex-col flex-grow gap-2 ">
                <h2 className="text-4xl font-bold">
                  <span className=" text-light-primary-4">Kambas</span> Thésée
                </h2>
                <SocialLinks />
                <div>Full stack web dev</div>
              </div>
              <div className="text-lg leading-7 col-span-2">
                <div className="mb-8 border-none p-4 rounded-lg bg-slate-300 text-black">
                  <h3 className="font-bold">Développeur autodidacte</h3>
                  <p>
                    J&apos;ai suivi le cours{' '}
                    <a
                      className="underline font-bold text-blue-800 "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0"
                    >
                      CS5O de Harvard
                    </a>
                    ,{' '}
                    <a
                      className="underline font-bold text-blue-800 "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.theodinproject.com/"
                    >
                      The Odin Project{' '}
                    </a>{' '}
                    (Full Stack Javascript) et{' '}
                    <a
                      className="underline font-bold text-blue-800 "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://fullstackopen.com/en/"
                    >
                      Full Stack Open
                    </a>{' '}
                    de l&apos;université d&apos;Helsinki.
                  </p>
                </div>
                <div className="my-8 border-none p-4 rounded-lg bg-slate-300 text-black hidden">
                  <h3 className="font-bold ">eleco.dev</h3>
                  <p>
                    J&apos;ai créé ce site de A à Z avec{' '}
                    <span className="inline-block font-bold">
                      Next.js | React.js
                    </span>{' '}
                    et{' '}
                    <span className="inline-block font-bold">
                      Tailwind CSS.
                    </span>
                  </p>
                  <p>
                    Pour les photos des voitures j&apos;utilise{' '}
                    <span className="font-bold">l&apos;API</span> imagin.studio
                    et pour certaines animations{' '}
                    <span className="font-bold">Framer Motion.</span>
                  </p>
                </div>
                <div className="my-8 border-none p-4 rounded-lg bg-slate-300 text-black">
                  <h3 className="font-bold">Comment m&apos;aider</h3>
                  <p>
                    🚀 Je cherche mon prochain challenge professionnel et je
                    souhaite integrer une équipe dynamique en tant que
                    développeur front ou full stack.
                  </p>
                  <p className="font-bold my-2 italic">
                    Si mon profil peut vous interesser, n&apos;hésitez pas à me
                    contacter!
                  </p>
                </div>
                <div className="my-8 border-none p-4 rounded-lg bg-slate-300 text-black">
                  <p>
                    ⭐️ Si le site vous a plu, vous pouvez m&apos;offrir un café
                    ! Cela m&apos;aidera à continuer de financer ce projet et
                    d&apos;en faire des nouveaux!
                  </p>
                  <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_top"
                    className="mt-3"
                  >
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="KSF29AST98RRJ"
                    />
                    <div className="flex w-32 h-8 mx-auto">
                      <input
                        type="image"
                        className="bg-slate-300 dark:bg-slate-300"
                        src="https://pics.paypal.com/00/s/MzI1NGYzZDctM2YxMS00NDA4LWI2NGItZDc4MzU5NTU1YzMw/file.PNG"
                        border="0"
                        name="submit"
                        title="PayPal - The safer, easier way to pay online!"
                        alt="Bouton Faites un don avec PayPal"
                      />
                    </div>
                    <Image
                      alt=""
                      border="0"
                      src="https://www.paypal.com/fr_FR/i/scr/pixel.gif"
                      width="1"
                      height="1"
                      className="bg-transparent"
                    />
                  </form>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <p className="text-slate-500">
                    Partagez eleco.dev via le réseau de votre choix:
                  </p>
                  <div
                    className="a2a_kit a2a_kit_size_32 a2a_default_style"
                    data-a2a-url="https://www.eleco.dev"
                    data-a2a-title="eleco.dev"
                  >
                    <a
                      className="a2a_dd"
                      href="https://www.addtoany.com/share"
                    ></a>
                    <a className="a2a_button_linkedin"></a>
                    <a className="a2a_button_twitter"></a>
                    <a className="a2a_button_email"></a>
                    <a className="a2a_button_facebook_messenger"></a>
                    <a className="a2a_button_facebook"></a>
                    <a className="a2a_button_whatsapp"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
