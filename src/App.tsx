import { useState } from "react";
import "./App.css";
import { Navigation } from "./navigation/navigation";
import { ContentPanel } from "./content-panel/content-panel";
import { Footer } from "./footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <ContentPanel />
      <Footer />
    </>
  );
}

export default App;
