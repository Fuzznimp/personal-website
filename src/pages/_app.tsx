import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";

import * as locales from "@content/locales";
import { Layout } from "@src/components/layout";

import "tailwindcss/tailwind.css";
import "@src/design-system/global-style.css";

const App: React.FC<AppProps> = ({ Component, pageProps, children }) => {
  const router = useRouter();

  if (!router.locale) {
    return <>{children}</>;
  }

  const localeCopy = (locales as Record<string, unknown>)[router.locale];
  const messages = (localeCopy as Record<string, unknown>)[router.pathname] as
    | Record<string, string>
    | Record<string, MessageFormatElement[]>
    | undefined;

  return (
    <IntlProvider
      locale={router.locale}
      defaultLocale={router.defaultLocale}
      messages={messages}
      onError={() => null}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
};

export default App;
