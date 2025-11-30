import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const services = [
    {
      icon: "Globe",
      title: "Создание сайтов",
      description: "Разработка современных веб-сайтов для вашего бизнеса - от визиток до сложных корпоративных порталов"
    },
    {
      icon: "TrendingUp",
      title: "Продвижение контента",
      description: "SEO-оптимизация, контент-маркетинг и создание материалов, которые привлекают целевую аудиорию"
    },
    {
      icon: "Megaphone",
      title: "Реклама бизнеса клиентов",
      description: "Комплексное продвижение в интернете: контекстная реклама, социальные сети, таргетинг"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-heading font-bold text-xl">Назад</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6">
                Создание веб-ресурсов
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Для бизнеса клиентов по всей России с штаб-квартирой в Калмыкии
              </p>
              <div className="mb-6 rounded-2xl overflow-hidden shadow-xl">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=46.546242%2C45.434316&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTMyMzc1NzI5EofQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCa0LDQu9C80YvQutC40Y8sINGH0LXRgNC90L7Qt9C10LzQtdC70YzRgdC60LjQuSDRgNCw0LnQvtC9LCDQv9C-0YHRkdC70L7QuiDQndCw0YDRi9C9LdCl0YPQtNGD0LosINGD0LvQuNGG0LAg0LfQsNC80LXRgtC9QdGPIDQwINC70LXRgiDQn9C-0LHQtdC00YssIDEyIgoNLXoKQhUYj2JC&z=17.83"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{ position: 'relative' }}
                ></iframe>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                На берегу Каспийского моря мы создаём цифровые решения, которые помогают вашему бизнесу расти и развиваться в онлайн-пространстве
              </p>
              <Button size="lg" className="rounded-full">
                Обсудить проект
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ba2bc4a9-4f18-428c-9910-30dd42a4e38f/files/af1425b7-0aec-4529-a46c-f6f7335d7040.jpg"
                alt="Создание веб-ресурсов в Калмыкии"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Полный спектр услуг для развития вашего бизнеса в интернете
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kalmykia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
              Калмыкия — территория возможностей
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Расположенная на берегу Каспийского моря, Республика Калмыкия открывает уникальные возможности для развития бизнеса. Мы помогаем не только местным предпринимателям, но и бизнесу по всей России выйти на новый уровень через создание качественных веб-ресурсов и digital-продвижение.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Реализованных проектов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
                <p className="text-muted-foreground">Опыта работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-center">
              Роботизированная система аналитики данных
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Для Клиента (расположена в облаке на сервере с локацией в Республика Калмыкия)
            </p>

            <div className="bg-background rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="font-heading font-bold text-2xl mb-6">
                Стандартный бизнес-процесс роботизации системы аналитики
              </h3>
              <p className="text-muted-foreground mb-8">
                Создание и внедрение роботизированной системы аналитики данных — это комплексный бизнес-процесс, который включает в себя несколько ключевых этапов.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                    Определение цели и задач
                  </h4>
                  <ul className="ml-11 space-y-2 text-muted-foreground">
                    <li>• Анализ потребностей: Определение для Заказчика, какие данные нужно анализировать и какие цели должны быть достигнуты</li>
                    <li>• Определение ключевых показателей эффективности: Установка метрики, по которым будет оцениваться успех системы</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                    Сбор данных
                  </h4>
                  <ul className="ml-11 space-y-2 text-muted-foreground">
                    <li>• Идентификация источников данных: Определение, откуда будут поступать данные</li>
                    <li>• Интеграция данных: Настройка процессов для сбора и интеграции данных из различных источников</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                    Выбор технологий
                  </h4>
                  <ul className="ml-11 space-y-2 text-muted-foreground">
                    <li>• Выбор инструментов аналитики: Определение технологий для анализа данных</li>
                    <li>• Роботизация процессов: Определение, какие процессы можно автоматизировать</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                    Разработка системы
                  </h4>
                  <ul className="ml-11 space-y-2 text-muted-foreground">
                    <li>• Проектирование архитектуры: Создание архитектуры автоматизированной системы</li>
                    <li>• Разработка и тестирование: Реализация системы и проведение тестирования</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                    Внедрение
                  </h4>
                  <ul className="ml-11 space-y-2 text-muted-foreground">
                    <li>• Запуск системы: Внедрение автоматизированной системы в рабочую среду</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                    Мониторинг и оптимизация
                  </h4>
                  <ul className="ml-11 space-y-2 text-muted-foreground">
                    <li>• Сбор обратной связи: Роботизированный сбор отзывов о работе системы</li>
                    <li>• Анализ результатов: Оценка эффективности работы</li>
                    <li>• Оптимизация: Внесение изменений и улучшений на основе анализа</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-xl mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3 text-sm">7</span>
                    Поддержка и обновление
                  </h4>
                  <ul className="ml-11 space-y-2 text-muted-foreground">
                    <li>• Техническая поддержка: Обеспечение поддержки автоматизированной системы Заказчику</li>
                    <li>• Обновление системы: Регулярное обновление, добавление новых функций</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading font-bold text-2xl mb-4">
                  Преимущества роботизированной системы
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Zap" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Скорость обработки данных:</strong> Автоматизация значительно ускоряет процессы анализа</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Shield" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Снижение ошибок:</strong> Роботы снижают вероятность человеческой ошибки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Brain" size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Глубокая аналитика:</strong> Применение сложных алгоритмов для глубокого понимания данных</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading font-bold text-2xl mb-4">
                  Заключение
                </h3>
                <p className="opacity-90">
                  Роботизированная система аналитики данных может значительно повысить эффективность бизнес-процессов, улучшить качество принимаемых решений и помочь в достижении стратегических целей компании
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6 text-center">
              Рекламный контент на собственных сайтах
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Размещение рекламного контента на собственных сайтах Клиента и размещение рекламного контента на собственных сайтах других бизнес-партнеров
            </p>

            <div className="bg-background rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="font-heading font-bold text-2xl mb-6">
                Стандартный бизнес-процесс размещения рекламного контента
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Размещение рекламного контента Клиента на собственных сайтах - это процесс партнерского маркетинга, при котором компания размещает свои рекламные материалы на сайтах других компаний или блогеров с целью привлечения новых клиентов и увеличения продаж.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Для начала этого процесса Клиент ищет потенциальных партнеров, у которых есть целевая аудитория, которую он хочет привлечь. Затем предлагает им размещение своего рекламного контента на их сайтах или блогах, обычно за определенную плату или комиссионное вознаграждение.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        После согласования условий размещения, Клиент предоставляет свои рекламные материалы, такие как баннеры, текстовые объявления или специальные ссылки, которые партнер (Исполнитель) размещает на своем сайте. Затем компания отслеживает эффективность своей рекламы на сайтах партнеров, используя специальные инструменты аналитики, и оплачивает партнерам за привлеченных клиентов или посетителей.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Размещение рекламного контента на сайтах партнеров является эффективным способом привлечения новых клиентов и увеличения продаж Клиентов, так как позволяет им достичь целевой аудитории через доверенные источники и увеличить свою видимость в интернете.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Готовы начать?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь с нами, чтобы обсудить ваш проект и узнать, как мы можем помочь вашему бизнесу расти
          </p>
          <Link to="/#contact">
            <Button size="lg" variant="secondary" className="rounded-full">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Александр Сербин. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebDevelopment;