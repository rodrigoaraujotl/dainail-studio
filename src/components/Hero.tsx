import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground leading-tight">
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
              >
                Ver Cursos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground px-8 py-4 text-lg transition-elegant"
              >
                Falar no WhatsApp
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-luxury">500+</div>
                <div className="text-sm text-muted-foreground">Alunas formadas</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-3xl font-bold text-luxury">5</div>
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
                src="/lovable-uploads/f8eca3f8-7b10-4bb7-a0b6-a9c0dc6fe78f.png" 
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