import React from 'react';

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
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
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/kthiseas/"
      >
        <div className="w-8 h-8 bg-[url('/icons/instagram.png')] dark:bg-[url('/icons/instagram_inv.png')] bg-contain bg-center bg-no-repeat">
          <span className="sr-only">Instagram page</span>
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
