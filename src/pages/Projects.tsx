import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import Modal from '../components/Modal';
import './Projects.scss';
import img1 from '../Images/projecr1.png';
import img2 from '../Images/project2.png';
import img3 from '../Images/project3.png';
import img4 from '../Images/project4.png';
import img5 from '../Images/project5.png';




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
      title: 'Web Bicycle',
      description: 'Современный интернет-магазин с корзиной и оплатой',
      image: img1,
      technologies: ['React', 'Sass', 'Firebase', 'Framer Motion', "Redax-toolkit"],
      liveUrl: 'https://bicycle-eight.vercel.app/',
      githubUrl: 'https://github.com/mirbek10/bicycle',
      details: 'Сайт современного интернет-магазина с корзиной и оплатой. Использованы React, TypeScript, Firebase, Framer Motion.'
    },
    {
      id: 2,
      title: 'Snake Game',
      description: 'Интуитивная игра "Змейка" с возможностью сохранения рекордов',
      image: img2,
      technologies: ['React', 'JavaScript', 'SCSS', 'Local Storage', 'Redux-Toolkit'],
      liveUrl: 'https://snake-pi-five.vercel.app/',
      githubUrl: 'https://github.com/mirbek10/snake',
      details: 'Интуитивная игра "Змейка" с возможностью сохранения рекордов. Использованы React, JavaScript, CSS3, Local Storage.'
    },
    {
      id: 3,
      title: 'Tic Tac Toe',
      description: 'Интуитивная игра "Крестики-нолики" ',
      image: img3,
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage',],
      liveUrl: 'https://tic-tac-toe-nine-rouge.vercel.app/',
      githubUrl: 'https://github.com/mirbek10/Tic-tac-toe',
      details: 'Интуитивная игра "Крестики-нолики". Использованы React, JavaScript, CSS3, Local Storage.'
    },
    {
      id: 4,
      title: 'Cinema App',
      description: 'Современный интернет-кинопоиск с редакторами и поиском по жанрам',
      image: img4,
      technologies: ['React', 'JavaScript', 'CSS3', 'API',],
      liveUrl: 'https://cinema-xi-khaki.vercel.app/',
      githubUrl: 'https://github.com/mirbek10/Cinema',
      details: 'Современный интернет-кинопоиск с редакторами и поиском по жанрам. Использованы React, JavaScript, CSS3, API.'
    },
    {
      id:5,
      title: 'CoctelDB',
      description: 'Современный сайт для заказа напитков',
      image: img5,
      technologies: ['React', 'JavaScript', 'CSS3', 'Redux-Toolkit',],
      liveUrl: 'https://coctel-db.vercel.app/',
      githubUrl: 'https://github.com/mirbek10/CoctelDb',
      details: 'Современный сайт для заказа напитков с поиском и фильтрами . Использованы React, JavaScript, CSS3, .'
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
                      target="_blank"
                      rel="noopener noreferrer"
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