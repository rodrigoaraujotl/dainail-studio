import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import scrollTo from "@/hooks/use-scroll-to";

const Header = () => {

  const isMobile = useIsMobile();

  return (
    <header className="md:fixed top-0 left-0 right-0 z-[9999999] bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={`${!isMobile ? '/lovable-uploads/63f54e26-1aab-4b39-b08b-b5e1bd047ae6.png' : '/lovable-uploads/6310267d-cb5c-4cee-bafc-40079f0f4ba4.png'}`}
              alt="Daiane Lima Nail Designer" 
              className="w-11 md:w-28 h-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-foreground hover:text-luxury transition-smooth">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-luxury transition-smooth">
              Sobre
            </a>
            <a href="#cursos" className="text-foreground hover:text-luxury transition-smooth">
              Curso
            </a>
            <a href="#galeria" className="text-foreground hover:text-luxury transition-smooth">
              Galeria
            </a>
            <a href="#contato" className="text-foreground hover:text-luxury transition-smooth">
              Contato
            </a>
          </nav>

          <Button className="bg-luxury hover:bg-luxury/90 text-luxury-foreground font-medium transition-smooth shadow-luxury" onClick={() => scrollTo('cursos')}>
            Inscreva-se
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;