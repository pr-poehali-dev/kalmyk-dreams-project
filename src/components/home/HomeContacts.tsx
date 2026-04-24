import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function HomeContacts() {
  return (
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
  );
}
