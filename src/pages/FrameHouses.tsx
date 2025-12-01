import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/75e1bb15-7bc1-4e0a-9970-f4eb0cc04aea.jpg',
    name: 'Шале 93',
    area: '93.32 м²',
    livingArea: '90 м²',
    dimensions: '9.5 × 11 м',
    floors: 1,
    rooms: 3,
    price: 'от 4 374 000',
    priceFinished: 'от 6 352 000',
    description: 'Одноэтажный дом с панорамными окнами и вторым светом',
    gallery: [
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/75e1bb15-7bc1-4e0a-9970-f4eb0cc04aea.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/9d131af2-ab23-44aa-996c-aee57829dcfe.jpg'
    ],
    galleryDescriptions: [
      'Вечерняя подсветка одноэтажного дома в лесу',
      'Интерьер кухни-гостиной со вторым светом'
    ],
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c346e257-1fe7-40d6-8caa-220f309c4e39.jpg',
    name: 'Шале 95',
    area: '97.48 м²',
    livingArea: '73.62 м²',
    dimensions: '10 × 11 м',
    floors: 1,
    rooms: 3,
    price: 'от 4 687 000',
    priceFinished: 'от 6 794 000',
    description: 'Одноэтажный дом с панорамными окнами и вторым светом. Кухня-гостиная 23-33 м²',
    gallery: [
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c346e257-1fe7-40d6-8caa-220f309c4e39.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/8a45147e-2845-454b-9caa-f872bdd13c9b.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/6497da40-cc3d-45da-baa0-cc6f94581e27.jpg'
    ],
    galleryDescriptions: [
      'Главный фасад с панорамными окнами и вторым светом',
      'Боковой вид с входной группой и спальнями',
      'Угловой вид с кухней-гостиной 23-33 м²'
    ],
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c728bf3e-417d-4633-9439-e642ae9d3b47.jpg',
    name: 'Шале 115',
    area: '115 м²',
    livingArea: '93 м²',
    dimensions: '11 × 11.5 м',
    floors: 1,
    rooms: 3,
    price: 'от 5 243 000',
    priceFinished: 'от 7 191 000',
    description: 'Одноэтажный дом с террасой 21 м², панорамными окнами и вторым светом. Кухня-гостиная 33 м²',
    gallery: [
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c728bf3e-417d-4633-9439-e642ae9d3b47.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/6bdce46e-ac3b-4953-9866-d186e9ffacac.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/4f72df74-8808-4004-b653-ccd5dd49a6f1.jpg'
    ],
    galleryDescriptions: [
      'Главный фасад с панорамными окнами и террасой 21 м²',
      'Боковой вид с террасой и кухней-гостиной 33 м²',
      'Входная группа с крыльцом'
    ],
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/9db97368-9df6-4d2c-9eca-b3ed792e6f38.jpg',
    name: 'Лесная сказка',
    area: '100 м²',
    livingArea: '96.72 м²',
    dimensions: '9 × 12.5 м',
    floors: 1,
    rooms: 3,
    price: 'от 5 955 000',
    priceFinished: 'от 8 020 000',
    description: 'Одноэтажный дом с террасой. 3 спальни 9-15 м², кухня-гостиная 31 м² со вторым светом',
    gallery: [
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/9db97368-9df6-4d2c-9eca-b3ed792e6f38.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/2cc463a0-812b-4f88-890b-c356c6937471.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/5a9f5d6a-adba-4968-88e4-814cc2669a6f.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/af2f9acc-9e61-4963-8902-8b9a40451d2f.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/a4e2df84-d43a-493a-aa60-07c2b5aeb1ba.jpg'
    ],
    galleryDescriptions: [
      'Главный фасад с панорамными окнами во всю высоту и вторым светом',
      'Задний фасад с панорамными окнами кухни-гостиной 31 м²',
      'Общий вид дома на участке с террасой',
      'Интерьер кухни-гостиной 31 м² с двусветным пространством',
      'Спальня 12 м² с видом на лес'
    ],
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/1e88df5d-ed32-4bda-8193-675930692f84.jpg',
    name: 'Афрейм',
    area: '90 м²',
    livingArea: '75 м²',
    dimensions: '9 × 10 м',
    floors: 2,
    rooms: 2,
    price: 'от 3 800 000',
    priceFinished: 'от 5 400 000',
    description: 'Оригинальный А-образный дом',
    gallery: [
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/1e88df5d-ed32-4bda-8193-675930692f84.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/d5fbb587-29e4-4924-9459-cfc151170fe6.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/f7e5f96f-dbf6-4b22-8429-8f1953d6ccbd.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/03988cd6-4597-4881-b110-6114c1e5d641.jpg'
    ],
    galleryDescriptions: [
      'Классический А-фрейм фасад',
      'Боковой вид треугольной формы',
      'Задняя часть с остеклением',
      'Вход в дом и терраса'
    ],
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c9251ec6-89bf-41d9-adda-637ddf41bc49.jpg',
    name: 'Поляна 120',
    area: '119.49 м²',
    livingArea: '105 м²',
    dimensions: '10.5 × 14 м',
    floors: 1,
    rooms: 3,
    price: 'от 5 353 000',
    priceFinished: 'от 7 780 000',
    description: 'Одноэтажный дом с террасой, панорамными окнами и вторым светом',
    gallery: [
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c9251ec6-89bf-41d9-adda-637ddf41bc49.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/4696742d-3c5f-4815-9842-2890307c3b00.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/cfabcee9-29e6-433b-97cf-05f9b48e38df.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/d8a97c68-4346-4b3a-a2f9-ba3586470bad.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/9369a7ed-c975-4144-a422-ac998c2ee594.jpg',
      'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/8779d700-fb87-4e77-af30-cd6731c70e5f.jpg'
    ],
    galleryDescriptions: [
      'Главный фасад одноэтажного дома с большой террасой',
      'Боковой вид одноэтажного дома с террасой и входом',
      'Задний фасад одноэтажного дома с панорамными окнами',
      'Общий вид одноэтажного дома на участке с террасой',
      'Интерьер гостиной со вторым светом и панорамными окнами',
      'Спальня с видом на лес'
    ],
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 300);
    }
  }, []);

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
              <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>Клиентский офис: г. Зеленоград</span>
              </div>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=37.217247%2C55.991037&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNzY4MDE0MTI2EmbQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0JfQtdC70LXQvdC-0LPRgNCw0LQsINCh0LDQstGR0LvQutC40L3RgdC60LjQuSDQv9GA0L7QtdC30LQsIDQiCg1VxSZCFeYvYUI%2C&z=16.23"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{ position: 'relative' }}
                ></iframe>
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
                <div className="relative overflow-hidden cursor-pointer" onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {project.floors} этаж
                  </Badge>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Icon name="Image" size={14} />
                    <span>{project.gallery?.length || 1}</span>
                  </div>
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

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedProject(null)}
          >
            <Icon name="X" size={32} />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.gallery?.[currentImageIndex] || selectedProject.image}
                alt={`${selectedProject.name} - ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors"
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1
                    )}
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </button>
                  
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors"
                    onClick={() => setCurrentImageIndex((prev) => 
                      prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1
                    )}
                  >
                    <Icon name="ChevronRight" size={24} />
                  </button>
                </>
              )}
            </div>
            
            <div className="mt-6 text-center text-white">
              <h3 className="font-heading font-bold text-2xl mb-2">{selectedProject.name}</h3>
              <p className="text-white/90 text-lg mb-1">
                {(selectedProject as any).galleryDescriptions?.[currentImageIndex] || selectedProject.description}
              </p>
              <p className="text-white/60 text-sm">
                Изображение {currentImageIndex + 1} из {selectedProject.gallery?.length || 1}
              </p>
            </div>
            
            {selectedProject.gallery && selectedProject.gallery.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {selectedProject.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={img} alt={`${selectedProject.name} - ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

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