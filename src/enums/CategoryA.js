import { useTranslation } from "react-i18next";

const CategoryA = () => {
    const [t, i18n] = useTranslation("global");
    
    const categoryA = [
        {
            name: t("Jokia"),
            search: "",
        },
        {
            name: t("Kompiuteriai"),
            search: "category=a&type=kompiuteriai",
        },
        {
            name: t("Išoriniai Įrenginiai"),
            search: "category=a&type=isoriniai_irenginiai",
        },
        {
            name: t("Kompiuterių komponentai"),
            search: "category=a&type=kompiuteriu_komponentai",
        },
        {
            name: t("Priedai, aksesuarai"),
            search: "category=a&type=priedai_aksesuarai",
        },
        {
            name: t("Programinė įranga, žaidimai"),
            search: "category=a&type=programine_iranga_zaidimai",
        },
        {
            name: t("Tinklo įranga"),
            search: "category=a&type=tinklo_iranga",
        },
        {
            name: t("Paslaugos, remontas"),
            search: "category=a&type=paslaugos_remontas",
        },
        {
            name: t("Konsolės"),
            search: "category=a&type=konsoles",
        }
    ];

    return categoryA;
};

export default CategoryA;
