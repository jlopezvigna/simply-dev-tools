import { useEffect, useState } from "react";

export function useIsMounted(): boolean {
  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
