import { useTranslation } from "react-i18next";

const CategoryA = () => {
    const [t, i18n] = useTranslation("global");
    
    const categoryA = [
        {
            name: t("computerCategoryA.0"),
            search: "",
        },
        
        {
            name: t("computerCategoryA.1"),
            search: "category=a&type=kompiuteriai",
        },
        {
            name: t("computerCategoryA.2"),
            search: "category=a&type=isoriniai_irenginiai",
        },
        {
            name: t("computerCategoryA.3"),
            search: "category=a&type=kompiuteriu_komponentai",
        },
        {
            name: t("computerCategoryA.4"),
            search: "category=a&type=priedai_aksesuarai",
        },
        {
            name: t("computerCategoryA.5"),
            search: "category=a&type=programine_iranga_zaidimai",
        },
        {
            name: t("computerCategoryA.6"),
            search: "category=a&type=tinklo_iranga",
        },
        {
            name: t("computerCategoryA.7"),
            search: "category=a&type=paslaugos_remontas",
        },
        {
            name: t("computerCategoryA.8"),
            search: "category=a&type=konsoles",
        }
    ];

    return categoryA;
};

export default CategoryA;
