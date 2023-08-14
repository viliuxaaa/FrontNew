import React from "react";
import Layout from "../../Layout/Layout";
import { useTranslation } from "react-i18next";

function Kontaktai() {
  const [t, i18n] = useTranslation("global");
  return (
    <Layout>
      <div className="flex-colo gap-8 w-full min-h-screen text-text lg:py-20 py-10 px-6">
        <div className="p-8 border bg-subMain border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">{t("contactsFrame.1")}</h2>
          <p className="mb-2">{t("contactsFrame.2")}</p>
          <p className="mb-2">{t("contactsFrame.3")}</p>
          <p className="mb-2">{t("contactsFrame.4")}</p>
          <p className="mb-2">{t("contactsFrame.5")}</p>

          <p className="mb-2">{t("contactsFrame.6")}</p>
          <ul className="list-disc ml-6 mb-2">
            <li>{t("contactsFrame.7")}</li>
            <li>{t("contactsFrame.8")}</li>
          </ul>

          <p className="mb-2">{t("contactsFrame.9")}</p>
          <p className="mb-2">{t("contactsFrame.10")}</p>
        </div>
      </div>
    </Layout>
  );
}

export default Kontaktai;
