import React from 'react'
import { Link } from 'gatsby'
import Button from '../../components/Button'
import Layout from '../../components/layout/Layout'
import WaveTop from '../../svg/WaveTop'
import WaveBottom from '../../svg/WaveBottom'
import HeizMesser from '../../img/heiz_messer.png'
import WasserMesser from '../../img/wasser_messer.png'
import MengenMesser from '../../img/mengen_messer.png'

const Technik = () => (
  <Layout>
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        height: '60vh',
      }}
    >
      <div className="flex flex-col gap-6 absolute abs-center abs-center-y md:m-10 p-4 md:p-12 w-5/6 md:w-1/3 bg-opacity-95 bg-primary rounded-md shadow-2xl text-white">
        <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold max-w-xl">
          Moderne Messtechnik für präzise Abrechnungen.
        </h1>
        <span className="text-xl">Zuverlässig, genau und zukunftssicher.</span>
        <Link
          to="/leistungen"
          className="bg-secondary text-center hover:bg-contrast hover:text-white mt-4 text-black py-2 px-4 rounded-md shadow-md w-full max-w-[400px]"
        >
          Zu unseren Leistungen
        </Link>
      </div>
    </div>

    <section className="pt-20 md:pt-30 lg:pb-2">
      <div className="container mx-auto px-8 flex flex-col items-center gap-10">
        <h1 className="text-2xl lg:text-4xl font-bold leading-none text-primary">
          Heizkostenverteiler
        </h1>
        <p className="text-xl lg:text-2xl font-light text-center">
          Elektronische Heizkostenverteiler sind die moderne Lösung zur verbrauchsabhängigen
          Erfassung der Wärmeabgabe von Heizkörpern.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-5 gap-10">
          <div className="w-full lg:w-1/2">
            <p className="mt-8 text-l font-light leading-relaxed">
              Unsere elektronischen Heizkostenverteiler erfassen präzise die von den Heizkörpern
              abgegebene Wärme. Durch die Funktechnologie können die Verbrauchsdaten bequem und ohne
              Betreten der Wohnung abgelesen werden. Das spart Zeit und erhöht den Komfort für die
              Bewohner.
            </p>
            <ul className="mt-4 list-none lg:list-disc space-y-4">
              <li>
                <strong className="font-bold">Präzise Verbrauchserfassung:</strong> Genaue Messung
                für eine gerechte Kostenverteilung.
              </li>
              <li>
                <strong className="font-bold">Fernablesung per Funk:</strong> Kein Betreten der
                Wohnung notwendig, was den Prozess für alle Beteiligten vereinfacht.
              </li>
              <li>
                <strong className="font-bold">Hohe Manipulationssicherheit:</strong> Moderne Geräte
                bieten Schutz vor unbefugten Eingriffen.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={HeizMesser} alt="Heizkostenverteiler" className="w-3/4" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <WaveTop />
      <div className="bg-primary text-white">
        <div className="container mx-auto px-8 flex flex-col items-center gap-10 py-10">
          <h1 className="text-2xl lg:text-4xl font-bold leading-none">Wasserzähler</h1>
          <p className="text-xl lg:text-2xl font-light text-center">
            Moderne Wasserzähler für die exakte Erfassung des Warm- und Kaltwasserverbrauchs.
          </p>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-5 gap-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={WasserMesser} alt="Wasserzähler" className="w-3/4" />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="mt-8 text-l font-light leading-relaxed">
                Die genaue Messung des Wasserverbrauchs ist entscheidend für eine faire Abrechnung.
                Wir bieten sowohl Warm- als auch Kaltwasserzähler an, die sich durch Langlebigkeit
                und hohe Messgenauigkeit auszeichnen. Auch hier setzen wir auf Funktechnologie für
                eine unkomplizierte Fernablesung.
              </p>
              <ul className="mt-4 list-none lg:list-disc space-y-4">
                <li>
                  <strong className="font-bold">Genaue Verbrauchsmessung:</strong> Exakte Daten für
                  eine transparente und nachvollziehbare Abrechnung.
                </li>
                <li>
                  <strong className="font-bold">Langlebig und zuverlässig:</strong> Hochwertige
                  Materialien garantieren eine lange Lebensdauer der Messgeräte.
                </li>
                <li>
                  <strong className="font-bold">Für Warm- und Kaltwasser:</strong> Passende Lösungen
                  für den gesamten Wasserverbrauch im Gebäude.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WaveBottom />
    </section>

    <section className="pt-20 md:pt-20 lg:pb-20">
      <div className="container mx-auto px-8 flex flex-col items-center gap-10">
        <h1 className="text-2xl lg:text-4xl font-bold leading-none text-primary">
          Wärmemengenzähler
        </h1>
        <p className="text-xl lg:text-2xl font-light text-center">
          Wärmemengenzähler sind ideal für Zentralheizungen und Fußbodenheizungen zur Erfassung des
          tatsächlichen Energieverbrauchs.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-5 gap-10">
          <div className="w-full lg:w-1/2">
            <p className="mt-8 text-l font-light leading-relaxed">
              Wärmemengenzähler messen die Energiemenge, die einem Heiz- oder Kühlkreislauf zu- oder
              abgeführt wird. Sie sind die präziseste Methode zur Verbrauchserfassung und eignen
              sich besonders für Gebäude mit Zentral- oder Fußbodenheizung.
            </p>
            <ul className="mt-4 list-none lg:list-disc space-y-4">
              <li>
                <strong className="font-bold">Höchste Messgenauigkeit:</strong> Physikalische
                Messung des Energieverbrauchs für maximale Präzision.
              </li>
              <li>
                <strong className="font-bold">Vielseitig einsetzbar:</strong> Geeignet für
                Heizungs-, Kälte- und Solaranlagen.
              </li>
              <li>
                <strong className="font-bold">Effizienz und Kontrolle:</strong> Detaillierte
                Verbrauchsdaten helfen, Einsparpotenziale zu identifizieren.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={MengenMesser} alt="Wärmemengenzähler" className="w-3/4" />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto my-10 py-20 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Haben Sie Fragen zur Technik?</h3>
      <p className="mt-8 text-xl font-light">
        Wir beraten Sie gerne, welche Messtechnik für Ihre Immobilie am besten geeignet ist.
      </p>
      <p className="mt-8">
        <Link to="/kontakt">
          <Button size="xl">Kontakt aufnehmen</Button>
        </Link>
      </p>
    </section>
  </Layout>
)

export default Technik
