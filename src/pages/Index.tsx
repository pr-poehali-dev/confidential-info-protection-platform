import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingShapes from '@/components/FloatingShapes';
import { InteractiveCard } from '@/components/InteractiveCard';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingShapes />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-primary/20 shadow-lg shadow-primary/5' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                <Icon name="Shield" className="text-primary relative z-10 group-hover:scale-110 transition-transform" size={32} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
                SecureAI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-white/70 hover:text-primary transition-all hover:scale-105">Возможности</a>
              <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-primary transition-all hover:scale-105">Как работает</a>
              <a href="#use-cases" className="text-sm font-medium text-white/70 hover:text-primary transition-all hover:scale-105">Кейсы</a>
              <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-primary transition-all hover:scale-105">Цены</a>
              <a href="#about" className="text-sm font-medium text-white/70 hover:text-primary transition-all hover:scale-105">О нас</a>
              <a href="#contact" className="text-sm font-medium text-white/70 hover:text-primary transition-all hover:scale-105">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all group">
              Начать
              <Icon name="Sparkles" className="ml-2 group-hover:rotate-12 transition-transform" size={16} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/30 backdrop-blur-xl px-6 py-2 text-sm hover:bg-primary/20 transition-all cursor-pointer">
              <Icon name="Lock" className="inline mr-2" size={16} />
              Новое поколение защиты данных
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent leading-tight animate-gradient-x">
              Защита конфиденциальности при работе с ИИ
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Безопасно используйте AI-модели без риска утечки корпоративных данных. 
              Шифрование военного уровня, анализ рисков и полный контроль.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="text-lg px-10 h-16 bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all group text-white border-0 hover:scale-105">
                Попробовать бесплатно
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 h-16 border-2 border-primary/30 bg-transparent text-white hover:bg-primary/10 hover:border-primary transition-all backdrop-blur-xl hover:scale-105">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
              {[
                { number: '99.9%', label: 'Uptime SLA', icon: 'TrendingUp' },
                { number: '10M+', label: 'Защищенных запросов', icon: 'Shield' },
                { number: '500+', label: 'Компаний доверяют', icon: 'Users' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <Icon name={stat.icon} className="mx-auto mb-3 text-primary" size={28} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/30 backdrop-blur-xl">
              <Icon name="Zap" className="inline mr-2" size={14} />
              Возможности
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Комплексная защита данных</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
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
              <InteractiveCard key={index}>
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-primary/50 transition-all group animate-slide-up shadow-xl" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color.replace('text-', 'from-')}/20 blur-xl rounded-xl`} />
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative backdrop-blur-xl border border-primary/30 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon name={feature.icon} className={feature.color} size={32} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-white/60">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-32 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 backdrop-blur-xl">
              <Icon name="Workflow" className="inline mr-2" size={14} />
              Процесс
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Как это работает</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Простая интеграция и автоматическая защита в 4 шага
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block opacity-30" />
              
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
                <div key={index} className="relative flex gap-8 mb-16 last:mb-0 group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="hidden md:flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl shadow-2xl z-10 relative group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  <InteractiveCard className="flex-1">
                    <Card className="border-2 border-primary/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-primary/50 transition-all shadow-xl">
                      <CardHeader>
                        <div className="flex items-start gap-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-xl" />
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shrink-0 relative border border-primary/30 shadow-lg">
                              <Icon name={step.icon} className="text-primary" size={28} />
                            </div>
                          </div>
                          <div>
                            <CardTitle className="text-3xl mb-3 text-white">{step.title}</CardTitle>
                            <CardDescription className="text-lg text-white/60 leading-relaxed">{step.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </InteractiveCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-32 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/30 backdrop-blur-xl">
              <Icon name="Briefcase" className="inline mr-2" size={14} />
              Применение
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Кейсы использования</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              SecureAI защищает данные в разных отраслях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
              <InteractiveCard key={index}>
                <Card className="border-2 border-secondary/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl hover:border-secondary/50 transition-all p-2 group animate-scale-in shadow-xl" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-2xl" />
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shrink-0 relative border border-secondary/30 group-hover:scale-110 transition-transform shadow-lg">
                          <Icon name={useCase.icon} className="text-secondary" size={36} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-3 text-white">{useCase.title}</CardTitle>
                        <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">{useCase.stats}</Badge>
                        <CardDescription className="text-base text-white/60 leading-relaxed">{useCase.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 backdrop-blur-xl">
              <Icon name="DollarSign" className="inline mr-2" size={14} />
              Тарифы
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Прозрачные цены</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              <InteractiveCard 
                key={index} 
                className={`relative overflow-hidden animate-scale-in ${plan.highlighted ? 'md:scale-110' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-secondary text-white px-8 py-3 text-sm font-semibold z-10 rounded-bl-2xl">
                    <Icon name="Star" className="inline mr-1" size={14} />
                    Популярный
                  </div>
                )}
                <Card className={`border-2 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl transition-all shadow-xl ${
                  plan.highlighted 
                    ? 'border-primary/50 shadow-2xl shadow-primary/30' 
                    : 'border-primary/20 hover:border-primary/40'
                }`}>
                  <CardHeader className="text-center pb-8 pt-10">
                    <CardTitle className="text-3xl mb-3 text-white">{plan.name}</CardTitle>
                    <CardDescription className="mb-6 text-white/60">{plan.description}</CardDescription>
                    <div className="flex flex-col sm:flex-row items-baseline justify-center gap-2">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/50 text-base sm:text-lg">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={20} />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                    <Button 
                      className={`w-full mt-8 h-14 text-base ${
                        plan.highlighted 
                          ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:shadow-primary/50 text-white border-0' 
                          : 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/20'
                      } transition-all hover:scale-105`}
                      size="lg"
                    >
                      {plan.highlighted ? 'Начать сейчас' : 'Выбрать план'}
                      <Icon name="ArrowRight" className="ml-2" size={18} />
                    </Button>
                  </CardContent>
                </Card>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/30 backdrop-blur-xl">
              <Icon name="Info" className="inline mr-2" size={14} />
              О компании
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Миссия SecureAI</h2>
          </div>
          
          <InteractiveCard>
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl p-8 shadow-xl">
              <CardContent className="space-y-8 text-lg text-white/70 leading-relaxed">
                <p>
                  SecureAI основана командой экспертов в области кибербезопасности и искусственного интеллекта 
                  с опытом работы в ведущих технологических компаниях.
                </p>
                <p>
                  Мы верим, что AI должен быть доступен каждой компании, но не за счет безопасности. 
                  Наша миссия — сделать использование AI-технологий безопасным и соответствующим всем 
                  требованиям регуляторов.
                </p>
              </CardContent>
            </Card>
          </InteractiveCard>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/30 backdrop-blur-xl">
              <Icon name="Mail" className="inline mr-2" size={14} />
              Контакты
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Свяжитесь с нами</h2>
            <p className="text-xl text-white/60">
              Готовы начать? Наша команда поможет внедрить SecureAI
            </p>
          </div>

          <InteractiveCard>
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl shadow-xl">
              <CardContent className="pt-8 space-y-6">
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800/70 transition-all group cursor-pointer border border-primary/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
                    <Icon name="Mail" className="text-primary shrink-0 mt-1 relative z-10 group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-white text-lg">Email</div>
                    <a href="mailto:info@secureai.ru" className="text-primary hover:text-secondary transition-colors text-lg">
                      info@secureai.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800/70 transition-all group cursor-pointer border border-secondary/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full group-hover:bg-secondary/30 transition-all" />
                    <Icon name="Phone" className="text-secondary shrink-0 mt-1 relative z-10 group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-white text-lg">Телефон</div>
                    <a href="tel:+74951234567" className="text-secondary hover:text-primary transition-colors text-lg">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800/70 transition-all group cursor-pointer border border-accent/10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-all" />
                    <Icon name="MapPin" className="text-accent shrink-0 mt-1 relative z-10 group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-white text-lg">Офис</div>
                    <p className="text-white/60 text-lg">
                      Москва, Пресненская наб., 12<br />
                      Москва-Сити, Башня Федерация
                    </p>
                  </div>
                </div>

                <Button size="lg" className="w-full mt-8 h-16 text-lg bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all group text-white border-0 hover:scale-105">
                  Запросить демо
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </CardContent>
            </Card>
          </InteractiveCard>
        </div>
      </section>

      <footer className="bg-slate-950/80 backdrop-blur-xl border-t border-white/10 text-white py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <Icon name="Shield" size={32} className="text-primary relative z-10" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SecureAI</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              <a href="#" className="hover:text-primary transition-colors">Документация</a>
            </div>
            <div className="text-sm text-white/50">
              © 2024 SecureAI. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;