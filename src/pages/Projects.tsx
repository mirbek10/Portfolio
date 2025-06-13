import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from '../components/Modal';
import './Projects.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'Современный интернет-магазин с корзиной и оплатой',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'Полнофункциональный интернет-магазин с возможностью добавления товаров в корзину, оформления заказа и интеграцией с платежной системой Stripe.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Приложение для управления задачами с drag & drop',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'Интуитивное приложение для управления задачами с возможностью перетаскивания карточек между колонками и сохранением данных в localStorage.'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Прогноз погоды с красивой анимацией',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'API Integration', 'SCSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      details: 'Красивый дашборд с прогнозом погоды, анимированными элементами и интеграцией с API погодных сервисов.'
    }
  ];

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

  return (
    <motion.div
      className="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-container">
        <motion.div className="projects-header" variants={itemVariants}>
          <h1>{t('projects.title')}</h1>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="overlay-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(16, 185, 129, 0.3)",
                        "0 0 30px rgba(16, 185, 129, 0.6)",
                        "0 0 20px rgba(16, 185, 129, 0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {t('projects.viewProject')}
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <motion.span 
                      key={tech} 
                      className="tech-tag"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      className="project-link"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      className="project-link"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal onClose={() => setSelectedProject(null)}>
            <div className="project-modal">
              <motion.button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </motion.button>
              
              <img src={selectedProject.image} alt={selectedProject.title} />
              
              <div className="modal-content">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.details}</p>
                
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="modal-links">
                  {selectedProject.liveUrl && (
                    <motion.a 
                      href={selectedProject.liveUrl} 
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      Live Demo
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a 
                      href={selectedProject.githubUrl} 
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      {t('projects.viewCode')}
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;