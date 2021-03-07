import { useEffect } from "react";

export const useNoScroll = (dependencies: any[]) => {
  useEffect(() => {
    //Stop scrolling on body if the first item on the provided dependencies is true
    if (dependencies[0]) {
      document.querySelector("body")?.setAttribute("data-scroll", "");
    }

    return () => {
      document.querySelector("body")?.removeAttribute("data-scroll");
    };
  }, [dependencies]);
};
