import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface FrameHousesHeaderProps {
  scrollToSection: (id: string) => void;
}

export default function FrameHousesHeader({ scrollToSection }: FrameHousesHeaderProps) {
  return (
    <>
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="ArrowLeft" size={20} />
              <span className="font-heading font-bold text-xl">Назад</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6 overflow-x-auto">
            {['Преимущества', 'Проекты', 'Технологии', 'Этапы', 'Отзывы'].map((item) => (
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
    </>
  );
}
