import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import CustomerCard from '../components/CustomerCard'
import LabelText from '../components/LabelText'
import Layout from '../components/layout/Layout'
import SplitSection from '../components/SplitSection'
import StatsBox from '../components/StatsBox'
import customerData from '../data/customer-data'
import HeroImage from '../svg/HeroImage'
import SvgCharts from '../svg/SvgCharts'
import BubbleImage from '../svg/Bubble'
import WaveTop from '../svg/WaveTop'
import WaveBottom from '../svg/WaveBottom'
import Logo from '../img/wind-mills.jpg'
import CardIcon from '../components/CardIcon'
import { LuFileBarChart } from 'react-icons/lu'
import Report from '../img/report-analysis.svg'
import OnlineReport from '../img/report-analysis-light.svg'

const Index = () => (
  <Layout>
    <div className="relative">
      <img src={Logo} alt="Logo" className="w-full h-[60vh] object-cover object-bottom" />
      <div className="text-white absolute abs-center md:-translate-x-0 md:-translate-y-1/2 w-5/6 md:w-1/3 md:left-20 bg-opacity-95 bg-primary rounded-md shadow-2xl p-4 md:p-12 flex flex-col gap-8">
        <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold max-w-xl">
          {' '}
          Effiziente Abrechnungslösungen für Ihre Immobilien.
        </h1>
        <span className="text-xl">Einfach. Schnell. Zuverlässig.</span>
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
        <div className="container mx-auto px-8 flex flex-col-reverse lg:flex-row items-center lg:gap-20">
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
                sowohl Ihre eigenen Finanzen als auch die Ihrer Mieter zu verwalten. Eine korrekte
                Jahresabrechnung dient nicht nur der rechtlichen Erfüllung, sondern auch der
                Aufrechterhaltung eines reibungslosen Betriebs und einer vertrauensvollen Beziehung
                zu Ihren Mietern.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WaveBottom />
    </section>

    <section id="leistungen" className="py-20 lg:pb-40 lg:pt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Leistungen</h2>
        {/* <BubbleImage /> */}

        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <CardIcon icon={LuFileBarChart}></CardIcon>
              <p className="font-semibold text-xl">Jahresabrechnungen</p>
              <p className="">
                Vereinfachen Sie die Erstellung Ihrer Jahresabrechnungen basierend auf den über das
                Jahr gesammelten Verbrauchsdaten Ihrer Zähler. Mit unserer Technologie
                automatisieren Sie den Prozess, sichern sich präzise Abrechnungen und steigern die
                Effizienz Ihrer Verwaltung. Entdecken Sie, wie einfach und benutzerfreundlich unsere
                Lösungen sind
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Monatliche Verbrauchsnachweise</p>
              <p className="mt-4">
                Mit unseren monatlichen Verbrauchsnachweisen haben Sie stets im Blick, wie viel
                Energie Sie verbrauchen und welche Kosten dabei entstehen. Bleiben Sie informiert
                und optimieren Sie Ihren Verbrauch – einfach und effizient.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Montageservice</p>
              <p className="mt-4">
                Wir übernehmen den kompletten Einbau für Sie und sorgen dafür, dass Ihre Daten
                sicher in unseren Systemen ankommen. Lehnen Sie sich zurück und genießen Sie unsere
                umfassenden Montagedienstleistungen, während wir sicherstellen, dass alles
                reibungslos funktioniert.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
)

export default Index
