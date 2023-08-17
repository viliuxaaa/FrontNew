import { useTranslation } from "react-i18next";

const OrderBy = () => {
    const [t, i18n] = useTranslation("global");
    
    const orderBy = [
        {
            name: t("orderBy.0"),
            search: "",
        },
        
        {
            name: t("orderBy.1"),
            search: "createdAt=true",
        },
        {
            name: t("orderBy.2"),
            search: "updatedAt=true",
        },
        {
            name: t("orderBy.3"),
            search: "priceIsAscending=true",
        },
        {
            name: t("orderBy.4"),
            search: "priceIsAscending=false",
        }
    ];

    return orderBy;
};

export default OrderBy;