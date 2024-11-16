// app/Components/Footer.js

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Linha de divisão com borda branca */}
      <div className="h-1 bg-white mt-10"></div>

      <footer className="footer-section py-8 px-6 sm:px-12 md:px-24">
        <div className="max-w-screen-xl mx-auto">
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
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#AboutUs"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
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
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Reservations"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                    Reserve a Table
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
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
                  className="text-subtitle-3 hover:text-yellow-400">
                  <FaFacebookF size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-subtitle-3 hover:text-yellow-400">
                  <FaLinkedinIn size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-subtitle-3 hover:text-yellow-400">
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
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                    Open: 10:00 AM
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
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
                  className="block mb-2 text-sm hover:text-yellow-400"></Link>
              </p>
              <p>
                <Link
                  href=""
                  className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                  Praça do Comércio, n 110-111, Coimbra, Portugal
                </Link>
              </p>
              <p>
                <Link
                  href="tel:+356911533126"
                  className="block mb-2 text-sm text-subtitle-3 hover:text-yellow-400">
                  Phone Number
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé com a Rede Social X */}
        <div className="text-center mt-8">
          <p className="text-sm text-subtitle-3">
            &copy; {new Date().toLocaleString()}{" "}
            <Link
              href={"https://x.com/gcalcadaStudios"}
              className="text-subtitle-3 hover:text-yellow-400">
              @gcalcadaStudios
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
