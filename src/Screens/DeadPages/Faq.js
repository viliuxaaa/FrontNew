import React from "react";
import Layout from "../../Layout/Layout";
import { useTranslation } from "react-i18next";

function Duk() {
  const [t, i18n] = useTranslation("global");

  return (
    <Layout>
      <div className="flex-colo gap-8 w-full min-h-screen text-text lg:py-20 py-10 px-6">
        <div className="bg-subMain p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">{t("FAQFrame.1")}</h2>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{t("FAQFrame.2")}</h3>
            <p className="mb-4">{t("FAQFrame.3")}</p>
            <p className="mb-4">{t("FAQFrame.4")}</p>
            <p className="mb-4">{t("FAQFrame.5")}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{t("FAQFrame.6")}</h3>
            <p className="mb-4">{t("FAQFrame.7")}</p>
            <p className="mb-4">{t("FAQFrame.8")}</p>
            <p className="mb-4">{t("FAQFrame.9")}</p>
            <p className="mb-4">{t("FAQFrame.10")}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{t("FAQFrame.11")}</h3>
            <p className="mb-4">{t("FAQFrame.12")}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{t("FAQFrame.13")}</h3>
            <p className="mb-4">{t("FAQFrame.14")}</p>
            <p className="mb-4">{t("FAQFrame.15")}</p>
            <p className="mb-4">{t("FAQFrame.16")}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{t("FAQFrame.17")}</h3>
            <p className="mb-4">{t("FAQFrame.18")}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">{t("FAQFrame.19")}</h3>
            <p className="mb-4">{t("FAQFrame.20")}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Duk;
