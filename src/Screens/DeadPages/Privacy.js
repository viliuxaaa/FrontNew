import React from "react";
import Layout from "../../Layout/Layout";
import { useTranslation } from "react-i18next";

function Politika() {
  const [t, i18n] = useTranslation("global");
  return (
    <Layout>
      <div className="flex-colo gap-8 w-full min-h-screen text-text lg:py-20 py-10 px-6">
        <div className="p-8 border bg-subMain border-gray-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">{t("privacyFrame.1")}</h2>
          <p>{t("privacyFrame.2")}</p>
          <p>{t("privacyFrame.3")}</p>

          <h3 className="text-md font-semibold mt-4">{t("privacyFrame.4")}</h3>
          <p className="mb-2">{t("privacyFrame.5")}</p>
          <p className="mb-2">{t("privacyFrame.6")}</p>
          <p className="mb-2">{t("privacyFrame.7")}</p>
          <p className="mb-2">{t("privacyFrame.8")}</p>
          <p className="mb-2">{t("privacyFrame.9")}</p>

          {/* Additional sections and content can be added similarly */}
        </div>
      </div>
    </Layout>
  );
}

export default Politika;
