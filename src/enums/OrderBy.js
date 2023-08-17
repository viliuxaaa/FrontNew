import { useTranslation } from "react-i18next";

const OrderBy = () => {
    const [t, i18n] = useTranslation("global");
    
    const orderBy = [
        {
            name: "---",
            search: "",
        },
        
        {
            name: "Naujausi viršuje",
            search: "createdAt=true",
        },
        {
            name: "Atnaujinti viršuje",
            search: "updatedAt=true",
        },
        {
            name: "Pigiausi viršuje",
            search: "priceIsAscending=true",
        },
        {
            name: "Brangiausi viršuje",
            search: "priceIsAscending=false",
        }
    ];

    return orderBy;
};

export default OrderBy;