import React from 'react'
import Layout from '../Layout/Layout'

function Duk() {
  return (
    <Layout>
        <div className='flex-colo gap-8 w-full min-h-screen text-text lg:py-20 py-10 px-6'>
            <div className="bg-subMain p-4 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Dažniausiai užduodami klausimai</h2>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Kaip galėčiau ištrinti/redaguoti savo skelbimą?</h3>
                    <p className="mb-4">
                    Jeigu skelbimą dėjote kaip registruotas vartotojas, prisijunkite prie neskelbiu.lt portalo, eikite į „Mano skelbimai“ ir ties norimu skelbimu paspauskite „Pašalinti“.
                    </p>
                    <p className="mb-4">
                    Jeigu skelbimą įkėlėte kaip neregistruotas vartotojas, skelbimo įkėlimo dieną, el. paštu arba SMS žinute, turėjote gauti jo prisijungimo duomenis.
                    </p>
                    <p className="mb-4">
                    Jeigu prisijungimo duomenų neturite, atsidarykite savo skelbimą neskelbiu.lt portale ir virš jo pavadinimo spauskite langelį "Tavo skelbimas?", tuomet "Redaguoti" ir "Pamiršote prisijungimus?".
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Kokia yra skelbimo kaina?</h3>
                    <p className="mb-4">
                    Daugelio kategorijų skelbimai yra NEMOKAMI PRIVATIEMS ASMENIMS, parduodantiems savo asmeninius daiktus. Kai kurių kategorijų skelbimai išlieka mokami. Tai transporto priemonės ir jų dalys, nekilnojamasis turtas, paslaugos ir kt.
                    </p>
                    <p className="mb-4">
                    JURIDINIAMS asmenims ir FIZINIAMS ASMENIMS, kurių skelbimai susiję su KOMERCINE VEIKLA, skelbimų įdėjimas yra mokamas.
                    </p>
                    <p className="mb-4">
                    Primename, kad skelbimus, apmokant SMS žinute, yra taikomas žinutės administravimo mokestis (jo dydis priklauso nuo mokamos sumos ir yra nurodomas apmokėjimo puslapyje).
                    </p>
                    <p className="mb-4">
                    Skelbimai daugumoje kategorijų galioja 60 dienų (drabužių/avalynės kategorijoje - 90 dienų, ilgalaikės namų, butų ir kambarių nuomos kategorijose - 40 dienų, kolekcionavimo ir dovanojimo kategorijose - 30 dienų).
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Kaip veikia skelbimo iškėlimas žvaigždutėmis?</h3>
                    <p className="mb-4">
                    Žvaigždutėmis skelbimas iškeliamas aukščiau sąraše – kuo daugiau žvaigždučių užsakyta skelbimui, tuo aukščiau sąraše jis bus rodomas. Jei keli skelbimai yra su vienodu žvaigždučių skaičiumi, aukščiau bus rodomas tas, kurio žvaigždutės užsakytos ilgesniam laikui. Skelbimo iškėlimą užsakyti galite prisijungę prie savo skelbimo paskyros. Vienos žvaigždutės kaina vienai parai yra 0,99 €, dvi žvaigždutės vienai parai atitinkamai kainuos 1,98 € ir t.t.
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Kaip apmokėti skelbimus esant užsienyje?</h3>
                    <p className="mb-4">
                    Skelbimus apmokant SMS žinute, telefono numeris turi būti lietuviškas (kodas +370), bei mokėjimo metu būti Lietuvos teritorijoje. Jei esate užsienyje, galbūt kas nors esantis Lietuvoje galėtų SMS žinutę išsiųsti už Jus.
                    </p>
                    <p className="mb-4">
                    Jei naudojatės lietuviško banko el. bankininkyste, neskelbiu.lt paslaugas galite apmokėti iš bet kurios šalies. Taip pat mokėjimą atlikti galite kreditine kortele arba per Paysera sistemą.
                    </p>
                    <p className="mb-4">
                    Jeigu nei vienas iš aukščiau pateiktų variantų Jums netinka, parašykite mums el. paštu info@neskelbiu.lt – atsiųsime įmonės rekvizitus, kuriais mokėjimą galima bus atlikti iš bet kurio banko.
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Kas yra asmeninis neskelbiu.lt puslapis ir kaip juo naudotis?</h3>
                    <p className="mb-4">
                    Jei esate registruotas portalo vartotojas, Jums gali būti sugeneruotas (jeigu taip pažymėjote savo paskyros nustatymuose) asmeninio neskelbiu.lt puslapio adresas. Dedant skelbimą informacijos pildymo formos apačioje galite pažymėti varnelę "Rodyti šį skelbimą asmeniniame puslapyje". Tuomet skelbime bus rodoma Jūsų asmeninio puslapio nuoroda, ant kurios paspaudę kiti vartotojai atskirame puslapyje galės matyti visą Jūsų prekių/paslaugų asortimentą (skelbimus, kuriuos pasirinkote rodyti asmeniniame puslapyje).
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Kaip patvirtinti tapatybę?</h3>
                    <p className="mb-4">
                    Dalies skelbimų kontaktų blokeliuose rodoma žyma „Tapatybė patvirtinta“. Tapatybė patvirtinama automatiškai, už neskelbiu.lt paslaugas apmokėjus banko pavedimu. Jeigu Jūsų tapatybė dar nėra patvirtinta, papildykite neskelbiu.lt sąskaitą banko pavedimu bent 0,1 €.
                    </p>
                </div>
            </div>
        </div>
      </Layout>
  )
}

export default Duk