import { useRef, useEffect, useState } from "react";

const TestComponent = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(100);

  useEffect(() => {
    if (divRef.current) {
      setContainerWidth(divRef.current.offsetWidth);
    }
  }, []);

  return <div ref={divRef}>Hello, World!{(containerWidth / 3) * 0.8}</div>;
};

export default TestComponent;
