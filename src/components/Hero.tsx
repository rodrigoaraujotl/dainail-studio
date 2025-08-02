import { Button } from "@/components/ui/button";
import scrollTo from "@/hooks/use-scroll-to";

const Hero = () => {

  return (
    <section id="inicio" className="relative pt-6 md:pt-20 pb-16 gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 ">
            <div className="space-y-4">
              <h1 className="font-whispering-signature text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme suas
                <span className="block text-luxury"> unhas em arte</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Aprenda técnicas profissionais de alongamento de unhas com quem é referência no mercado. 
                Cursos completos para iniciantes e profissionais que querem se destacar.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-luxury hover:bg-luxury/90 text-luxury-foreground font-medium px-8 py-4 text-lg shadow-luxury transition-elegant"
                onClick={() => scrollTo('cursos')}
              >
                Ver Cursos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground px-8 py-4 text-lg transition-elegant"
                onClick={() => scrollTo('whatsapp', true)}
              >
                Falar no WhatsApp
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-luxury">50+</div>
                <div className="text-sm text-muted-foreground">Alunas formadas</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-luxury">8</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-luxury">4.9★</div>
                <div className="text-sm text-muted-foreground">Avaliação média</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/e36af54b-d7cf-48bb-bd9f-4a889eff28ea.png" 
                alt="Daiani Nail Designer - Profissional especializada em alongamento de unhas"
                className="w-full h-auto rounded-2xl shadow-elegant transition-elegant hover:scale-105"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-luxury/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gold/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;