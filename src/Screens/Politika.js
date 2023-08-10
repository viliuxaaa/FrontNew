import React from 'react'
import Layout from '../Layout/Layout'

function Politika() {
  return (
    <Layout>
        <div className='flex-colo gap-8 w-full min-h-screen text-text lg:py-20 py-10 px-6'>
            <div className="p-8 border bg-subMain border-gray-300 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">PRIVATUMO POLITIKA (redakcija 2023-05-12)</h2>
                <p>Mes suvokiame ypatingą svarbą, tenkančią Jūsų asmens duomenų apsaugai, todėl renkame ir tvarkome tik tuos Jūsų duomenis, kurie reikalingi vykdant mūsų veiklą. Asmens duomenis mes tvarkome teisėtai, skaidriai ir sąžiningai, iš anksto nustatytais tikslais ir tik tokia apimtimi, kuri reikalinga tikslams pasiekti. Tvarkydami asmens duomenis, siekiame, kad jie būtų tikslūs, saugūs, konfidencialūs, tinkamai laikomi ir saugomi.</p>
                <p>Tvarkydami Jūsų asmens duomenis mes laikomės Bendrojo asmens duomenų apsaugos reglamento (toliau – BDAR), Lietuvos Respublikos asmens duomenų teisinės apsaugos įstatymo, taip pat kituose teisės aktuose nustatytų asmens duomenų tvarkymo reikalavimų.</p>

                <h3 className="text-md font-semibold mt-4">1. KAS YRA ŠIS DOKUMENTAS?</h3>
                <p className="mb-2">1.1. Ši privatumo politika (toliau – Privatumo politika) nustato privatumo sąlygas Jums naudojantis Svetaine. Šioje Privatumo politikoje „Svetaine“ yra vadinama interneto svetainė www.neskelbiu.lt ir (ar) neskelbiu.LT mobilioji aplikacija, kurią galima atsiųsti iš „Apple App Store“ ir „Google Play“.</p>
                <p className="mb-2">1.2. Atidžiai perskaitykite šią Privatumo politiką tam, kad sužinotumėte kaip mes tvarkome Jūsų asmens duomenis, iš kur juos gauname bei kokios Jūsų, kaip asmens duomenų subjekto, teisės.</p>
                <p className="mb-2">1.3. Jei naudojatės Svetaine, vadinasi, Jūs perskaitėte ir sutikote su šia Privatumo politika ir joje nurodytais Jūsų asmens duomenų tvarkymo tikslais, būdais bei tvarka. Jeigu Jūs nesutinkate su Privatumo politika, Jūs neturite teisės naudotis Svetaine.</p>
                <p className="mb-2">1.4. Šioje Privatumo politikoje naudojama sąvoka „asmens duomenys“ – tai bet kokia informacija, pagal kurią galima Jus atpažinti – tiesiogiai ar netiesiogiai nustatyti Jūsų tapatybę. Asmens duomenimis yra pavardė, vardas, gimimo data, pašto ar e. pašto adresas, buvimo vietos duomenys ir interneto identifikatorius, Jums būdingos savybės ir kt.</p>
                <p className="mb-2">1.5. Privatumo politika galioja visiems asmenims, apsilankiusiems Svetainėje, taip pat veiksmams, kuriuos Jūs galite atlikti Svetainėje.</p>

                {/* Additional sections and content can be added similarly */}
            </div>
        </div>
      </Layout>
  )
}

export default Politika