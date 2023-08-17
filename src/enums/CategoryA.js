import { useTranslation } from "react-i18next";

const CategoryA = () => {
    const [t, i18n] = useTranslation("global");
    
    const categoryA = [
        {
            name: t("mainCat.0"),
            search: "",
        },
        
        {
            name: t("mainCat.1"),
            search: "category=a&type=kompiuteriai",
        },
        {
            name: t("mainCat.2"),
            search: "category=a&type=isoriniai_irenginiai",
        },
        {
            name: t("mainCat.3"),
            search: "category=a&type=kompiuteriu_komponentai",
        },
        {
            name: t("mainCat.4"),
            search: "category=a&type=priedai_aksesuarai",
        },
        {
            name: t("mainCat.5"),
            search: "category=a&type=programine_iranga_zaidimai",
        },
        {
            name: t("mainCat.6"),
            search: "category=a&type=tinklo_iranga",
        },
        {
            name: t("mainCat.7"),
            search: "category=a&type=paslaugos_remontas",
        },
        {
            name: t("mainCat.8"),
            search: "category=a&type=konsoles",
        }
    ];

    return categoryA;
};

export default CategoryA;
