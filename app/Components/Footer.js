// app/Components/Footer.js

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Linha de divisão com borda branca */}
      <div className="h-1 bg-white mt-10"></div>

      <footer role="contentinfo" className="footer-section  py-8 ">
        <div className="mx-8 sm:mx-12 md:mx-20 lg:mx-28 flex ">
          {/* Container com colunas responsivas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Seção de Navegação */}
            <div>
              <h5 className="text-lg text-title-3 font-semibold mb-4">
                Navigation
              </h5>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="Menu">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#AboutUs"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="About Us">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção de Informações */}
            <div>
              <h5 className="text-lg font-semibold text-title-3 mb-4">
                Informations
              </h5>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label={`Privacy Policy`}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="Terms of service">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Reservations"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="Reserve a table">
                    Reserve a Table
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="Frequent answered questions">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção de Redes Sociais */}
            <div>
              <h5 className="text-lg font-semibold text-title-3 mb-4">
                Follow us
              </h5>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-subtitle-3 hover:text-yellow-400"
                  aria-label={`Go into facebook of the restaurant`}>
                  <FaFacebookF size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-subtitle-3 hover:text-yellow-400"
                  aria-label={`Go into Linkedin of the restaurant`}>
                  <FaLinkedinIn size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-subtitle-3 hover:text-yellow-400"
                  aria-label={`Go into X of the restaurant`}>
                  <FaTwitter size={20} />
                </Link>
              </div>
            </div>

            {/* Seção de Horário de Funcionamento */}
            <div>
              <h5 className="text-lg font-semibold  text-title-3 mb-4">
                Opening Hours
              </h5>
              <ul>
                <li>
                  <Link
                    href=""
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="Restaurant Open 10:00 AM ">
                    Open: 10:00 AM
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                    aria-label="Restaurant Close 10:00 AM ">
                    Close: 10:00 AM
                  </Link>
                </li>
              </ul>
            </div>

            {/* Seção de Informações de Contato */}
            <div>
              <h5 className="text-lg font-semibold text-title-3 mb-4">
                Contact Information
              </h5>
              <p>
                <Link
                  href=""
                  className="block mb-2 text-sm hover:text-yellow-400"
                  aria-label="Email the restaurant">
                  restaurant@example.com
                </Link>
              </p>
              <p>
                <Link
                  href=""
                  className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                  aria-label="Restaurant is located at   Praça do Comércio, n 110-111, Coimbra, Portugal">
                  Praça do Comércio, n 110-111, Coimbra, Portugal
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400"
                  aria-label="Sorry, no phone number available">
                  Phone Number
                </Link>
              </p>
              <p className="text-sm text-subtitle-3">
                &copy; {new Date().toLocaleString()}{" "}
                <Link
                  href={"https://x.com/gcalcadaStudios"}
                  className="text-subtitle-3 hover:text-yellow-400"
                  aria-label="Visit the X social network of the developer of this page with nextJs and tailwind">
                  gcalcadaStudios
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé com a Rede Social X */}
      </footer>
    </>
  );
};

export default Footer;
