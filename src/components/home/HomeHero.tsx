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

interface HomeHeroProps {
  scrollToSection: (id: string) => void;
}

export default function HomeHero({ scrollToSection }: HomeHeroProps) {
  return (
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
  );
}
