import Logo from "../ui/Logo/Index";

export default function Footer() {
  return (
    <footer className="bg-gray_header pt-10">
      <div className="grid grid-cols-3 items-center max-sm:flex max-sm:flex-col max-sm:gap-10">
        <div className="text-center">
          <Logo size={true} />
        </div>

        <div className="col-span-2 flex justify-around max-sm:flex max-sm:flex-col max-sm:gap-10">
          <ul className="flex flex-col gap-2 text-gray_font">
            <h3 className="font-bold pb-2">FOURDEVS</h3>
            <li>
              <a href="https://www.google.com.br/">Sobre</a>
            </li>
            <li>
              <a href="https://www.google.com.br/">Carreiras</a>
            </li>
            <li>
              <a href="https://www.google.com.br/">Fale Conosco</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2 text-gray_font">
            <h3 className="font-bold pb-2">AJUDA</h3>
            <li>
              <a href="https://www.google.com.br/">Termos e condições</a>
            </li>
            <li>
              <a href="https://www.google.com.br/">Privacidade</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pt-10 py-4 text-gray_font">
        © 2024 Copyright: 4Devs
      </p>
    </footer>
  );
}
