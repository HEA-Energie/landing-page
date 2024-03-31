import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/layout/Layout'
import WaveTop from '../../svg/WaveTop'
import WaveBottom from '../../svg/WaveBottom'
import Logo from '../../img/analytics-2618277_1920.jpg'
import Report from '../../img/report-analysis.svg'
import OnlineReport from '../../img/report-analysis-light.svg'
import MonthlyReport from '../../img/report-presentation.svg'

const Leistungen = () => (
  <Layout>
    <div className="relative">
      <img src={Logo} alt="Logo" className="w-full h-[60vh] object-cover object-center" />
      <div className="text-white absolute abs-center md:-translate-x-0 md:-translate-y-1/2 w-5/6 md:w-1/3 md:left-20 bg-opacity-95 bg-primary rounded-md shadow-2xl p-4 md:p-12 flex flex-col gap-8">
        <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold max-w-xl">
          {' '}
          Wir finden die passende Lösung für Ihre Immobilie.
        </h1>
        <span className="text-xl">Jahresabrechnung. Verbauchsstatistiken. Montage.</span>
        <button className="bg-secondary  hover:bg-contrast hover:text-white mt-4 text-black py-2 px-4 rounded-md w-1/2 shadow-md">
          Zu unseren Leistungen
        </button>
      </div>
    </div>

    <section className="pt-20 md:pt-40 lg:pb-2">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="text-center flex flex-col gap-8 lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Abrechnungen einfach gemacht
          </h1>
          <p className="text-xl lg:text-2xl font-light">
            Wir sind Ihr Partner für innovative digitale Abrechnungslösungen für Strom, Gas und
            Wasser.
          </p>
          <p className="text-gray-600">
            Unser Ziel ist es, die Abrechnungsprozesse für Ihre Immobilien zu vereinfachen und zu
            optimieren, indem wir modernste Funk-Technologie nutzen. Egal ob Sie kleinere
            Wohneinheiten, Wohnkomplexe oder große Gewerbeimmobilien verwalten, wir bieten Ihnen die
            passende Lösung.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <img src={Report} alt="Logo" className="w-2/3" />
        </div>
      </div>
    </section>

    <section>
      <WaveTop />
      <div className="bg-primary text-white">
        <div className="container mx-auto px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={OnlineReport} alt="Logo" className="w-2/3" />
          </div>
          <div className="text-center flex flex-col gap-8 lg:text-left lg:w-1/2 ">
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-4xl font-semibold leading-tight">Jahresabrechnungen</h3>
              <p className="mt-8 text-l font-light leading-relaxed">
                Sie möchten eine präzise und professionelle Jahresabrechnung für Ihre
                Mehrfamilienhäuser erstellen? Als Immobilienbesitzer oder Hausverwaltung ist es
                entscheidend, eine transparente und gut organisierte Abrechnung vorzulegen, um
                sowohl Ihre eigenen Finanzen als auch die Ihrer Mieter zu verwalten.
              </p>
              <ul className=" mt-2 list-disc space-y-4">
                <li>
                  <strong className="font-bold">Transparenz und Überblick:</strong> Durch die
                  Bereitstellung detaillierter Jahresabrechnungen erhalten Verbraucher einen
                  umfassenden Überblick über ihren Energieverbrauch über das gesamte Jahr hinweg
                </li>
                <li>
                  <strong className="font-bold">Kostenkontrolle:</strong> Jahresabrechnungen bieten
                  eine solide Grundlage für die Budgetplanung und ermöglichen es Verbrauchern, ihre
                  Energiekosten besser zu kontrollieren.
                </li>
                <li>
                  <strong className="font-bold">Erfüllung rechtlicher Pflichten:</strong> Mit einer
                  korrekten Jahresabrechnung erfüllen Sie Ihre rechtliche Pflichten gegenüber den
                  Mietern.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WaveBottom />
    </section>

    <section>
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="text-center flex flex-col gap-8 lg:text-left lg:w-1/2">
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-4xl font-semibold leading-tight">Monatliche Verbrauchsnachweise</h3>
            <p className="mt-8 text-l font-light leading-relaxed">
              Monatliche Energieverbrauchsnachweise bieten eine klare Übersicht über den
              Energieverbrauch von Haushalten und Unternehmen. Die Vorteile sind vielfältig:
            </p>
            <ul className=" mt-2 list-disc space-y-4">
              <li>
                <strong className="font-bold">Transparenz und Bewusstsein:</strong> Durch
                regelmäßige Berichte erhalten Verbraucher ein klares Bild ihres Energieverbrauchs,
                was zu einem bewussteren Umgang mit Energie führt.
              </li>
              <li>
                <strong>Identifizierung von Einsparpotenzialen:</strong> Die Daten ermöglichen es,
                Bereiche mit hohem Verbrauch zu erkennen und gezielt Maßnahmen zur
                Effizienzsteigerung zu ergreifen.
              </li>

              <li>
                <strong>Umweltfreundlichkeit:</strong> Ein effizienter Verbrauch reduziert den
                ökologischen Fußabdruck und trägt zur Nachhaltigkeit bei.
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <img src={MonthlyReport} alt="Logo" className="w-2/3" />
        </div>
      </div>
    </section>

    <section className="container mx-auto my-10 py-20 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Haben Sie Interesse an unseren Leistungen?</h3>
      <p className="mt-8 text-xl font-light">
        Dann lassen Sie uns einfach unverbindlich in Kontakt treten.
      </p>
      <p className="mt-8">
        <Button size="xl">Kontakt aufnehmen</Button>
      </p>
    </section>
  </Layout>
)

export default Leistungen
