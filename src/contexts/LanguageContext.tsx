import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ru' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      projects: 'Проекты',
      workflow: 'Как я работаю',
      contact: 'Контакты'
    },
    home: {
      greeting: 'Привет, я',
      name: 'Мирбек Атанбеков',
      title: 'Front-End Developer',
      location: 'Бишкек, Кыргызстан',
      experience: '1 год опыта',
      description: 'Создаю современные и отзывчивые веб-приложения с использованием React, TypeScript и современных технологий.',
      viewWork: 'Посмотреть работы',
      contactMe: 'Связаться со мной'
    },
    about: {
      title: 'Обо мне',
      description: 'Я начинающий Front-End разработчик с 5-месячным опытом создания веб-приложений. Специализируюсь на React, TypeScript и современных CSS-фреймворках.',
      skills: 'Навыки',
      experience: 'Опыт работы'
    },
    projects: {
      title: 'Мои проекты',
      viewProject: 'Посмотреть проект',
      viewCode: 'Код'
    },
    workflow: {
      title: 'Как я работаю',
      subtitle: 'Мой подход к разработке',
      step1: 'Анализ и планирование',
      step1Desc: 'Изучаю требования, анализирую целевую аудиторию и планирую архитектуру проекта',
      step2: 'Дизайн и прототипирование',
      step2Desc: 'Создаю wireframes и прототипы, продумываю UX/UI решения',
      step3: 'Разработка',
      step3Desc: 'Пишу чистый, масштабируемый код с использованием современных технологий',
      step4: 'Тестирование',
      step4Desc: 'Провожу тестирование функциональности и кроссбраузерную совместимость',
      step5: 'Деплой и поддержка',
      step5Desc: 'Развертываю проект и обеспечиваю техническую поддержку'
    },
    contact: {
      title: 'Свяжитесь со мной',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      send: 'Отправить',
      phone: 'Телефон',
      location: 'Местоположение'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      workflow: 'My Workflow',
      contact: 'Contact'
    },
    home: {
      greeting: 'Hi, I am',
      name: 'Mirbek Atanbekov',
      title: 'Front-End Developer',
      location: 'Bishkek, Kyrgyzstan',
      experience: '1 year experience',
      description: 'I create modern and responsive web applications using React, TypeScript and modern technologies.',
      viewWork: 'View My Work',
      contactMe: 'Contact Me'
    },
    about: {
      title: 'About Me',
      description: 'I am a beginner Front-End developer with 5 months of experience creating web applications. I specialize in React, TypeScript and modern CSS frameworks.',
      skills: 'Skills',
      experience: 'Experience'
    },
    projects: {
      title: 'My Projects',
      viewProject: 'View Project',
      viewCode: 'View Code'
    },
    workflow: {
      title: 'My Workflow',
      subtitle: 'My approach to development',
      step1: 'Analysis & Planning',
      step1Desc: 'Study requirements, analyze target audience and plan project architecture',
      step2: 'Design & Prototyping',
      step2Desc: 'Create wireframes and prototypes, think through UX/UI solutions',
      step3: 'Development',
      step3Desc: 'Write clean, scalable code using modern technologies',
      step4: 'Testing',
      step4Desc: 'Conduct functionality testing and cross-browser compatibility',
      step5: 'Deploy & Support',
      step5Desc: 'Deploy the project and provide technical support'
    },
    contact: {
      title: 'Get In Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      phone: 'Phone',
      location: 'Location'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};