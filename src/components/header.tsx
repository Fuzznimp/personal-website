import React from "react";

import { LinkedinIcon } from "./Icons/Linkedin";
import { GitHubIcon } from "./Icons/github";
import { MailIcon } from "./Icons/mail";
import { TwitterIcon } from "./Icons/twitter";

export const Header: React.FC = () => {
  return (
    <div className="md:h-screen p-12 bg-contrastCopy flex flex-col justify-between border-r border-secondary">
      <section>
        <h1 className="mb-0 md:my-8 text-center md:text-left lg:vertical-rl md:transform md:rotate-180">
          Anthony Montaigne
        </h1>
        <div className="flex md:block justify-evenly md:mt-40">
          <a href="https://github.com/Fuzznimp" className="block my-12 w-10">
            <GitHubIcon />
          </a>
          <a href="mailto:anthony@montaigne.dev" className="block my-12 w-10">
            <MailIcon />
          </a>
          <a
            href="https://twitter.com/anthomontaigne"
            className="block my-12 w-10"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-montaigne-abb210176/"
            className="block my-12 w-10"
          >
            <LinkedinIcon />
          </a>
        </div>
      </section>
    </div>
  );
};
