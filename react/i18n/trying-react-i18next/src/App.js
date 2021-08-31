import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { YoComponent } from "./YoComponent";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages((err, ret) => {
      if (err) {
        console.log(err);
        return null;
      }
    });
  }, []);

  return (
    <div className="App">
      <Suspense fallback="loading">
        <YoComponent />
      </Suspense>
    </div>
  );
}

export default App;
