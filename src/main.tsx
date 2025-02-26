import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
// import EffectComponent from "./components/EffectComponent.tsx";
// import Logo from "./components/Logo.tsx";
// import PropsComponent from "./components/PropsComponent.tsx";
// import Props from "./components/Props.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Logo /> */}
    {/* <PropsComponent
      id={1}
      name="Muhammad"
      email="muhammad@oro24.com"
      username="Oro"
    /> */}
    {/* <EffectComponent /> */}
  </React.StrictMode>
);
