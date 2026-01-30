import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          <a href="#sobre" className="nav-link">
            Sobre
          </a>
          <a href="#projetos" className="nav-link">
            Projetos
          </a>
          <a href="#contatos" className="nav-link">
            Contatos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
