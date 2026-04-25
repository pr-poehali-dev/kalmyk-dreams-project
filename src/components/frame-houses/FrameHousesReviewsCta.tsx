import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FrameHousesReviewsCta() {
  return (
    <>
      {/* Reviews Section */}
      <section id="отзывы" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white text-base px-6 py-2">
              Отзывы клиентов
            </Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-4">
              Отзывы наших заказчиков
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные истории людей, которые построили свой дом с нами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Отличная команда профессионалов! Построили дом Шале 93 точно в срок. Качество материалов и работы на высоте. Особенно впечатлили панорамные окна и второй свет в гостиной."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Герасимов Олег</p>
                  <p className="text-sm text-muted-foreground">Проект Шале 93 • 03.02.2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Очень довольны результатом! Шале 95 - именно то, что мы искали. Дом получился теплым и уютным. Менеджеры всегда на связи, все вопросы решались оперативно."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Зыков Виталий</p>
                  <p className="text-sm text-muted-foreground">Проект Шале 95 • 20.12.2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Спасибо за прекрасный дом! Шале 95 идеально вписался в наш участок. Планировка продумана до мелочей, а кухня-гостиная со вторым светом просто восхитительна!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Бородкина Анжела</p>
                  <p className="text-sm text-muted-foreground">Проект Шале 95 • 20.12.2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Лесная сказка - это действительно сказка! Дом получился просторным и светлым. Три спальни удобно расположены, а терраса стала любимым местом всей семьи."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Мещеряков Денис</p>
                  <p className="text-sm text-muted-foreground">Проект Лесная сказка • 05.06.2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Поляна 120 - наш идеальный дом! Большая площадь, удобная планировка, качественные материалы. Строили 3 месяца, без задержек. Рекомендую всем!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Заводсков Михаил</p>
                  <p className="text-sm text-muted-foreground">Проект Поляна 120 • 04.08.2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "А-фрейм - оригинальное решение! Привлекает внимание всех соседей. Внутри просторно, тепло зимой. Необычная архитектура создает особую атмосферу."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Парфенов Артем</p>
                  <p className="text-sm text-muted-foreground">Проект Афрейм • 10.08.2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Построили Лесную сказку для большой семьи. Все остались довольны! Спальни просторные, кухня-гостиная со вторым светом - центр притяжения. Спасибо за профессионализм!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Ануфриев Андрей</p>
                  <p className="text-sm text-muted-foreground">Проект Лесная сказка • 10.09.2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Переехали в Лесную сказку месяц назад и очень рады! Дом теплый, уютный, продуманная планировка. Панорамные окна дают много света. Благодарим за качественную работу!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">Кудинова Марина</p>
                  <p className="text-sm text-muted-foreground">Проект Лесная сказка • 10.11.2025</p>
                </div>
              </CardContent>
            </Card>
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

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ИП Сербин Алексей Юрьевич (ОГРНИП 305616834600037). Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}
