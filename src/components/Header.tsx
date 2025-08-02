import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-luxury rounded-full flex items-center justify-center">
              <span className="text-luxury-foreground font-bold text-sm">D</span>
            </div>
            <span className="font-playfair font-semibold text-xl text-foreground">
              Daiani Nail Designer
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-foreground hover:text-luxury transition-smooth">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-luxury transition-smooth">
              Sobre
            </a>
            <a href="#cursos" className="text-foreground hover:text-luxury transition-smooth">
              Cursos
            </a>
            <a href="#galeria" className="text-foreground hover:text-luxury transition-smooth">
              Galeria
            </a>
            <a href="#contato" className="text-foreground hover:text-luxury transition-smooth">
              Contato
            </a>
          </nav>

          <Button className="bg-luxury hover:bg-luxury/90 text-luxury-foreground font-medium transition-smooth shadow-luxury">
            Inscreva-se
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;