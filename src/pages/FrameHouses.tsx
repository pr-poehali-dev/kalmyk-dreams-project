import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/6647c270-754d-4976-8dce-e86ec4c23a02.jpg',
    name: 'Алтай',
    area: '82 м²',
    livingArea: '56 м²',
    dimensions: '7.5 × 9 м',
    floors: 1,
    rooms: 2,
    price: 'от 3 500 000',
    priceFinished: 'от 4 200 000',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c83b76aa-251e-4e74-9ea5-94a64f62067c.jpg',
    name: 'Большая терраса',
    area: '120 м²',
    livingArea: '85 м²',
    dimensions: '10 × 12 м',
    floors: 2,
    rooms: 3,
    price: 'от 4 800 000',
    priceFinished: 'от 5 700 000',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/2cc18b5c-da8f-44f0-a3de-92aa269e576f.jpg',
    name: 'Лесной',
    area: '150 м²',
    livingArea: '110 м²',
    dimensions: '11 × 13.5 м',
    floors: 2,
    rooms: 4,
    price: 'от 6 200 000',
    priceFinished: 'от 7 400 000',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/2bad152b-6a7b-48b9-8cbd-e31cc257057b.jpg',
    name: 'Современный',
    area: '95 м²',
    livingArea: '68 м²',
    dimensions: '8 × 11 м',
    floors: 1,
    rooms: 3,
    price: 'от 4 100 000',
    priceFinished: 'от 4 900 000',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/fc179986-9340-4965-a2f0-a9fd00929e01.jpg',
    name: 'Семейный',
    area: '165 м²',
    livingArea: '125 м²',
    dimensions: '12 × 14 м',
    floors: 2,
    rooms: 4,
    price: 'от 6 800 000',
    priceFinished: 'от 8 100 000',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/6647c270-754d-4976-8dce-e86ec4c23a02.jpg',
    name: 'Загородный',
    area: '180 м²',
    livingArea: '140 м²',
    dimensions: '13 × 15 м',
    floors: 2,
    rooms: 5,
    price: 'от 7 500 000',
    priceFinished: 'от 9 000 000',
  },
];

const technologies = [
  {
    title: 'Фундамент',
    description: 'Железобетонные сваи с ростверком для надёжности конструкции',
    icon: 'Building2',
  },
  {
    title: 'Каркас',
    description: 'Брус камерной сушки 145×195 мм, 195×45 мм, 145×45 мм',
    icon: 'Layers',
  },
  {
    title: 'Утепление',
    description: '250 мм в перекрытиях и кровле, 150 мм в стенах',
    icon: 'Home',
  },
  {
    title: 'Защита',
    description: 'Пароизоляция и ветровлагозащитные мембраны',
    icon: 'Shield',
  },
  {
    title: 'Отопление',
    description: 'Тёплый пол по всему дому для максимального комфорта',
    icon: 'Thermometer',
  },
  {
    title: 'Энергоэффективность',
    description: 'Современные технологии для экономии на отоплении',
    icon: 'Zap',
  },
];

const FrameHouses = () => {
  const [selectedFloors, setSelectedFloors] = useState<number | null>(null);
  const [selectedRooms, setSelectedRooms] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedFloors && project.floors !== selectedFloors) return false;
    if (selectedRooms && project.rooms !== selectedRooms) return false;
    return true;
  });
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="ArrowLeft" size={20} />
              <span className="font-heading font-bold text-xl">Назад</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6 overflow-x-auto">
            {['Преимущества', 'Проекты', 'Технологии', 'Этапы'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap py-2 border-b-2 border-transparent hover:border-primary"
              >
                {item}
              </button>
            ))}
          </div>
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
      <section id="преимущества" className="py-20 bg-secondary/5">
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

      {/* Projects Section */}
      <section id="проекты" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white text-base px-6 py-2">
              Каталог проектов
            </Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-4">
              Готовые проекты домов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите готовый проект или закажите индивидуальный расчёт
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFloors === null ? 'default' : 'outline'}
                onClick={() => setSelectedFloors(null)}
                size="sm"
              >
                Все этажи
              </Button>
              <Button
                variant={selectedFloors === 1 ? 'default' : 'outline'}
                onClick={() => setSelectedFloors(1)}
                size="sm"
              >
                1 этаж
              </Button>
              <Button
                variant={selectedFloors === 2 ? 'default' : 'outline'}
                onClick={() => setSelectedFloors(2)}
                size="sm"
              >
                2 этажа
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedRooms === null ? 'default' : 'outline'}
                onClick={() => setSelectedRooms(null)}
                size="sm"
              >
                Все комнаты
              </Button>
              {[2, 3, 4, 5].map((rooms) => (
                <Button
                  key={rooms}
                  variant={selectedRooms === rooms ? 'default' : 'outline'}
                  onClick={() => setSelectedRooms(rooms)}
                  size="sm"
                >
                  {rooms} комн.
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {project.floors} этаж
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-2xl mb-4">{project.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Icon name="Maximize" size={16} className="mr-2" />
                        Общая площадь
                      </span>
                      <span className="font-semibold">{project.area}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Icon name="Home" size={16} className="mr-2" />
                        Жилая площадь
                      </span>
                      <span className="font-semibold">{project.livingArea}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Icon name="Ruler" size={16} className="mr-2" />
                        Размеры
                      </span>
                      <span className="font-semibold">{project.dimensions}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Icon name="DoorOpen" size={16} className="mr-2" />
                        Комнат
                      </span>
                      <span className="font-semibold">{project.rooms}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Тёплый контур:</span>
                      <span className="font-bold text-primary">{project.price} ₽</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">С отделкой:</span>
                      <span className="font-bold text-secondary">{project.priceFinished} ₽</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">Проекты с такими параметрами не найдены</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedFloors(null);
                  setSelectedRooms(null);
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Technologies Section */}
      <section id="технологии" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white text-base px-6 py-2">
              Технологии
            </Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-4">
              Как мы строим
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные материалы и проверенные технологии строительства
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={tech.icon} size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="этапы" className="py-20">
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
                className="bg-background rounded-2xl p-6 flex items-start space-x-6 hover:shadow-lg transition-shadow"
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