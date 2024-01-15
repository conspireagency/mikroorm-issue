import { AppProvider as PolarisProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Link from "next/link";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <PolarisProvider i18n={translations}>
        <Component {...pageProps} />
      </PolarisProvider>
    </>
  );
}
