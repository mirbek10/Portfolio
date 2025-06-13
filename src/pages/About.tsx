import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone, FiDatabase } from 'react-icons/fi';
import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiSass, SiGit } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import './About.scss';

const About: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: 'React', icon: SiReact, level: 80, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, level: 60, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, level: 75, color: '#F7DF1E' },
    { name: 'HTML5', icon: SiHtml5, level: 90, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, level: 85, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: '#06B6D4' },
    { name: 'Sass/SCSS', icon: SiSass, level: 75, color: '#CC6699' },
    { name: 'Git', icon: SiGit, level: 70, color: '#F05032' }
  ];

  const services = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Создание современных веб-приложений с использованием React и TypeScript',
      color: '#10b981'
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Адаптивные интерфейсы для всех типов устройств',
      color: '#3b82f6'
    },
    {
      icon: FiLayers,
      title: 'UI/UX Implementation',
      description: 'Воплощение дизайн-макетов в функциональные интерфейсы',
      color: '#8b5cf6'
    },
    {
      icon: FiDatabase,
      title: 'API Integration',
      description: 'Интеграция с REST API и работа с данными',
      color: '#f59e0b'
    }
  ];

  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-container">
        <motion.div className="about-header" variants={itemVariants}>
          <h1>{t('about.title')}</h1>
          <p>{t('about.description')}</p>
        </motion.div>

        <motion.section className="about-skills" variants={itemVariants}>
          <h2>{t('about.skills')}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: `0 20px 40px ${skill.color}30`
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="skill-icon"
                  style={{ color: skill.color }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon />
                </motion.div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
                <motion.span 
                  className="skill-percentage"
                  style={{ color: skill.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {skill.level}%
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="about-services" variants={itemVariants}>
          <h2>Услуги</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 5,
                  boxShadow: `0 20px 40px ${service.color}30`
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="service-icon"
                  style={{ color: service.color }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon />
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.div
                  className="service-glow"
                  style={{ 
                    background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)` 
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="about-experience" variants={itemVariants}>
          <h2>{t('about.experience')}</h2>
          <div className="timeline">
            <motion.div
              className="timeline-item"
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="timeline-marker"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(16, 185, 129, 0.7)",
                    "0 0 0 10px rgba(16, 185, 129, 0)",
                    "0 0 0 0 rgba(16, 185, 129, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              />
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <p className="timeline-period">2023 - Настоящее время</p>
                <p>Изучение и практика современных технологий веб-разработки. Создание pet-проектов и изучение лучших практик.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;