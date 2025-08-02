import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <img 
                  src={'/lovable-uploads/63f54e26-1aab-4b39-b08b-b5e1bd047ae6.png'}
                  alt="Daiane Lima Nail Designer" 
                  className="w-40 h-auto brightness-1 invert"
                />
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Transformando unhas em arte há mais de 8 anos. Especializada em técnicas 
              avançadas de alongamento e nail design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/dainaildesigner_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-luxury rounded-full flex items-center justify-center hover:scale-110 transition-elegant"
              >
                <Instagram className="h-5 w-5 text-luxury-foreground" />
              </a>
            </div>
          </div>

          {/* Cursos */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Cursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#cursos" className="text-background/80 hover:text-luxury transition-smooth">
                  Master Excelência - A Retomada
                </a>
              </li>
              {/* <li>
                <a href="#cursos" className="text-background/80 hover:text-luxury transition-smooth">
                  Curso Avançado
                </a>
              </li>
              <li>
                <a href="#cursos" className="text-background/80 hover:text-luxury transition-smooth">
                  Intensivo Weekend
                </a>
              </li>
              <li>
                <a href="#cursos" className="text-background/80 hover:text-luxury transition-smooth">
                  Cursos Online
                </a>
              </li> */}
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-background/80 hover:text-luxury transition-smooth">
                  Sobre a Daiane
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-background/80 hover:text-luxury transition-smooth">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-luxury transition-smooth">
                  Contato
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-background/80 hover:text-luxury transition-smooth">
                  Depoimentos
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-luxury flex-shrink-0" />
                <span className="text-background/80">
                  Barueri, SP - Brasil
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-luxury flex-shrink-0" />
                <span className="text-background/80">
                  (11) 94997-6751
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-luxury flex-shrink-0" />
                <span className="text-background/80">
                  contato@daianelima.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-luxury flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/dainaildesigner_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-luxury transition-smooth"
                >
                  @dainaildesigner_
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 Daiane Lima Nail Designer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;