import { useEffect, useRef, useState } from "react";

const useTimedClassOnCondition = (
  value: number,
  condition: (prevValue: number) => string | undefined,
  delay: number
) => {
  const prevValueRef = useRef<number | null>(value);
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    if (prevValueRef.current !== null) {
      const newClassName = condition(prevValueRef.current);

      if (newClassName) {
        setClassName(newClassName);
      }
    }

    prevValueRef.current = value;

    const timeoutId = setTimeout(() => {
      setClassName("");
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [condition, delay, value]);

  return className;
};

export default useTimedClassOnCondition;
