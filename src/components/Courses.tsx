import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      title: "Curso Básico de Alongamento",
      description: "Para iniciantes que querem aprender as técnicas fundamentais",
      duration: "40 horas",
      format: "Presencial",
      price: "R$ 897",
      features: [
        "Preparação da unha natural",
        "Técnicas de alongamento com fibra",
        "Aplicação de gel e esmaltação",
        "Kit completo de materiais",
        "Certificado de conclusão"
      ]
    },
    {
      title: "Curso Avançado de Nail Art",
      description: "Técnicas avançadas para profissionais experientes",
      duration: "60 horas",
      format: "Presencial + Online",
      price: "R$ 1.297",
      features: [
        "Técnicas avançadas de decoração",
        "Nail art com pedras e acessórios",
        "Alongamento com formas especiais",
        "Marketing para nail designers",
        "Suporte pós-curso por 6 meses"
      ],
      popular: true
    },
    {
      title: "Intensivo Weekend",
      description: "Curso intensivo de fim de semana para quem tem pouco tempo",
      duration: "16 horas",
      format: "Presencial",
      price: "R$ 597",
      features: [
        "Técnicas essenciais concentradas",
        "Prática intensiva",
        "Material básico incluso",
        "Foco em resultados rápidos",
        "Certificado digital"
      ]
    }
  ];

  return (
    <section id="cursos" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-luxury">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o curso ideal para seu nível e objetivos. Todos incluem suporte completo 
            e material didático de alta qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`relative transition-elegant hover:scale-105 shadow-card ${
                course.popular ? 'border-2 border-luxury shadow-luxury' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-luxury text-luxury-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-playfair text-2xl text-foreground mb-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {course.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
                    <span>⏱️ {course.duration}</span>
                    <span>📍 {course.format}</span>
                  </div>
                  <div className="text-3xl font-playfair font-bold text-luxury">
                    {course.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ou 12x sem juros
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-luxury rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    course.popular 
                      ? 'bg-luxury hover:bg-luxury/90 text-luxury-foreground shadow-luxury' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  } transition-elegant`}
                >
                  Inscrever-se Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground px-8 py-4 text-lg transition-elegant"
          >
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;