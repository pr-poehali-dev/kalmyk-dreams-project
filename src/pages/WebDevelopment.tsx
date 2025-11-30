import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const services = [
    {
      icon: "Globe",
      title: "Создание сайтов",
      description: "Разработка современных веб-сайтов для вашего бизнеса - от визиток до сложных корпоративных порталов"
    },
    {
      icon: "TrendingUp",
      title: "Продвижение контента",
      description: "SEO-оптимизация, контент-маркетинг и создание материалов, которые привлекают целевую аудиорию"
    },
    {
      icon: "Megaphone",
      title: "Реклама бизнеса клиентов",
      description: "Комплексное продвижение в интернете: контекстная реклама, социальные сети, таргетинг"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-heading font-bold text-xl">Назад</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6">
                Создание веб-ресурсов
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Для бизнеса клиентов по всей России с штаб-квартирой в Калмыкии
              </p>
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/0e8d92b3-0096-4c7a-a6c2-a4ce48ce0fe6.jpg"
                  alt="Нарын-Худук, ул. 40 лет Победы, д. 12"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                На берегу Каспийского моря мы создаём цифровые решения, которые помогают вашему бизнесу расти и развиваться в онлайн-пространстве
              </p>
              <Button size="lg" className="rounded-full">
                Обсудить проект
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/af1425b7-0aec-4529-a46c-f6f7335d7040.jpg"
                alt="Создание веб-ресурсов в Калмыкии"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Полный спектр услуг для развития вашего бизнеса в интернете
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kalmykia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
              Калмыкия — территория возможностей
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Расположенная на берегу Каспийского моря, Республика Калмыкия открывает уникальные возможности для развития бизнеса. Мы помогаем не только местным предпринимателям, но и бизнесу по всей России выйти на новый уровень через создание качественных веб-ресурсов и digital-продвижение.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Реализованных проектов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
                <p className="text-muted-foreground">Опыта работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь с нами, чтобы обсудить ваш проект и узнать, как мы можем помочь вашему бизнесу расти
          </p>
          <Link to="/#contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Александр Сербин. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebDevelopment;