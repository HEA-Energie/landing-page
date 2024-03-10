import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LogoIcon from '../../svg/LogoIcon'
import Button from '../Button'

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-3xl gap-1">
        {/* <div className="w-12 mr-3">
          <LogoIcon />
        </div> */}
        <span className="text-primary font-bold">HEA</span>
        <span>Energie</span>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#leistungen">
          Leistungen
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Über uns
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Kontakt</Button>
      </div>
    </div>
  </header>
)

export default Header
