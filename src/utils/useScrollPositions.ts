import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window?.pageYOffset;
    setSrollPosition(position ? position : 0);
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
