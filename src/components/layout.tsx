import React from "react";

import { Header } from "./header";

export const Layout: React.FC = ({ children }) => {
  return (
    <main className="w-full h-screen md:flex md:content-center md:items-center">
      <Header />
      <div className="w-full md:w-2/3 h-auto md:h-screen m-auto p-8 md:p-32 md:pt-96 overflow-auto">
        {children}
      </div>
    </main>
  );
};
