import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiCalendar, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Home.scss';
import DecryptedText from '@/components/DecryptedText';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-container">
        <motion.div className="home-content" variants={itemVariants}>
          <motion.p
            className="home-greeting"
            variants={itemVariants}
          >
            {t('home.greeting')}
          </motion.p>

          <motion.h1
            className="home-name"
            variants={itemVariants}
          >
            <DecryptedText
              text={t('home.name')}
              animateOn="view"
              revealDirection="start"
              className="decrypted-text"
              parentClassName="home-name-parent"
              speed={70}
              sequential={true}
              // useOriginalCharsOnly={true}
              // characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            />
          </motion.h1>

          <motion.h2
            className="home-title"
            variants={itemVariants}
          >
            <DecryptedText
              text={t('home.title')}
              animateOn="view"
              revealDirection="start"
              className="decrypted-text"
              parentClassName="home-title-parent"
              speed={50}
              sequential={true}
              // useOriginalCharsOnly={true}
              // characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
            />
          </motion.h2>

          <motion.div
            className="home-info"
            variants={itemVariants}
          >
            <motion.div
              className="info-item"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiMapPin className="info-icon" />
              <span>{t('home.location')}</span>
            </motion.div>
            <motion.div
              className="info-item"
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiCalendar className="info-icon" />
              <span>{t('home.experience')}</span>
            </motion.div>
          </motion.div>

          <motion.p
            className="home-description"
            variants={itemVariants}
          >
            <DecryptedText
              text={t('home.description')}
              animateOn="view"
              revealDirection="start"
              className="decrypted-text"
              parentClassName="home-title-parent"
              speed={50}
              sequential={true}
            />
          </motion.p>

          <motion.div
            className="home-buttons"
            variants={itemVariants}
          >
            <Link to="/projects" className="btn btn-primary">
              <motion.span
                className="btn-content"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t('home.viewWork')}
                <FiArrowRight />
              </motion.span>
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t('home.contactMe')}
              </motion.span>
            </Link>

            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              CV
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-avatar"
          variants={itemVariants}
        >
          <motion.div
            className="avatar-container"
            variants={floatingVariants}
            animate="animate"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="avatar-image">
              <div className="avatar-placeholder" >MA</div>
            </div>
            <motion.div
              className="avatar-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="avatar-glow"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;