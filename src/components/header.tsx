import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { GitHubIcon } from "./icons/github";
import { LinkedinIcon } from "./icons/linkedin";
import { MailIcon } from "./icons/mail";
import { TwitterIcon } from "./icons/twitter";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="md:h-screen p-12 bg-contrastCopy flex flex-col justify-between border-r border-secondary">
      <section>
        <Link href="#">
          <a>
            <h1 className="mb-0 md:my-8 text-center md:text-left lg:vertical-rl md:transform md:rotate-180">
              Anthony Montaigne
            </h1>
          </a>
        </Link>
        <div className="flex md:block justify-evenly md:mt-40">
          <Link href="https://github.com/Fuzznimp">
            <a target="_blank" rel="noreferrer" className="block my-12 w-10">
              <GitHubIcon />
            </a>
          </Link>
          <Link href="mailto:anthony@montaigne.dev">
            <a target="_blank" rel="noreferrer" className="block my-12 w-10">
              <MailIcon />
            </a>
          </Link>
          <Link href="https://twitter.com/anthomontaigne">
            <a target="_blank" rel="noreferrer" className="block my-12 w-10">
              <TwitterIcon />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/anthony-montaigne-abb210176/">
            <a target="_blank" rel="noreferrer" className="block my-12 w-10">
              <LinkedinIcon />
            </a>
          </Link>
        </div>
      </section>
      <div className="flex lg:flex-col justify-around">
        <button className="md:mb-8 md:text-left">
          {router.locale === "en" ? "🕶️" : "💡"}
        </button>
        {router.locale === "en" ? (
          <Link href="/fr" locale="fr">
            <a>🇬🇧</a>
          </Link>
        ) : (
          <Link href="/" locale="en">
            <a>🇫🇷</a>
          </Link>
        )}
      </div>
    </div>
  );
};
