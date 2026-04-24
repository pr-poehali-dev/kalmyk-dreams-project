import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function HomeAbout() {
  return (
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
            Многопрофильный бизнес с 2005 года, специализирующийся на строительстве, недвижимости и IT-решениях
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
  );
}
