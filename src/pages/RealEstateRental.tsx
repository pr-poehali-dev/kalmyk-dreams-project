import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const properties = [
  {
    image: "https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/6647c270-754d-4976-8dce-e86ec4c23a02.jpg",
    title: "Квартира в центре города",
    location: "Ростов-на-Дону, центр",
    rooms: 2,
    area: "65 м²",
    floor: "5/9",
    price: "25 000",
    features: ["Мебель", "Техника", "Ремонт"]
  },
  {
    image: "https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/c83b76aa-251e-4e74-9ea5-94a64f62067c.jpg",
    title: "Дом с участком",
    location: "Ростовская область",
    rooms: 4,
    area: "120 м²",
    floor: "Частный дом",
    price: "35 000",
    features: ["Участок 10 соток", "Гараж", "Баня"]
  },
  {
    image: "https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/2cc18b5c-da8f-44f0-a3de-92aa269e576f.jpg",
    title: "Студия у моря",
    location: "Таганрог",
    rooms: 1,
    area: "35 м²",
    floor: "3/5",
    price: "18 000",
    features: ["У моря", "Евроремонт", "Балкон"]
  }
];

const advantages = [
  {
    icon: "FileCheck",
    title: "Полный пакет документов",
    description: "Официальное оформление договора аренды с регистрацией"
  },
  {
    icon: "Clock",
    title: "Долгосрочная аренда",
    description: "Стабильные условия на длительный период"
  },
  {
    icon: "Home",
    title: "Готовая недвижимость",
    description: "Объекты с ремонтом и необходимой мебелью"
  },
  {
    icon: "MapPin",
    title: "Удобное расположение",
    description: "Развитая инфраструктура рядом с домом"
  },
  {
    icon: "Wrench",
    title: "Техническая поддержка",
    description: "Быстрое решение технических вопросов"
  },
  {
    icon: "Shield",
    title: "Надежность",
    description: "Прозрачные условия без скрытых платежей"
  }
];

const RealEstateRental = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-heading font-bold text-xl">Назад</span>
          </Link>
        </div>
      </header>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6">
                Аренда недвижимости
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Комфортное жилье в Ростовской области для длительного проживания
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Предлагаем квартиры и дома с полным набором удобств, развитой инфраструктурой и официальным оформлением документов
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground mb-8">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>Локация: Ростовская область</span>
              </div>
              <Button size="lg" className="rounded-full">
                Посмотреть объекты
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/b4b5a573-840e-42e8-9586-fdb10dfc1004.jpg"
                alt="Аренда жилой недвижимости"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-4">
            Преимущества аренды
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Почему стоит выбрать наши объекты недвижимости
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

      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-6">
              Условия аренды
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Прозрачные и понятные условия для долгосрочной аренды
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="FileText" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">
                    Необходимые документы
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Паспорт арендатора</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Договор аренды</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Акт приема-передачи</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Wallet" size={32} className="text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">
                    Оплата
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span>Оплата помесячно</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span>Залог 1 месяц аренды</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={18} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                      <span>Коммунальные услуги по счетчикам</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Заинтересовались?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь с нами для просмотра объектов и обсуждения условий аренды
          </p>
          <Link to="/#контакты">
            <Button size="lg" variant="secondary" className="rounded-full">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ИП Сербин Алексей Юрьевич. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateRental;