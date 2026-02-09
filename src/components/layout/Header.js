import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LogoIcon from '../../svg/LogoIcon'
import Button from '../Button'
import { Link } from 'gatsby'

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <Link to="/" className="flex items-center text-3xl gap-1">
        {/* <div className="w-12 mr-3">
          <LogoIcon />
        </div> */}
        <span className="text-primary font-bold">HEA</span>
        <span className="text-black">Abrechnungen</span>
      </Link>
      <div className="flex mt-4 sm:mt-0">
        <Link to="/" className="px-4">
          Home
        </Link>
        <Link to="/leistungen" className="px-4">
          Leistungen
        </Link>
        <Link to="/technik" className="px-4">
          Technik
        </Link>
        <Link to="/kontakt" className="px-4">
          Kontakt
        </Link>
      </div>
      <div className="hidden md:block">
        <Button as={Link} to="/kontakt" className="text-sm">
          Kontakt
        </Button>
      </div>
    </div>
  </header>
)

export default Header
