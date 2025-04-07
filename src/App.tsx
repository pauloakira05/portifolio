import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Phone, MapPin, GraduationCap, Briefcase, Languages, Award, Brain, Sun, Moon, ArrowUp } from 'lucide-react';
import logo from './logo.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle scroll position for animations
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'}`}>
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 transform ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${darkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 nav-logo" 
              style={{
                animation: mounted ? 'fadeInDown 0.5s ease-out forwards' : 'none'
              }}
            />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-500 hover:scale-110 ${
                darkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="flex space-x-6">
            {['about', 'experience', 'skills', 'education'].map((section, index) => (
              <a
                key={section}
                href={`#${section}`}
                className={`hover-link ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-500 transform hover:scale-110`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: mounted ? 'fadeInDown 0.5s ease-out forwards' : 'none'
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className={`pt-24 pb-16 transition-colors duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              className={`text-5xl font-bold mb-4 hover-title bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600`}
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out forwards' : 'none'
              }}
            >
              Paulo Akira Okama
            </h1>
            <p 
              className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out 0.2s forwards' : 'none',
                opacity: mounted ? 1 : 0
              }}
            >
              Engenharia de Software | Experiências Interativas | UX/UI
            </p>
            <div 
              className="flex justify-center space-x-6"
              style={{
                animation: mounted ? 'fadeInUp 0.8s ease-out 0.4s forwards' : 'none',
                opacity: mounted ? 1 : 0
              }}
            >
              <a href="mailto:pauloakira72@gmail.com" className={`group flex items-center hover-link ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-500`}>
                <Mail className="h-5 w-5 mr-2 hover-icon" />
                <span>pauloakira72@gmail.com</span>
              </a>
              <a href="tel:11948755290" className={`group flex items-center hover-link ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-500`}>
                <Phone className="h-5 w-5 mr-2 hover-icon" />
                <span>11948755290</span>
              </a>
              <a href="https://www.linkedin.com/in/paulo-akira-okama" target="_blank" rel="noopener noreferrer" className={`group flex items-center hover-link ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-500`}>
                <Linkedin className="h-5 w-5 mr-2 hover-icon" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <section 
          id="about" 
          className={`hover-card rounded-xl shadow-lg p-8 mb-12 transform transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          style={{
            animation: mounted ? 'fadeInUp 0.8s ease-out 0.6s forwards' : 'none',
            opacity: mounted ? 1 : 0,
            transform: `translateY(${scrollPosition * 0.1}px)`
          }}
        >
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resumo Profissional</h2>
          <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Estudante de Engenharia de Software na FIAP, com experiência na criação e validação de experiências interativas, gamificação e UX/UI. Atuo na Sábios, onde desenvolvo minigames e desafios interativos, realizando testes, QA e documentação de erros. Tenho grande interesse em Inteligência Artificial para Negócios, buscando maneiras estratégicas de aplicar IA para otimização de processos e experiências digitais.
          </p>
        </section>

        {/* Experience Section */}
        <section 
          id="experience" 
          className={`hover-card rounded-xl shadow-lg p-8 mb-12 transform transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          style={{
            animation: mounted ? 'fadeInUp 0.8s ease-out 0.8s forwards' : 'none',
            opacity: mounted ? 1 : 0,
            transform: `translateY(${scrollPosition * 0.1}px)`
          }}
        >
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <Briefcase className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
            Experiência Profissional
          </h2>
          <div className="border-l-2 border-blue-600 pl-4">
            <div className="mb-6">
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Criador de Experiências Interativas | Minigames & UX</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sábios • 02/2025 - Atual</p>
              <ul className="mt-2 list-disc list-inside space-y-2">
                {[
                  "Desenvolvimento de experiências interativas e gamificadas",
                  "Realização de testes (QA) e documentação de erros",
                  "Criação de checklists estruturados",
                  "Colaboração com equipes para aprimorar UX"
                ].map((item, index) => (
                  <li 
                    key={item} 
                    className={`hover-list-item ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-500`}
                    style={{
                      animation: mounted ? `fadeInRight 0.5s ease-out ${1 + index * 0.1}s forwards` : 'none',
                      opacity: mounted ? 1 : 0
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section 
            className={`hover-card rounded-xl shadow-lg p-8 transform transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 1s forwards' : 'none',
              opacity: mounted ? 1 : 0,
              transform: `translateY(${scrollPosition * 0.1}px)`
            }}
          >
            <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Brain className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
              Habilidades Técnicas
            </h2>
            <div className="space-y-4">
              {[
                "Experiências Interativas & Gamificação",
                "Testes e QA",
                "UX/UI",
                "IA para Negócios",
                "Gestão de Processos",
                "Documentação Técnica"
              ].map((skill, index) => (
                <div 
                  key={skill} 
                  className="flex items-center group hover-skill"
                  style={{
                    animation: mounted ? `fadeInRight 0.5s ease-out ${1.2 + index * 0.1}s forwards` : 'none',
                    opacity: mounted ? 1 : 0
                  }}
                >
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 overflow-hidden`}>
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 group-hover:w-full hover-progress"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                  <span className={`ml-4 text-sm min-w-[200px] ${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-blue-600 transition-colors duration-300`}>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          <section 
            className={`hover-card rounded-xl shadow-lg p-8 transform transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 1.2s forwards' : 'none',
              opacity: mounted ? 1 : 0,
              transform: `translateY(${scrollPosition * 0.1}px)`
            }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Soft Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Atenção aos Detalhes",
                "Resolução de Problemas",
                "Trabalho em Equipe",
                "Comunicação Clara",
                "Gestão do Tempo"
              ].map((skill, index) => (
                <div 
                  key={skill} 
                  className={`hover-soft-skill rounded-lg p-4 transform transition-all duration-500 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-600'}`}
                  style={{
                    animation: mounted ? `fadeInUp 0.5s ease-out ${1.4 + index * 0.1}s forwards` : 'none',
                    opacity: mounted ? 1 : 0
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Education & Certifications */}
        <div id="education" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section 
            className={`hover-card rounded-xl shadow-lg p-8 transform transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 1.4s forwards' : 'none',
              opacity: mounted ? 1 : 0,
              transform: `translateY(${scrollPosition * 0.1}px)`
            }}
          >
            <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
              Formação Acadêmica
            </h2>
            <div className="mb-4">
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Engenharia de Software</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>FIAP • 3° semestre</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Previsão de formatura: dezembro de 2027</p>
            </div>
          </section>

          <section 
            className={`hover-card rounded-xl shadow-lg p-8 transform transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{
              animation: mounted ? 'fadeInUp 0.8s ease-out 1.6s forwards' : 'none',
              opacity: mounted ? 1 : 0,
              transform: `translateY(${scrollPosition * 0.1}px)`
            }}
          >
            <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Award className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
              Certificações
            </h2>
            <ul className="space-y-3">
              {[
                "IA para Negócios | Alura (Em andamento)",
                "Design Thinking – Process | Alura",
                "Jornada Inteligência Artificial | Hashtag",
                "Jornada Python | Hashtag",
                "Excel | Simplifica Treinamentos"
              ].map((cert, index) => (
                <li 
                  key={cert} 
                  className={`hover-list-item flex items-center transition-all duration-500 hover:translate-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  style={{
                    animation: mounted ? `fadeInRight 0.5s ease-out ${1.8 + index * 0.1}s forwards` : 'none',
                    opacity: mounted ? 1 : 0
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Languages */}
        <section 
          className={`hover-card rounded-xl shadow-lg p-8 transform transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          style={{
            animation: mounted ? 'fadeInUp 0.8s ease-out 2s forwards' : 'none',
            opacity: mounted ? 1 : 0,
            transform: `translateY(${scrollPosition * 0.1}px)`
          }}
        >
          <h2 className={`text-3xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <Languages className="h-6 w-6 mr-2 text-blue-600 animate-pulse" />
            Idiomas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { language: "Português", level: "Nativo" },
              { language: "Inglês", level: "Intermediário" },
              { language: "Espanhol", level: "Básico" }
            ].map((lang, index) => (
              <div 
                key={lang.language} 
                className={`hover-language rounded-lg p-6 transform transition-all duration-500 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                style={{
                  animation: mounted ? `fadeInUp 0.5s ease-out ${2.2 + index * 0.1}s forwards` : 'none',
                  opacity: mounted ? 1 : 0
                }}
              >
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{lang.language}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{lang.level}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        className={`border-t transition-colors duration-500 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
        style={{
          animation: mounted ? 'fadeInUp 0.8s ease-out 2.4s forwards' : 'none',
          opacity: mounted ? 1 : 0,
          transform: `translateY(${scrollPosition * 0.1}px)`
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-6">
            <MapPin className={`h-5 w-5 hover-float ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>São Paulo - SP</span>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>•</span>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Disponível para oportunidades</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;