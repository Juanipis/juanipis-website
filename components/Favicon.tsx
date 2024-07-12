import React, { useEffect } from "react";
import Head from "next/head";
import { useCssLibPreference } from "./CssLibPreference";

export function Favicon() {
  const { accentColor } = useCssLibPreference();

  useEffect(() => {
    // Function to dynamically change the favicon
    const changeFavicon = (iconHref:string) => {
      const link = document.createElement('link');
      const oldLink = document.getElementById('dynamic-favicon');
      link.id = 'dynamic-favicon';
      link.rel = 'icon';
      link.href = iconHref;
      if (oldLink) {
        document.head.removeChild(oldLink);
      }
      document.head.appendChild(link);
    };

    // Determine which favicon to use based on accentColor
    if (accentColor === "crimson") {
      changeFavicon('/favicon-dark.ico');
    } else {
      changeFavicon('/favicon-light.ico');
    }
  }, [accentColor]); // Re-run effect when accentColor changes

  // No need to return anything from the component, as favicon is set dynamically
  return null;
}
