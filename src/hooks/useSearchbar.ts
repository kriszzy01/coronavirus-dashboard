import { useEffect, useState } from "react";

export const useSearchbar = (
  initialValue: string,
  ref: React.RefObject<HTMLDivElement>
) => {
  const [value, setValue] = useState(initialValue);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setValue("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [value, setValue] as const;
};
