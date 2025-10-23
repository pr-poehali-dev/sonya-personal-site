import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'О мне', icon: 'User' },
    { id: 'school', label: 'Учёба', icon: 'GraduationCap' },
    { id: 'exams', label: 'Экзамены', icon: 'BookOpen' },
    { id: 'friends', label: 'Друзья', icon: 'Users' },
    { id: 'family', label: 'Семья', icon: 'Home' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-gray-800">Соня</h1>
            <div className="hidden md:flex gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className="gap-2"
                >
                  <Icon name={section.icon} size={16} />
                  {section.label}
                </Button>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full animate-fade-in">
            <Card className="p-12 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/8df2a519-01bc-4453-a861-eb90912fa4d1.jpeg" 
                  alt="Соня" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-5xl font-heading font-bold mb-4 text-gray-800">Соня</h2>
              <p className="text-xl text-muted-foreground mb-6">17 лет</p>
              <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
                <Icon name="MapPin" size={20} />
                <span>Киров</span>
              </div>
            </Card>
          </div>
        </section>

        <section id="school" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50/50">
          <div className="max-w-4xl w-full animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4 text-gray-800">Учёба</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <Card className="p-10 shadow-xl">
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/80fd3e8a-8846-470f-a3c0-498c2bffdadc.png" 
                  alt="Школа № 51" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="School" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-800">Школа № 51</h3>
                  <p className="text-xl text-muted-foreground mb-2">11 «Б» класс</p>
                  <p className="text-gray-600">Выпускной класс, активная подготовка к экзаменам</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="exams" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4 text-gray-800">Экзамены</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Профильная математика', icon: 'Calculator', color: 'bg-blue-500' },
                { name: 'Русский язык', icon: 'BookText', color: 'bg-green-500' },
                { name: 'Обществознание', icon: 'Users', color: 'bg-purple-500' },
                { name: 'Английский язык', icon: 'Languages', color: 'bg-orange-500' },
              ].map((exam, index) => (
                <Card
                  key={exam.name}
                  className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg ${exam.color} flex items-center justify-center`}>
                      <Icon name={exam.icon} size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{exam.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="friends" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50/50">
          <div className="max-w-4xl w-full animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4 text-gray-800">Друзья</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <Card className="p-10 shadow-xl">
              <p className="text-center text-lg text-gray-600 mb-8">У меня есть много друзей</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group hover:shadow-lg transition-all duration-300"
                  >
                    <Icon name="Image" size={48} className="text-primary/40 group-hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="family" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold mb-4 text-gray-800">Семья</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <Card className="p-10 shadow-xl">
              <div className="mb-8">
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  {[
                    { name: 'Мама', icon: 'Heart' },
                    { name: 'Папа', icon: 'Star' },
                    { name: 'Я', icon: 'Sparkles' },
                    { name: 'Лиза (11 лет)', icon: 'Smile' },
                  ].map((member) => (
                    <div key={member.name} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                        <Icon name={member.icon} size={28} className="text-primary" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group hover:shadow-lg transition-all duration-300"
                  >
                    <Icon name="Image" size={48} className="text-primary/40 group-hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Соня. Персональный сайт-портфолио</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;