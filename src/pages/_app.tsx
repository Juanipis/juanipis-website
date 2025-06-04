import { ThemeProvider } from "next-themes";
import {
  CssLibPreferenceProvider,
  useCssLibPreference,
} from "../../components/CssLibPreference";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Favicon } from "../../components/Favicon";
import { useEffect } from "react";
import { Theme } from "@radix-ui/themes";
import Navbar from "../../components/ui/navbar/navbar";
import FloatingActionButton from "../../components/ui/floatingActionButton/floatingActionButton";
import PageTransition from "../../components/ui/pageTransition/pageTransition";
import AOS from 'aos';

function Pages({ Component, pageProps }: AppProps) {
  const { accentColor } = useCssLibPreference();

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accentColor);
  }, [accentColor]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Theme
      // @ts-ignore
      accentColor={accentColor}
      grayColor="sand"
      radius="large"
      scaling="95%"
      className="flex flex-col h-screen"
    >
      <Favicon />
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <FloatingActionButton />
    </Theme>
  );
}

function App(props: AppProps) {
  return (
    <CssLibPreferenceProvider>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: "light-theme", dark: "dark-theme" }}
        defaultTheme="light-theme"
      >
        <Pages {...props} />
      </ThemeProvider>
    </CssLibPreferenceProvider>
  );
}

export default App;
