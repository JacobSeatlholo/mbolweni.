import { useState, useEffect } from "react";

const useScrollDown = () => {
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;
      setShowInput(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowInput]);

  return showInput;
};

export default useScrollDown;
