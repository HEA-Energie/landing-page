import React from 'react'
import Layout from '../../components/layout/Layout'
import Logo from '../../img/electronics-2400866_1920.jpg'
import Technic from '../../img/technic.svg'

const Leistungen = () => (
  <Layout>
    <div className="relative">
      <img src={Logo} alt="Logo" className="w-full h-[60vh] object-cover object-center" />
      <div className="text-white absolute abs-center md:-translate-x-0 md:-translate-y-1/2 w-5/6 md:w-1/3 md:left-20 bg-opacity-95 bg-primary rounded-md shadow-2xl p-4 md:p-12 flex flex-col gap-8">
        <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold max-w-xl">
          {' '}
          Dank modernster Funk-Technologie sind wir in der Lage die Abrechnungsprozesse zu
          vereinfachen und zu optimieren.
        </h1>
        <span className="text-xl">Jahresabrechnung. Verbauchsstatistiken. Montage.</span>
        <button className="bg-secondary  hover:bg-contrast hover:text-white mt-4 text-black py-2 px-4 rounded-md w-1/2 shadow-md">
          Zu unseren Leistungen
        </button>
      </div>
    </div>

    <section className="pt-20 md:pt-40 lg:pb-2">
      <div className="container mx-auto px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={Technic} alt="Logo" />
        </div>
      </div>
    </section>
  </Layout>
)

export default Leistungen
