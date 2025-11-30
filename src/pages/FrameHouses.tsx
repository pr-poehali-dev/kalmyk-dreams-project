import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const FrameHouses = () => {
  const advantages = [
    {
      icon: "Timer",
      title: "Быстрое строительство",
      description: "Возведение дома под ключ за 2-3 месяца"
    },
    {
      icon: "Wallet",
      title: "Доступная цена",
      description: "Оптимальное соотношение цены и качества"
    },
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "Низкие расходы на отопление круглый год"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Срок службы более 50 лет при правильной эксплуатации"
    },
    {
      icon: "Thermometer",
      title: "Комфортный микроклимат",
      description: "Отличная теплоизоляция и звукоизоляция"
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Использование натуральных материалов"
    }
  ];

  const stages = [
    {
      number: 1,
      title: "Консультация и проектирование",
      description: "Обсуждаем ваши пожелания, подбираем проект или создаем индивидуальный"
    },
    {
      number: 2,
      title: "Подготовка участка",
      description: "Планировка территории и закладка фундамента"
    },
    {
      number: 3,
      title: "Возведение каркаса",
      description: "Монтаж силового каркаса из качественной древесины"
    },
    {
      number: 4,
      title: "Утепление и изоляция",
      description: "Установка теплоизоляции и защитных мембран"
    },
    {
      number: 5,
      title: "Отделка и инженерия",
      description: "Внутренняя и внешняя отделка, коммуникации"
    },
    {
      number: 6,
      title: "Сдача объекта",
      description: "Финальная проверка, передача документов и ключей"
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
                Строительство каркасных домов
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Возведение энергоэффективных домов под ключ по всей России
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Используем современные технологии и качественные материалы для создания надежного и комфортного жилья для вашей семьи
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground mb-8">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>Клиентский офис: г. Зеленоград</span>
              </div>
              <Button size="lg" className="rounded-full">
                Получить консультацию
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/205c4207-8748-4d7b-9fb6-3a9d25a7bf6d.jpg"
                alt="Строительство каркасного дома"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-4">
            Преимущества каркасных домов
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Почему каркасная технология — оптимальный выбор для строительства загородного дома
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-4">
            Этапы строительства
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Прозрачный процесс от консультации до передачи ключей
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {stages.map((stage) => (
              <div 
                key={stage.number}
                className="bg-secondary/5 rounded-2xl p-6 flex items-start space-x-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  {stage.number}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2005</div>
              <p className="opacity-90">Год основания</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="opacity-90">Построенных домов</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2-3</div>
              <p className="opacity-90">Месяца на строительство</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="opacity-90">Лет срок службы</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Готовы построить свой дом?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости вашего проекта
          </p>
          <Link to="/#contact">
            <Button size="lg" className="rounded-full">
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

export default FrameHouses;
