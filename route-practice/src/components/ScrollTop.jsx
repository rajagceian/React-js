import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 active:scale-95"
      >
        ⬆
      </button>
    )
  );
};

export default ScrollTop;

/*

Page loads
   ↓
useEffect runs once
   ↓
Scroll listener attached
   ↓
User scrolls
   ↓
handleScroll runs
   ↓
Check position
   ↓
setShow(true/false)
   ↓
UI updates

*/