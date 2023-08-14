import React from "react";
import Layout from "../../Layout/Layout";
import { useTranslation } from "react-i18next";

function Taisykles() {
  const [t, i18n] = useTranslation("global");
  return (
    <Layout>
      <div className="flex-colo gap-8 w-full min-h-screen text-text lg:py-20 py-10 px-6">
        <div className="mx-auto bg-subMain p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-4">{t("rulesFrame.1")}</h1>
          <h2 className="text-xl font-semibold mb-2">{t("rulesFrame.2")}</h2>
          <p className="mb-4">{t("rulesFrame.3")}</p>
          <p className="mb-4">{t("rulesFrame.4")}</p>
          <p className="mb-4">{t("rulesFrame.5")}</p>
          <p className="mb-4">{t("rulesFrame.6")}</p>
          <p className="mb-4">{t("rulesFrame.7")} </p>
          <p className="mb-4">{t("rulesFrame.8")} </p>
          <p className="mb-4">{t("rulesFrame.9")}</p>
          <p className="mb-4">{t("rulesFrame.10")}</p>
          <p className="mb-4">{t("rulesFrame.11")}</p>
          <h2 className="text-xl font-semibold mb-2">{t("rulesFrame.12")}</h2>
          <p className="mb-4">{t("rulesFrame.13")}</p>
          <p className="mb-4">{t("rulesFrame.14")}</p>
          <p className="mb-4">{t("rulesFrame.15")} </p>
          <p className="mb-4">{t("rulesFrame.16")} </p>
          <p className="mb-4">{t("rulesFrame.17")}</p>
          <p className="mb-4">{t("rulesFrame.18")}</p>
          <p className="mb-4">{t("rulesFrame.19")} </p>
          <p className="mb-4">{t("rulesFrame.20")} </p>
          <p className="mb-4">{t("rulesFrame.21")} </p>
        </div>
      </div>
    </Layout>
  );
}

export default Taisykles;
