import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const regions = [
  { name: 'Калмыкия', lat: 46, lng: 45, type: 'Штаб-квартира' },
  { name: 'Москва (Зеленоград)', lat: 56, lng: 37, type: 'Офис' },
  { name: 'Ростовская область', lat: 47, lng: 40, type: 'Недвижимость' },
  { name: 'Краснодарский край', lat: 45, lng: 39, type: 'Проект' },
  { name: 'Московская область', lat: 55.5, lng: 37.5, type: 'Проект' },
  { name: 'Санкт-Петербург', lat: 59.9, lng: 30.3, type: 'Проект' },
];

const services = [
  {
    icon: 'Home',
    title: 'Строительство каркасных домов',
    description: 'Возведение современных энергоэффективных домов по всей России с применением передовых технологий',
  },
  {
    icon: 'TreePine',
    title: 'Продажа земельных участков',
    description: 'Подбор и продажа земельных участков в перспективных районах с готовой инфраструктурой',
  },
  {
    icon: 'Key',
    title: 'Аренда недвижимости',
    description: 'Сдача жилой недвижимости в Ростовской области на выгодных условиях',
  },
  {
    icon: 'Monitor',
    title: 'Создание веб-ресурсов',
    description: 'Разработка современных сайтов и веб-приложений для развития вашего бизнеса',
  },
];

const projects = [
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/2bad152b-6a7b-48b9-8cbd-e31cc257057b.jpg',
    title: 'Каркасный дом 120 м²',
    location: 'Московская область',
    status: 'Завершён',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/fc179986-9340-4965-a2f0-a9fd00929e01.jpg',
    title: 'Дом для семьи 150 м²',
    location: 'Краснодарский край',
    status: 'В работе',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/2bad152b-6a7b-48b9-8cbd-e31cc257057b.jpg',
    title: 'Загородный дом 180 м²',
    location: 'Санкт-Петербург',
    status: 'Завершён',
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl">ИП Сербин</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['Главная', 'О компании', 'Услуги', 'Проекты', 'Карта', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-white">С 2005 года на рынке</Badge>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
                Строим ваше
                <span className="text-primary"> будущее</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Каркасные дома, земельные участки и недвижимость по всей России. Профессиональный подход и гарантия качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Home" size={20} className="mr-2" />
                  Наши проекты
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Земельные участки
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/2bad152b-6a7b-48b9-8cbd-e31cc257057b.jpg"
                alt="Современный каркасный дом"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl">500+</p>
                    <p className="text-sm text-muted-foreground">Проектов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">О нас</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">ИП Сербин Алексей Юрьевич</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ОГРНИП 305616834600037 · Работаем с 2005 года
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon name="MapPin" size={40} className="text-primary mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Штаб-квартира</h3>
                <p className="text-muted-foreground mb-2">Республика Калмыкия</p>
                <p className="text-sm text-muted-foreground">
                  359230, р-н Черноземельский, п Нарын Худук, ул 40 лет Победы, д. 12, кв. 1
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Icon name="Building" size={40} className="text-secondary mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Офис продаж</h3>
                <p className="text-muted-foreground mb-2">Москва, Зеленоград</p>
                <p className="text-sm text-muted-foreground">
                  Удобное расположение для встреч с клиентами из центральной России
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">Услуги</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">Что мы предлагаем</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для вашего комфорта и бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} size={28} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">Портфолио</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реализованные каркасные дома по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-foreground">
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="карта" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">География</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">Наше присутствие в России</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем по всей стране от Калининграда до Владивостока
            </p>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-secondary/10 to-primary/10 h-[500px]">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <path
                    d="M 50,100 Q 150,80 250,100 T 450,100 Q 550,90 650,100 L 750,120 L 750,350 Q 650,340 550,350 T 350,350 Q 250,360 150,350 L 50,340 Z"
                    fill="rgba(14, 165, 233, 0.1)"
                    stroke="rgba(14, 165, 233, 0.3)"
                    strokeWidth="2"
                  />
                  
                  {regions.map((region, index) => {
                    const x = (region.lng - 30) * 10 + 100;
                    const y = (60 - region.lat) * 20 + 50;
                    const isHovered = hoveredRegion === region.name;
                    
                    return (
                      <g
                        key={index}
                        onMouseEnter={() => setHoveredRegion(region.name)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={x}
                          cy={y}
                          r={isHovered ? 12 : 8}
                          fill={region.type === 'Штаб-квартира' ? '#F97316' : '#0EA5E9'}
                          filter="url(#glow)"
                          className="transition-all duration-300"
                          opacity={isHovered ? 1 : 0.8}
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r={isHovered ? 20 : 0}
                          fill="none"
                          stroke={region.type === 'Штаб-квартира' ? '#F97316' : '#0EA5E9'}
                          strokeWidth="2"
                          opacity="0.4"
                          className="transition-all duration-300"
                        />
                        {isHovered && (
                          <g>
                            <rect
                              x={x - 80}
                              y={y - 50}
                              width="160"
                              height="40"
                              fill="white"
                              stroke="#e5e7eb"
                              strokeWidth="1"
                              rx="8"
                              filter="url(#glow)"
                            />
                            <text
                              x={x}
                              y={y - 35}
                              textAnchor="middle"
                              className="font-heading font-bold text-sm"
                              fill="#1a1f2c"
                            >
                              {region.name}
                            </text>
                            <text
                              x={x}
                              y={y - 20}
                              textAnchor="middle"
                              className="text-xs"
                              fill="#6b7280"
                            >
                              {region.type}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Штаб-квартира</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Офисы и проекты</span>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы ответить на ваши вопросы и начать работу над проектом
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@serbin-build.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold mb-1">Адрес</h3>
                        <p className="text-muted-foreground text-sm">
                          359230, Республика Калмыкия, р-н Черноземельский, п Нарын Худук, ул 40 лет Победы, д. 12, кв. 1
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                        rows={3}
                        placeholder="Расскажите о своём проекте"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <span className="font-heading font-bold text-xl">ИП Сербин</span>
              </div>
              <p className="text-sm text-gray-400">
                Строительство каркасных домов и продажа недвижимости по всей России
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Каркасные дома</li>
                <li>Земельные участки</li>
                <li>Аренда недвижимости</li>
                <li>Веб-разработка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>info@serbin-build.ru</li>
                <li>Калмыкия, Зеленоград</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 ИП Сербин Алексей Юрьевич (ОГРНИП 305616834600037). Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
