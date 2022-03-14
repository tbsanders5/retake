import React, { useContext } from "react";
import Content from "../components/Content";
import Nav from "../components/Nav";
import ThemeContext from "../components/ThemeContext";

function Home() {
  const themeFromContext = useContext(ThemeContext);
  return (
    <div>
      <Nav theme={themeFromContext} />
      <div style={{ textAlign: "center" }}>
        <h1>Multiple Context Providers!</h1>
      </div>
      <div style={{ margin: "0 auto" }}>
        <Content />
      </div>
    </div>
  );
}

export default Home;
