import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function Footer() {

    const [t, i18n] = useTranslation("global");

    return (
        <footer className="bg-main py-4 shadow-md border-black">
            <div className="container mx-auto px-10">
                <div className="sm:flex sm:items-center sm:justify-between">
                <a
                    href="/"
                    className="flex items-center mb-4 sm:mb-0"
                >
                    <img src="/images/logo.png" alt="logo" className="w-full object-contain h-12" /><br />
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <p className="text-text">
                        {t("footerFrame.footerWorkingHours")}
                    </p>
                    </li>
                    <li>
                    <p className="text-text pl-6">
                    {t("footerFrame.footerHelp")}
                    </p>
                    </li>
                </ul>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                    <a href="/duk" className="mr-4 hover:underline text-text md:mr-6 ">
                    {t("footerFrame.footerFAQ")}
                    </a>
                    </li>
                    <li>
                    <a href="/taisykles" className="mr-4 hover:underline text-text md:mr-6">
                    {t("footerFrame.footerRules")}
                    </a>
                    </li>
                    <li>
                    <a href="/politika" className="mr-4 hover:underline text-text md:mr-6 ">
                    {t("footerFrame.footerPrivacy")}
                    </a>
                    </li>
                    <li>
                    <a href="/kontaktai" className="hover:underline text-text">
                    {t("footerFrame.footerContacts")}
                    </a>
                    </li>
                </ul>
                </div>
                <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-6 text-text" />
                <span className="block text-sm text-text sm:text-center dark:text-gray-800 ">
               2023-2024{" "} © {" "}
                <a href="/" className="hover:underline text-text">
                UAB „Aštuonios rankos“
                </a>
                </span>
            </div>
            </footer>

    )
}

export default Footer
