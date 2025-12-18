import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  const [activeTab, setActiveTab] = useState('encryption');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-purple-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SecureAI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">Как работает</a>
              <a href="#use-cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex">Начать</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              🔒 Новое поколение защиты данных
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Защита конфиденциальности при работе с ИИ
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Безопасно используйте AI-модели без риска утечки корпоративных данных. 
              Шифрование, анализ рисков и полный контроль над информацией.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 h-14 shadow-lg hover:shadow-xl transition-all">
                Попробовать бесплатно
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Смотреть демо
                <Icon name="Play" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Возможности</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Комплексная защита данных</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Многоуровневая система безопасности для работы с AI-моделями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Lock',
                title: 'Сквозное шифрование',
                description: 'Военный стандарт AES-256 для защиты данных на всех этапах обработки',
                color: 'text-primary'
              },
              {
                icon: 'ShieldCheck',
                title: 'Анализ рисков',
                description: 'Автоматическое выявление конфиденциальных данных перед отправкой в AI',
                color: 'text-secondary'
              },
              {
                icon: 'Eye',
                title: 'Мониторинг в реальном времени',
                description: 'Контроль всех взаимодействий с AI-моделями и журналирование',
                color: 'text-accent'
              },
              {
                icon: 'UserCheck',
                title: 'Управление доступом',
                description: 'Гранулярные права доступа и ролевая модель для команды',
                color: 'text-primary'
              },
              {
                icon: 'FileCheck',
                title: 'Соответствие стандартам',
                description: 'GDPR, HIPAA, SOC 2 — полное соответствие требованиям',
                color: 'text-secondary'
              },
              {
                icon: 'Zap',
                title: 'Без потери производительности',
                description: 'Защита данных без замедления работы AI-моделей',
                color: 'text-accent'
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-${feature.color.split('-')[1]}/5 flex items-center justify-center mb-4`}>
                    <Icon name={feature.icon} className={feature.color} size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-purple-50/50 to-white/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Процесс</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простая интеграция и автоматическая защита в 4 шага
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block" />
              
              {[
                {
                  step: '01',
                  title: 'Интеграция',
                  description: 'Подключите SecureAI к вашим AI-сервисам через API за 5 минут. Поддержка всех популярных моделей.',
                  icon: 'Plug'
                },
                {
                  step: '02',
                  title: 'Анализ данных',
                  description: 'Система автоматически сканирует запросы на наличие конфиденциальной информации: персональные данные, коммерческая тайна, финансовые данные.',
                  icon: 'Search'
                },
                {
                  step: '03',
                  title: 'Шифрование',
                  description: 'Конфиденциальные данные шифруются или заменяются токенами перед отправкой в AI-модель. Контекст сохраняется.',
                  icon: 'Lock'
                },
                {
                  step: '04',
                  title: 'Безопасный результат',
                  description: 'Получайте ответы от AI с автоматической дешифровкой. Полный аудит всех операций в защищенном журнале.',
                  icon: 'CheckCircle'
                }
              ].map((step, index) => (
                <div key={index} className="relative flex gap-8 mb-12 last:mb-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon name={step.icon} className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-20 px-6 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Применение</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кейсы использования</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              SecureAI защищает данные в разных отраслях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'Building2',
                title: 'Корпоративный сектор',
                description: 'Безопасная работа с ChatGPT и другими AI для анализа документов, составления отчетов без риска утечки коммерческой тайны.',
                stats: '85% компаний используют AI небезопасно'
              },
              {
                icon: 'HeartPulse',
                title: 'Здравоохранение',
                description: 'Защита медицинских данных при использовании AI для диагностики и обработки документации пациентов. Соответствие HIPAA.',
                stats: '100% защита персональных данных'
              },
              {
                icon: 'Scale',
                title: 'Юридические фирмы',
                description: 'Конфиденциальная работа с AI для анализа договоров, судебной практики без нарушения адвокатской тайны.',
                stats: 'Полное соответствие регуляторам'
              },
              {
                icon: 'Banknote',
                title: 'Финансовый сектор',
                description: 'Безопасное использование AI для анализа рынков, кредитного скоринга с защитой финансовых данных клиентов.',
                stats: 'SOC 2 Type II сертификация'
              }
            ].map((useCase, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-secondary/50 transition-all hover:shadow-xl p-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center shrink-0">
                      <Icon name={useCase.icon} className="text-secondary" size={32} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{useCase.title}</CardTitle>
                      <Badge variant="secondary" className="mb-3">{useCase.stats}</Badge>
                      <CardDescription className="text-base">{useCase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-white/50 to-purple-50/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Тарифы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₽9,900',
                period: '/месяц',
                description: 'Для небольших команд',
                features: [
                  'До 10 пользователей',
                  'До 100,000 запросов/мес',
                  'Базовое шифрование',
                  'Анализ рисков',
                  'Email поддержка'
                ],
                highlighted: false
              },
              {
                name: 'Business',
                price: '₽29,900',
                period: '/месяц',
                description: 'Для растущих компаний',
                features: [
                  'До 100 пользователей',
                  'До 1,000,000 запросов/мес',
                  'Продвинутое шифрование',
                  'Анализ рисков + мониторинг',
                  'Приоритетная поддержка 24/7',
                  'Кастомные политики безопасности'
                ],
                highlighted: true
              },
              {
                name: 'Enterprise',
                price: 'От ₽99,900',
                period: '/месяц',
                description: 'Для крупного бизнеса',
                features: [
                  'Неограниченные пользователи',
                  'Неограниченные запросы',
                  'Военное шифрование',
                  'Полный аудит и compliance',
                  'Выделенная поддержка',
                  'On-premise развертывание',
                  'SLA 99.9%'
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all hover:shadow-2xl animate-scale-in ${
                  plan.highlighted 
                    ? 'border-4 border-primary scale-105 shadow-xl' 
                    : 'border-2 hover:border-primary/30'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-secondary text-white px-6 py-2 text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="mb-4">{plan.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={20} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6" 
                    size="lg"
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.highlighted ? 'Начать сейчас' : 'Выбрать план'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">О компании</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Миссия SecureAI</h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              SecureAI основана командой экспертов в области кибербезопасности и искусственного интеллекта 
              с опытом работы в ведущих технологических компаниях.
            </p>
            <p>
              Мы верим, что AI должен быть доступен каждой компании, но не за счет безопасности. 
              Наша миссия — сделать использование AI-технологий безопасным и соответствующим всем 
              требованиям регуляторов.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                { number: '500+', label: 'Компаний доверяют нам' },
                { number: '10M+', label: 'Защищенных запросов' },
                { number: '99.9%', label: 'Uptime SLA' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-purple-50/50 to-white/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы начать? Наша команда поможет внедрить SecureAI
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <Icon name="Mail" className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:info@secureai.ru" className="text-primary hover:underline">
                    info@secureai.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <Icon name="Phone" className="text-secondary shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold mb-1">Телефон</div>
                  <a href="tel:+74951234567" className="text-secondary hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <Icon name="MapPin" className="text-accent shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-semibold mb-1">Офис</div>
                  <p className="text-muted-foreground">
                    Москва, Пресненская наб., 12<br />
                    Москва-Сити, Башня Федерация
                  </p>
                </div>
              </div>

              <Button size="lg" className="w-full mt-4">
                Запросить демо
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={28} />
              <span className="text-xl font-bold">SecureAI</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              <a href="#" className="hover:text-primary transition-colors">Документация</a>
            </div>
            <div className="text-sm text-white/70">
              © 2024 SecureAI. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;