import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const landPlots = [
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/205c4207-8748-4d7b-9fb6-3a9d25a7bf6d.jpg',
    name: 'Участок в Подмосковье',
    area: '10 соток',
    location: 'Московская область',
    distance: '45 км от МКАД',
    price: 'от 1 500 000',
    infrastructure: ['Электричество', 'Газ', 'Дорога'],
    description: 'Ровный участок с коммуникациями в живописном месте',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c346e257-1fe7-40d6-8caa-220f309c4e39.jpg',
    name: 'Участок у леса',
    area: '15 соток',
    location: 'Калужская область',
    distance: '80 км от МКАД',
    price: 'от 900 000',
    infrastructure: ['Электричество', 'Дорога'],
    description: 'Участок на опушке леса с видом на поле',
  },
  {
    image: 'https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c728bf3e-417d-4633-9439-e642ae9d3b47.jpg',
    name: 'Участок у реки',
    area: '12 соток',
    location: 'Тульская область',
    distance: '120 км от МКАД',
    price: 'от 750 000',
    infrastructure: ['Электричество', 'Дорога', 'Река рядом'],
    description: 'Участок в 300 метрах от реки с рыбалкой',
  },
];

const advantages = [
  {
    icon: 'FileCheck',
    title: 'Чистые документы',
    description: 'Полный пакет документов для безопасной сделки',
  },
  {
    icon: 'MapPin',
    title: 'Вся Россия',
    description: 'Участки в разных регионах страны',
  },
  {
    icon: 'Home',
    title: 'Под строительство',
    description: 'Все участки подходят для строительства жилых домов',
  },
  {
    icon: 'Zap',
    title: 'Коммуникации',
    description: 'Участки с подведенными или доступными коммуникациями',
  },
];

const LandSales = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredPlots = landPlots.filter((plot) => {
    if (selectedRegion && plot.location !== selectedRegion) return false;
    return true;
  });

  const regions = Array.from(new Set(landPlots.map(plot => plot.location)));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="ArrowLeft" size={20} />
              <span className="font-heading font-bold text-xl">Назад</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6">
                Продажа земельных участков
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Подбор и продажа земельных участков по всей России
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Участки с готовой инфраструктурой и полным пакетом документов для строительства жилых домов
              </p>
              <Button size="lg" className="rounded-full">
                Получить консультацию
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/205c4207-8748-4d7b-9fb6-3a9d25a7bf6d.jpg"
                alt="Земельные участки"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-4">
            Преимущества работы с нами
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Почему выгодно покупать земельные участки через нас
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon name={advantage.icon} size={28} className="text-secondary" />
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white text-base px-6 py-2">
              Каталог участков
            </Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-4">
              Доступные земельные участки
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите участок в нужном регионе
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedRegion === null ? 'default' : 'outline'}
              onClick={() => setSelectedRegion(null)}
              size="sm"
            >
              Все регионы
            </Button>
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? 'default' : 'outline'}
                onClick={() => setSelectedRegion(region)}
                size="sm"
              >
                {region}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlots.map((plot, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={plot.image}
                    alt={plot.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-secondary text-white">
                    {plot.area}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-2xl mb-4">{plot.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Icon name="MapPin" size={16} className="mr-2" />
                        Регион
                      </span>
                      <span className="font-semibold">{plot.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Расстояние
                      </span>
                      <span className="font-semibold">{plot.distance}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Icon name="Maximize" size={16} className="mr-2" />
                        Площадь
                      </span>
                      <span className="font-semibold">{plot.area}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Инфраструктура:</p>
                    <div className="flex flex-wrap gap-2">
                      {plot.infrastructure.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {plot.description}
                  </p>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Цена:</span>
                      <span className="font-bold text-2xl text-secondary">{plot.price} ₽</span>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPlots.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">Участки в выбранном регионе не найдены</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedRegion(null)}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Интересует участок?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной информации и просмотра участков
          </p>
          <Link to="/#контакты">
            <Button size="lg" className="rounded-full bg-white text-secondary hover:bg-white/90">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Александр Сербин. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandSales;
