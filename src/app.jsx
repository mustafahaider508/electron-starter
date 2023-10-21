import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./home.jsx"; // Assuming you have a Home component
import About from "./about.jsx";

const root = createRoot(document.body);

root.render(<Home />);
