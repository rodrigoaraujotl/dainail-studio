const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
                Sobre a 
                <span className="text-luxury"> Daiani</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Especialista em nail design com mais de 5 anos de experiência, Daiani é referência em 
                técnicas avançadas de alongamento de unhas. Com formação internacional e centenas de 
                alunas formadas, ela compartilha todo seu conhecimento através de cursos práticos e 
                didáticos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-luxury rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-luxury-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Formação Internacional
                  </h3>
                  <p className="text-muted-foreground">
                    Certificada pelos melhores cursos de nail art no Brasil e exterior, 
                    sempre atualizada com as últimas tendências.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-luxury rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-luxury-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Método Exclusivo
                  </h3>
                  <p className="text-muted-foreground">
                    Desenvolvi uma metodologia única que combina técnica, criatividade e 
                    praticidade para resultados perfeitos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-luxury rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-luxury-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Suporte Completo
                  </h3>
                  <p className="text-muted-foreground">
                    Acompanhamento personalizado durante todo o curso e após a formação, 
                    garantindo seu sucesso profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/a955efc6-9421-43d6-a736-2d56d60b86c8.png"
                alt="Daiani trabalhando em nail design"
                className="w-full h-64 object-cover rounded-2xl shadow-card transition-elegant hover:scale-105"
              />
              <img 
                src="/lovable-uploads/97f373e9-44fd-47d1-b857-13387404d6c3.png"
                alt="Resultado profissional de nail art"
                className="w-full h-48 object-cover rounded-2xl shadow-card transition-elegant hover:scale-105"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="/lovable-uploads/e36af54b-d7cf-48bb-bd9f-4a889eff28ea.png"
                alt="Técnicas avançadas de alongamento"
                className="w-full h-48 object-cover rounded-2xl shadow-card transition-elegant hover:scale-105"
              />
              <img 
                src="/lovable-uploads/6fe7fe1c-3c10-4145-8e39-ecac731ee09d.png"
                alt="Nail design profissional"
                className="w-full h-64 object-cover rounded-2xl shadow-card transition-elegant hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;