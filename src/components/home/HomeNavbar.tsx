import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HomeNavbarProps {
  scrollToSection: (id: string) => void;
}

export default function HomeNavbar({ scrollToSection }: HomeNavbarProps) {
  return (
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
  );
}
