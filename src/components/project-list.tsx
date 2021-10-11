import React from "react";

const PROJECTS_DATA = [
  {
    id: "Connect.Account",
    description:
      "Connect.Account is an open source web application, which aims at providing all the business logic to handle Connect identities, profile and addresses data, and a default frontend for users to use.",
    href: "https://github.com/fewlinesco/connect-account",
  },
  {
    id: "Connect.Profile",
    description:
      "Connect Profile is a web REST API that can store and retrieve profile information about users. It is being developed with the underlying idea to bring an additional compatibility layer with OpenID to projects using Fewlines Connect.",
    href: "https://github.com/fewlinesco/connect-profile",
  },
  {
    id: "Connect.Client",
    description:
      "Client is part of the Fewlines Connect-js SDK. It mainly provides an abstraction for the OAuth2 flow, and a secure way to verify JWT for HS256 and RS256 algorithms (signed and/or encrypted).",
    href: "https://github.com/fewlinesco/connect-js/tree/main/client",
  },
  {
    id: "Connect.Management",
    description:
      "Client is part of the Fewlines Connect-js SDK. It mainly provides an abstraction for the OAuth2 flow, and a secure way to verify JWT for HS256 and RS256 algorithms (signed and/or encrypted).",
    href: "https://github.com/fewlinesco/connect-js/tree/main/management",
  },
  {
    id: "FWL SDK",
    description:
      "FWL (pronounced 'fuel') are Fewlines Web Libraries. They are an ensemble of packages that allow us to build backend services in Typescript.",
    href: "https://github.com/fewlinesco/node-web-libraries",
  },
  {
    id: "eslint-config",
    description: "",
    href: "https://github.com/fewlinesco/eslint-config",
  },
];

const ProjectList: React.FC = () => {
  return (
    <ul className="relative">
      {PROJECTS_DATA.map(({ id, href, description }, index) => {
        return (
          <ProjectListItem
            href={href}
            index={index}
            key={id}
            description={description}
          >
            {id}
          </ProjectListItem>
        );
      })}
    </ul>
  );
};

const ProjectListItem: React.FC<{
  href: string;
  index: number;
  description: string;
}> = ({ href, index, description, children }) => {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  return (
    <>
      <li
        className="md:py-4 flex items-center"
        key="id"
        onMouseOver={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <p className="mr-12 font-robotoMono font-medium text-lightGray leading-loose">{`00${index}`}</p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-robotoMono font-medium text-xl leading-loose"
        >
          {children}
        </a>
      </li>
      {isShown ? (
        <p className="lg:absolute -top-4 left-1/3 mb-4 p-10">{description}</p>
      ) : null}
    </>
  );
};

export { ProjectList };
