import type { AppProps } from "next/app";
import React from "react";

import { Layout } from "@src/components/layout";

import "tailwindcss/tailwind.css";
import "@src/design-system/global-style.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
