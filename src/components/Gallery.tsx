import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/f8eca3f8-7b10-4bb7-a0b6-a9c0dc6fe78f.png",
      alt: "Look elegante com nail design profissional"
    },
    {
      src: "/lovable-uploads/a955efc6-9421-43d6-a736-2d56d60b86c8.png",
      alt: "Técnica de alongamento em destaque"
    },
    {
      src: "/lovable-uploads/97f373e9-44fd-47d1-b857-13387404d6c3.png",
      alt: "Resultado profissional de nail art"
    },
    {
      src: "/lovable-uploads/e36af54b-d7cf-48bb-bd9f-4a889eff28ea.png",
      alt: "Nail design com acabamento perfeito"
    },
    {
      src: "/lovable-uploads/6fe7fe1c-3c10-4145-8e39-ecac731ee09d.png",
      alt: "Look completo com unhas decoradas"
    },
    {
      src: "/lovable-uploads/449b0aca-c20d-4125-a1b7-608d0b562c57.png",
      alt: "Trabalho criativo com nail polish"
    },
    {
      src: "/lovable-uploads/36f1c514-8ba1-4d89-9f04-8736b1e14e64.png",
      alt: "Técnicas avançadas de decoração"
    },
    {
      src: "/lovable-uploads/a6de9acb-2d0a-4ae7-afdb-46dcc7fbf956.png",
      alt: "Resultado elegante e sofisticado"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-luxury">Galeria</span> de Trabalhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos e resultados alcançados pelas nossas alunas. 
            Cada unha é uma obra de arte única.
          </p>
        </div>

        {/* Carrossel Principal */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-elegant">
            <img 
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Botões de navegação */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-none shadow-lg transition-elegant"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-none shadow-lg transition-elegant"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-luxury scale-125' 
                    : 'bg-muted hover:bg-luxury/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid de miniaturas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 ring-luxury scale-105' 
                  : 'hover:scale-105 hover:shadow-card'
              }`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-luxury/20"></div>
              )}
            </button>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
            Siga no Instagram para mais inspirações
          </h3>
          <Button 
            size="lg"
            className="bg-luxury hover:bg-luxury/90 text-luxury-foreground font-medium px-8 py-4 text-lg shadow-luxury transition-elegant"
          >
            @dainaildesigner_
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;