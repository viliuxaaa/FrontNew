import { useTranslation } from "react-i18next";




const categories = {
    
    category1 : {
        name: "Kompiuteriai",
        search: "category=a&type=kompiuteriai",
        subCat: [
            {
                name: "Nešiojami Kompiuteriai",
                search: "category=b&type=nesiojami_kompiuteriai"
            },
            {
                name: "Stacionarūs Kompiuteriai",
                search: "category=b&type=stacionarus_kompiuteriai"
            },
            {
                name: "Serveriai",
                search: "category=b&type=serveriai"
            },
            {
                name: "Planšetiniai Kompiuteriai",
                search: "category=b&type=plansetiniai_kompiuteriai"
            },
            {
                name: "Žaidimų Kompiuteriai",
                search: "category=b&type=zaidimu_kompiuteriai"
            },
            {
                name: "Elektroninės Skaityklės",
                search: "category=b&type=elektronines_skaitykles"
            },
            {
                name: "Kita",
                search: "category=b&type=kompiuteriai_kita"
            },
        ]
    },
    category2 : {
        name: "Išoriniai Įrenginiai",
        search: "category=a&type=isoriniai_irenginiai",
        subCat: [
            {
                name: "Monitoriai",
                search: "category=b&type=monitoriai"
            },
            {
                name: "Projektoriai, skeneriai ir spausdintuvai",
                search: "category=b&type=projektoriai_skeneriai_spausdintuvai"
            },
            {
                name: "Ausinės ir garso kolonėlės",
                search: "category=b&type=ausines_garso_koloneles"
            },
            {
                name: "Daugiafunkciniai įrenginiai",
                search: "category=b&type=daugiafunkciniai_irenginiai"
            },
            {
                name: "Klaviatūros, pelės ir Web kameros",
                search: "category=b&type=klaviaturos_peles_web_kameros"
            },
            {
                name: "Žaidimų Priedai",
                search: "category=b&type=zaidimu_priedai"
            },
            {
                name: "Kita",
                search: "category=b&type=isoriniai_irenginiai_kita"
            }
        ]
    },
    category3 : {
        name: "Kompiuterių komponentai",
        search: "category=a&type=kompiuteriu_komponentai",
        subCat: [
            {
                name: "Nešiojamiems Kompiuteriams",
                search: "category=b&type=nesiojamiems_kompiuteriams"
            },
            {
                name: "Stacionariems Kompiuteriams",
                search: "category=b&type=stacionariems_kompiuteriams"
            },
            {
                name: "Kita",
                search: "category=b&type=kompiuteriu_komponentai_kita"
            }
        ]
    },
    category4 : {
        name: "Priedai, aksesuarai",
        search: "category=a&type=priedai_aksesuarai",
        subCat: [
            {
                name: "Įkrovikliai, baterijos ir akumuliatoriai",
                search: "category=b&type=ikrovikliai_baterijos_akumuliatoriai"
            },
            {
                name: "Adapteriai, kabeliai ir jungtys",
                search: "category=b&type=adapteriai_kabeliai_jungtys"
            },
            {
                name: "Atminties kortelės ir USB atmintinės",
                search: "category=b&type=atminties_korteles_usb_atmintines"
            },
            {
                name: "HDD dežutės ir išoriniai HDD",
                search: "category=b&type=hdd_dezutes_ir_isoriniai_hdd"
            },
            {
                name: "Krepšiai kompiuteriams",
                search: "category=b&type=krepsiai_kompiuteriams"
            },
            {
                name: "UPS (NMŠ)",
                search: "category=b&type=ups"
            },
            {
                name: "Kita",
                search: "category=b&type=priedai_aksesuarai_kita"
            }
        ]
    },
    category5 :  {
        name: "Programinė įranga, žaidimai",
        search: "category=a&type=programine_iranga_zaidimai",
        subCat: [
            {
                name: "Kompiuteriniai žaidimai",
                search: "category=b&type=kompiuteriniai_zaidimai"
            },
            {
                name: "Apple programinė įranga",
                search: "category=b&type=apple_programine_iranga"
            },
            {
                name: "Biuro programinė įranga",
                search: "category=b&type=biuro_programine_iranga"
            },
            {
                name: "Mokomosios programos",
                search: "category=b&type=mokomosios_programos"
            },
            {
                name: "Operacinės sistemos",
                search: "category=b&type=operacines_sistemos"
            },
            {
                name: "Techninė programinė įranga",
                search: "category=b&type=technine_programine_ranga"
            },
            {
                name: "Kita",
                search: "category=b&type=programine_iranga_zaidimai_kita"
            }
        ]
    },
    category6 : {
        name: "Tinklo įranga",
        search: "category=a&type=tinklo_iranga",
        subCat: [
            {
                name: "Belaidžio tinklo įranga",
                search: "category=b&type=belaidzio_tinklo_iranga"
            },
            {
                name: "HUB",
                search: "category=b&type=hub"
            },
            {
                name: "Maršrutizatoriai",
                search: "category=b&type=marsrutizatoriai"
            },
            {
                name: "Modemai",
                search: "category=b&type=modemai"
            },
            {
                name: "Switch",
                search: "category=b&type=switch"
            },
            {
                name: "Aksesuarai ir kabeliai",
                search: "category=b&type=aksesuarai_kabeliai"
            },
            {
                name: "Kita",
                search: "category=b&type=tinklo_iranga_kita"
            }
        ]
    },
    category7 : {
        name: "Paslaugos, remontas",
        search: "category=a&type=paslaugos_remontas",
        subCat: [
            {
                name: "3D spausdinimas",
                search: "category=b&type=spausdinimas_3d"
            },
            {
                name: "Remontas",
                search: "category=b&type=remontas"
            },
            {
                name: "Spausdinimas ir kpoijavimas",
                search: "category=b&type=spausdinimas_kopijavimas"
            },
            {
                name: "Supirkimas",
                search: "category=b&type=supirkimas"
            },
            {
                name: "Kita",
                search: "category=b&type=paslaugos_remontas_kita"
            }
        ]
    },
    category8 : {
        name: "Konsolės",
        search: "category=a&type=konsoles",
        subCat: [
            {
                name: "Sony",
                search: "category=b&type=sony"
            },
            {
                name: "Microsoft",
                search: "category=b&type=microsoft"
            },
            {
                name: "Nintendo",
                search: "category=b&type=nintendo"
            },
            {
                name: "Sega",
                search: "category=b&type=sega"
            },
            {
                name: "Priedai ir dalys",
                search: "category=b&type=priedai_dalys"
            },
            {
                name: "Paslaugos",
                search: "category=b&type=paslaugos"
            },
            {
                name: "Kita",
                search: "category=b&type=kita"
            }
        ]
    }
};
  
export default categories