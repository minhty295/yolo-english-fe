import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);

  console.log("🌀 useDebounce: Render với value =", debounce);

  useEffect(() => {
    console.log("⏳ useEffect RUN – sẽ debounce sau", delay, "ms");

    const timer = setTimeout(() => {
      console.log("✅ setDebounce:", value);
      setDebounce(value);
    }, delay);

    return () => {
      console.log("🧹 Cleanup – huỷ timeout cũ");
      clearTimeout(timer);
    };
  }, [value, delay]);

  console.log("Con render xong.");

  return debounce;
}
