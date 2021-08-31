import React from "react";

import { useTranslation } from "react-i18next";

export function YoComponent() {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage("fr-CA");
  };

  return (
    <div>
      <button onClick={changeLang}>CHANGE LANG</button>
      <h1>{t("YoComponent.title")}</h1>
    </div>
  );
}
