import React from "react";
import { useIntl } from "react-intl";

import { Header } from "./header";

export const Layout: React.FC = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <main className="w-full h-screen md:flex md:content-center md:items-center">
      <Header />
      <div className="w-full md:w-2/3 h-auto md:h-screen m-auto p-8 md:p-32 md:pt-96 overflow-auto">
        <p>{formatMessage({ id: "presentation" })}</p>
        <p className="mb-16 lg:mb-32">{formatMessage({ id: "wip" })}</p>
        {children}
      </div>
    </main>
  );
};
