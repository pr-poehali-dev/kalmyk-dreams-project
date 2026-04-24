import Icon from '@/components/ui/icon';

export default function HomeFooter() {
  return (
    <footer className="bg-foreground text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl">ИП Сербин</span>
            </div>
            <p className="text-sm text-gray-400">
              Строительство каркасных домов под ключ по всей России с 2005 года
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Каркасные дома</li>
              <li>Земельные участки</li>
              <li>Аренда недвижимости</li>
              <li>Веб-разработка</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>О нас</li>
              <li>Проекты</li>
              <li>Технологии</li>
              <li>Отзывы</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+7 (XXX) XXX-XX-XX</li>
              <li>info@serbin-build.ru</li>
              <li>Калмыкия, Зеленоград</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 ИП Сербин Алексей Юрьевич (ОГРНИП 305616834600037). Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
