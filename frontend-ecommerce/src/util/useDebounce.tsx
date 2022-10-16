import { useState, useEffect } from "react";

export const useDebounce = (state: string | undefined, delay: any) => {
  const [debouncedValue, setDebouncedValue] = useState<string>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(state);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [state ,delay]);

  return debouncedValue;
};
