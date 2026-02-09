import React from 'react'
import { Link } from 'gatsby'
import WaveTop from '../../svg/WaveTop'

const Footer = () => (
  <footer className="mt-35">
    <WaveTop />
    <div className="bg-primary">
      <div className="container mx-auto py-16 px-3 text-gray-800 ">
        <div className="flex -mx-3  text-white">
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Über Uns</h2>
            <p className="mt-5">HEA - Smart Abrechnen</p>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Rechtliches</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <Link to="/datenschutz" className="text-white">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-white">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Social Media</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a className="text-white" href="https://dev.to/changoman">
                  Dev.to
                </a>
              </li>
              <li>
                <a className="text-white" href="https://twitter.com/HuntaroSan">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-white" href="https://github.com/codebushi/gatsby-starter-lander">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
