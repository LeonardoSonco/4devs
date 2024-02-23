import Logo from "../ui/Logo/Index";

import Home from "../../assets/Home.svg";
import Business from "../../assets/Business.svg";
import User from "../../assets/User.svg";
import { useEffect, useState } from "react";

export default function Header({ logged }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menuHamburguer, setMenuHamburguer] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuHamburguer(true);
      } else {
        setMenuHamburguer(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);

  return (
    <>
      {menuHamburguer ? (
        <header
          className="flex bg-gray_header justify-between items-center px-11 pt-5 animate-fade animate-once animate-ease-in animate-delay-150
        
        "
        >
          <Logo />

          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 bg-blue_font"></span>
                <span className="block  h-0.5 w-8 bg-blue_font"></span>
                <span className="block  h-0.5 w-8 bg-blue_font"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav " : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-blue_font"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center min-h-[250px] text-blue_font ">
                  <li className="border-b border-white my-8 uppercase cursor-pointer font-bold">
                    Home
                  </li>
                  <li className="border-b border-white my-8 uppercase cursor-pointer font-bold">
                    Vagas
                  </li>
                  <li className="border-b border-white my-8 uppercase cursor-pointer font-bold">
                    Perfil
                  </li>
                </ul>
                <style>{`
              .hideMenuNav {
                display: none;
              }
              .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: #262626;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: start;
                padding-top: 70px;
                align-items: center;
                transition: all;
                transition-duration: 1000ms;
              }
            `}</style>
              </div>
            </section>
          </nav>
        </header>
      ) : (
        <header className="flex justify-between px-16 py-4 items-center bg-gray_header">
          <div>
            <Logo size={false} />
          </div>
          <div>
            <ul className="flex items-center gap-20">
              {logged && (
                <>
                  <li>
                    <img className={`w-7`} src={Home} alt="" />
                  </li>
                  <li>
                    <img className={`w-7`} src={Business} alt="" />
                  </li>
                </>
              )}

              <li>
                <img className={`w-9`} src={User} alt="" />
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}
