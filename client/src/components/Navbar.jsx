import { Link } from "react-router-dom";
import { FiBox } from "react-icons/fi";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <header className="fixed top-0 z-50 py-2 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-around items-center">
          <Link
            className="flex gap-2 items-center"
            onClick={() => scrollToSection("start")}
          >
            <FiBox size={52} />
            <span className="text-2xl font-bold">Vaultify</span>
          </Link>
          <nav className="flex gap-4 space-x-6 text-sm font-medium">
            <Link>
              <button onClick={() => scrollToSection("features")}>
                <span>Características</span>
              </button>
            </Link>
            <Link>
              <button onClick={() => scrollToSection("contact")}>
                <span>Contacto</span>
              </button>
            </Link>
          </nav>
          <Link to="/login">
            <div className="px-2 py-2 text-sm text-white bg-black rounded-xl border hover:bg-gray-950">
              <button>Iniciar Sesion</button>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}
