import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import About from "./about.jsx";

export default function Home() {
  const root = createRoot(document.body);
  const [val, setVal] = useState(0);
  const handleRoute = () => {
    root.render(<About />);
  };
  return (
    <>
      <div>Hellooooo from React</div>
      <button onClick={() => setVal(val + 1)}>+</button>
      <p>{val}</p>
      <button onClick={() => setVal(val - 1)}>-</button>

      <button onClick={handleRoute}>adddddd</button>
    </>
  );
}
