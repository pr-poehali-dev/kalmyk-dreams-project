import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

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

const stages = [
  {
    number: 1,
    title: "Консультация и проектирование",
    description: "Обсуждаем ваши пожелания, подбираем проект или создаем индивидуальный"
  },
  {
    number: 2,
    title: "Подготовка участка",
    description: "Планировка территории и закладка фундамента"
  },
  {
    number: 3,
    title: "Возведение каркаса",
    description: "Монтаж силового каркаса из качественной древесины"
  },
  {
    number: 4,
    title: "Утепление и изоляция",
    description: "Установка теплоизоляции и защитных мембран"
  },
  {
    number: 5,
    title: "Отделка и инженерия",
    description: "Внутренняя и внешняя отделка, коммуникации"
  },
  {
    number: 6,
    title: "Сдача объекта",
    description: "Финальная проверка, передача документов и ключей"
  }
];

export default function FrameHousesTechStages() {
  return (
    <>
      {/* Technologies Section */}
      <section id="технологии" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white text-base px-6 py-2">
              Технологии
            </Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-4">
              Как мы строим
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные материалы и проверенные технологии строительства
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={tech.icon} size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="этапы" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-center mb-4">
            Этапы строительства
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Прозрачный процесс от консультации до передачи ключей
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="bg-background rounded-2xl p-6 flex items-start space-x-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  {stage.number}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2005</div>
              <p className="opacity-90">Год основания</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="opacity-90">Построенных домов</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2-3</div>
              <p className="opacity-90">Месяца на строительство</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="opacity-90">Лет срок службы</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
