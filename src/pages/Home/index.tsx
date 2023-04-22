import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="max-w-[1020px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hamdaoui Idriss - Home page</title>
        <meta
          name="description"
          content="Home page - Welcome to my portfolio, I'm an Ad expert, visit my webpage to know more about me!"
        />
        <meta name="title" content="Hamdaoui Idriss - Home page" />
        <meta name="og:title" content="Hamdaoui Idriss - Home page" />
        <meta
          name="og:description"
          content="Home page - Welcome to my portfolio, I'm an Ad expert, visit my webpage to know more about me!"
        />
      </Helmet>
      <div>
        <h4 className="font-magilio text-6xl text-blackish mb-2">
          H<span className="italic">ey there</span> 👋
        </h4>
        <h1 className="font-magilio text-8xl text-blackish">
          I'm Idriss Hamdaoui ✨
        </h1>
      </div>
      <div className="font-poppins my-4 text-md leading-8">
        <p className="my-1">
          I'm a seasoned ad expert with over five years of experience in the
          industry.
        </p>
        <p className="my-1">
          With a keen eye for detail and a passion for crafting effective
          campaigns.
        </p>
        <p className="my-1">
          I became an expert in creating and managing successful ads on
          platforms like Google Ads, Facebook Ads, and more...
        </p>
        <p className="mt-8 italic font-light mb-2">Learn more about me on</p>
        <div className="flex flex-wrap gap-4 text-xl">
          <a
            href="https://www.instagram.com/"
            className="cursor-pointer hover:text-primary duration-200 ease-in-out"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/"
            className="cursor-pointer hover:text-primary duration-200 ease-in-out"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="cursor-pointer hover:text-primary duration-200 ease-in-out"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
