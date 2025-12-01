import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const advantages = [
  {
    icon: 'Coins',
    title: 'от 39 900 ₽/м²',
    description: 'Прозрачная стоимость строительства без скрытых платежей',
  },
  {
    icon: 'ShieldCheck',
    title: 'Безопасная сделка',
    description: 'Работаем через счета эскроу для защиты ваших средств',
  },
  {
    icon: 'Award',
    title: 'Гарантия застройщика',
    description: 'Полная гарантия на все выполненные работы',
  },
  {
    icon: 'Calendar',
    title: 'Жизнь круглый год',
    description: 'Дома для комфортного проживания в любой сезон',
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

const reviews = [
  {
    name: 'Михаил Петров',
    project: 'Дом "Алтай"',
    text: 'Отличная работа! Дом построили точно в срок, качество материалов на высоте. Живём уже год, очень довольны.',
    rating: 5,
  },
  {
    name: 'Елена Сидорова',
    project: 'Дом "Большая терраса"',
    text: 'Профессиональная команда, все этапы строительства были под контролем. Дом получился именно таким, как мы хотели.',
    rating: 5,
  },
  {
    name: 'Андрей Козлов',
    project: 'Дом "Семейный"',
    text: 'Спасибо за качественную работу! Особенно порадовала чёткая коммуникация и соблюдение сроков.',
    rating: 5,
  },
];

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

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              {['О бизнес-проекте'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="/frame-houses"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Строительство каркасных домов
              </a>
              <a
                href="/land-sales"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Продажа земельных участков
              </a>
              <a
                href="/web-development"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Создание веб-ресурсов
              </a>
              <a
                href="/real-estate-rental"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Аренда недвижимости
              </a>
              <button
                onClick={() => scrollToSection('контакты')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button size="lg" className="hidden md:flex bg-primary">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-secondary text-white">
              С 2005 года строим качественные дома
            </Badge>
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Строим <span className="text-primary">ЗАГОРОДНЫЕ</span> дома
              <br />
              для жизни <span className="text-secondary">круглый год</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Каркасные дома под ключ по всей России. Энергоэффективные технологии и гарантия качества
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="/frame-houses#проекты">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Icon name="Home" size={22} className="mr-2" />
                  Смотреть проекты домов
                </Button>
              </a>
              <button onClick={() => scrollToSection('контакты')}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Icon name="Calculator" size={22} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {advantages.map((adv, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={adv.icon} size={24} className="text-primary" />
                    </div>
                    <p className="font-bold text-sm mb-1">{adv.title}</p>
                    <p className="text-xs text-muted-foreground">{adv.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="о-бизнес-проекте" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white text-base px-6 py-2">
              О бизнес-проекте
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              ИП Сербин Алексей Юрьевич
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              ОГРНИП 305616834600037
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-2">
              <strong>Является инвестором в развитие Республики Калмыкия с 23.11.2023</strong>
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-6">
              Многопрофильная компания с 2005 года, специализирующаяся на строительстве, недвижимости и IT-решениях
            </p>
            <div className="max-w-4xl mx-auto bg-secondary/5 rounded-2xl p-6 text-left">
              <h3 className="font-heading font-bold text-lg mb-4 text-center">Ведение бизнеса согласно ОКВЭД</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-primary mb-1">Основной ОКВЭД:</p>
                  <p className="text-muted-foreground">63.11 — Деятельность по обработке данных, предоставление услуг по размещению информации и связанная с этим деятельность</p>
                </div>
                <div>
                  <p className="font-semibold text-secondary mb-1">Дополнительные ОКВЭД:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 41.20 — Строительство жилых и нежилых зданий</li>
                    <li>• 68.10 — Покупка и продажа собственного недвижимого имущества</li>
                    <li className="ml-4">◦ 68.10.23 — Покупка и продажа земельных участков</li>
                    <li className="ml-4">◦ 68.10.21 — Покупка и продажа собственного жилого недвижимого имущества</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a href="/frame-houses" className="block">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Home" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl mb-2">
                        Строительство каркасных домов
                      </h3>
                      <Badge className="mb-3 bg-primary/20 text-primary">
                        Основное направление
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Возведение энергоэффективных каркасных жилых домов под ключ по всей территории России с применением современных технологий и качественных материалов
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Building" size={16} className="text-primary" />
                    <span>Клиентский офис: г. Зеленоград</span>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="/land-sales" className="block">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="TreePine" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl mb-2">
                        Продажа земельных участков
                      </h3>
                      <Badge className="mb-3 bg-secondary/20 text-secondary">
                        По всей России
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Подбор и продажа земельных участков в перспективных районах по всей России с готовой инфраструктурой и документами для строительства жилых домов
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span>География: вся Россия</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                    <Icon name="FileCheck" size={16} className="text-secondary" />
                    <span>Полный пакет документов</span>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="/real-estate-rental" className="block">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Key" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl mb-2">
                        Аренда недвижимости
                      </h3>
                      <Badge className="mb-3 bg-primary/20 text-primary">
                        Ростовская область
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Сдача жилой недвижимости в Ростовской области для комфортного проживания на длительный срок с полным набором удобств и инфраструктурой
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span>Локация: Ростовская область</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Долгосрочная аренда</span>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="/web-development" className="block">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Monitor" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl mb-2">
                        Создание веб-ресурсов
                      </h3>
                      <Badge className="mb-3 bg-secondary/20 text-secondary">
                        IT-решения
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Разработка современных веб-ресурсов и приложений для бизнеса клиентов с использованием актуальных технологий и индивидуальным подходом
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span>Штаб-квартира: Республика Калмыкия</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
                    <Icon name="Code" size={16} className="text-secondary" />
                    <span>Полный цикл разработки</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="font-heading font-bold text-3xl mb-4">
                Наши офисы
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building2" size={24} className="text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-2">Штаб-квартира инвестора с 23.11.2023</h4>
                  <p className="text-xs text-muted-foreground">
                    359230, Республика Калмыкия, р-н Черноземельский, п Нарын Худук, ул 40 лет Победы, д. 12, кв. 1
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building2" size={24} className="text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-2">Штаб-квартира инвестора с 11.07.2025</h4>
                  <p className="text-xs text-muted-foreground">
                    359404, Республика Калмыкия, р-н Сарпинский, п Каажихин, ул Зеленая, д. 20/2
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building" size={24} className="text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-2">Клиентский офис</h4>
                  <p className="text-xs text-muted-foreground">
                    124482, Россия, г. Зеленоград, Савелкинский проезд, дом 4
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 text-base px-6 py-2">Контакты</Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответим на все вопросы и поможем с выбором проекта
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-4">
                        ИП Сербин Алексей Юрьевич
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        ОГРНИП 305616834600037
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-1">Штаб-квартира инвестора с 23.11.2023</h4>
                        <p className="text-sm text-muted-foreground">
                          359230, Республика Калмыкия, р-н Черноземельский, п Нарын Худук, ул 40 лет Победы, д. 12, кв. 1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-1">Штаб-квартира инвестора с 11.07.2025</h4>
                        <p className="text-sm text-muted-foreground">
                          359404, Республика Калмыкия, р-н Сарпинский, п Каажихин, ул Зеленая, д. 20/2
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Building" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-1">Клиентский офис</h4>
                        <p className="text-sm text-muted-foreground">
                          124482, Россия, г. Зеленоград, Савелкинский проезд, дом 4
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-1">Телефон</h4>
                        <p className="text-muted-foreground">+7 (916) 007-94-00</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold mb-1">Email</h4>
                        <p className="text-muted-foreground">al-serbin@mail.ru</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                        rows={4}
                        placeholder="Интересующий проект или вопрос"
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
                Строительство каркасных домов под ключ по всей России с 2005 года
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
                <li>Технологии</li>
                <li>Отзывы</li>
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