import { useTranslation } from "react-i18next";

const Categories = () => {
    
    const [t, i18n] = useTranslation("global");
    const categories = {    
        category1 : {
            name: t("computerCategoryA.1"),
            search: "category=a&type=kompiuteriai",
            subCat: [
                {
                    name: t("computerCategoryB.1"),
                    search: "category=b&type=nesiojami_kompiuteriai"
                },
                {
                    name: t("computerCategoryB.2"),
                    search: "category=b&type=stacionarus_kompiuteriai"
                },
                {
                    name: t("computerCategoryB.3"),
                    search: "category=b&type=serveriai"
                },
                {
                    name: t("computerCategoryB.4"),
                    search: "category=b&type=plansetiniai_kompiuteriai"
                },
                {
                    name: t("computerCategoryB.5"),
                    search: "category=b&type=zaidimu_kompiuteriai"
                },
                {
                    name: t("computerCategoryB.6"),
                    search: "category=b&type=elektronines_skaitykles"
                },
                {
                    name: t("computerCategoryB.7"),
                    search: "category=b&type=kompiuteriai_kita"
                },
            ]
        },
        category2 : {
            name: t("computerCategoryA.2"),
            search: "category=a&type=isoriniai_irenginiai",
            subCat: [
                {
                    name: t("externalDevCategoryB.1"),
                    search: "category=b&type=monitoriai"
                },
                {
                    name: t("externalDevCategoryB.2"),
                    search: "category=b&type=projektoriai_skeneriai_spausdintuvai"
                },
                {
                    name: t("externalDevCategoryB.3"),
                    search: "category=b&type=ausines_garso_koloneles"
                },
                {
                    name: t("externalDevCategoryB.4"),
                    search: "category=b&type=daugiafunkciniai_irenginiai"
                },
                {
                    name: t("externalDevCategoryB.5"),
                    search: "category=b&type=klaviaturos_peles_web_kameros"
                },
                {
                    name: t("externalDevCategoryB.6"),
                    search: "category=b&type=zaidimu_priedai"
                },
                {
                    name: t("externalDevCategoryB.7"),
                    search: "category=b&type=isoriniai_irenginiai_kita"
                }
            ]
        },
        category3 : {
            name: t("computerCategoryA.3"),
            search: "category=a&type=kompiuteriu_komponentai",
            subCat: [
                {
                    name: t("computerComponentCategoryB.1"),
                    search: "category=b&type=nesiojamiems_kompiuteriams"
                },
                {
                    name: t("computerComponentCategoryB.2"),
                    search: "category=b&type=stacionariems_kompiuteriams"
                },
                {
                    name: t("computerComponentCategoryB.3"),
                    search: "category=b&type=kompiuteriu_komponentai_kita"
                }
            ]
        },
        category4 : {
            name: t("computerCategoryA.4"),
            search: "category=a&type=priedai_aksesuarai",
            subCat: [
                {
                    name: t("accessoriesCategoryB.1"),
                    search: "category=b&type=ikrovikliai_baterijos_akumuliatoriai"
                },
                {
                    name: t("accessoriesCategoryB.2"),
                    search: "category=b&type=adapteriai_kabeliai_jungtys"
                },
                {
                    name: t("accessoriesCategoryB.3"),
                    search: "category=b&type=atminties_korteles_usb_atmintines"
                },
                {
                    name: t("accessoriesCategoryB.4"),
                    search: "category=b&type=hdd_dezutes_ir_isoriniai_hdd"
                },
                {
                    name: t("accessoriesCategoryB.5"),
                    search: "category=b&type=krepsiai_kompiuteriams"
                },
                {
                    name: t("accessoriesCategoryB.6"),
                    search: "category=b&type=ups"
                },
                {
                    name: t("accessoriesCategoryB.7"),
                    search: "category=b&type=priedai_aksesuarai_kita"
                }
            ]
        },
        category5 :  {
            name: t("computerCategoryA.5"),
            search: "category=a&type=programine_iranga_zaidimai",
            subCat: [
                {
                    name: t("softwareAndGamesCategoryB.1"),
                    search: "category=b&type=kompiuteriniai_zaidimai"
                },
                {
                    name: t("softwareAndGamesCategoryB.2"),
                    search: "category=b&type=apple_programine_iranga"
                },
                {
                    name: t("softwareAndGamesCategoryB.3"),
                    search: "category=b&type=biuro_programine_iranga"
                },
                {
                    name: t("softwareAndGamesCategoryB.4"),
                    search: "category=b&type=mokomosios_programos"
                },
                {
                    name: t("softwareAndGamesCategoryB.5"),
                    search: "category=b&type=operacines_sistemos"
                },
                {
                    name: t("softwareAndGamesCategoryB.6"),
                    search: "category=b&type=technine_programine_ranga"
                },
                {
                    name: t("softwareAndGamesCategoryB.7"),
                    search: "category=b&type=programine_iranga_zaidimai_kita"
                }
            ]
        },
        category6 : {
            name: t("computerCategoryA.6"),
            search: "category=a&type=tinklo_iranga",
            subCat: [
                {
                    name: t("networkStuffCategoryB.1"),
                    search: "category=b&type=belaidzio_tinklo_iranga"
                },
                {
                    name: t("networkStuffCategoryB.2"),
                    search: "category=b&type=hub"
                },
                {
                    name: t("networkStuffCategoryB.3"),
                    search: "category=b&type=marsrutizatoriai"
                },
                {
                    name: t("networkStuffCategoryB.4"),
                    search: "category=b&type=modemai"
                },
                {
                    name: t("networkStuffCategoryB.5"),
                    search: "category=b&type=switch"
                },
                {
                    name: t("networkStuffCategoryB.6"),
                    search: "category=b&type=aksesuarai_kabeliai"
                },
                {
                    name: t("networkStuffCategoryB.7"),
                    search: "category=b&type=tinklo_iranga_kita"
                }
            ]
        },
        category7 : {
            name: t("computerCategoryA.7"),
            search: "category=a&type=paslaugos_remontas",
            subCat: [
                {
                    name: t("technicalServicesCategoryB.1"),
                    search: "category=b&type=spausdinimas_3d"
                },
                {
                    name: t("technicalServicesCategoryB.2"),
                    search: "category=b&type=remontas"
                },
                {
                    name: t("technicalServicesCategoryB.3"),
                    search: "category=b&type=spausdinimas_kopijavimas"
                },
                {
                    name: t("technicalServicesCategoryB.4"),
                    search: "category=b&type=supirkimas"
                },
                {
                    name: t("technicalServicesCategoryB.5"),
                    search: "category=b&type=paslaugos_remontas_kita"
                }
            ]
        },
        category8 : {
            name: t("computerCategoryA.8"),
            search: "category=a&type=konsoles",
            subCat: [
                {
                    name: t("consolesCategoryB.1"),
                    search: "category=b&type=sony"
                },
                {
                    name: t("consolesCategoryB.2"),
                    search: "category=b&type=microsoft"
                },
                {
                    name: t("consolesCategoryB.3"),
                    search: "category=b&type=nintendo"
                },
                {
                    name: t("consolesCategoryB.4"),
                    search: "category=b&type=sega"
                },
                {
                    name: t("consolesCategoryB.5"),
                    search: "category=b&type=priedai_dalys"
                },
                {
                    name: t("consolesCategoryB.6"),
                    search: "category=b&type=paslaugos"
                },
                {
                    name: t("consolesCategoryB.7"),
                    search: "category=b&type=kita"
                }
            ]
        }
    };
    return categories
}
  
export default Categories