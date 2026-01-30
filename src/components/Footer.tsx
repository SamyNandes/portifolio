const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Samyra Fernandes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
