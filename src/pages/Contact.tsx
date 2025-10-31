import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { FaTelegramPlane } from "react-icons/fa";
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.scss';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', "91013a6e-7bf1-47f5-9626-459905fbd1e6");
    formDataToSend.append('subject', 'Новый запрос с портфолио');
    formDataToSend.append('from_name', formData.name);
    formDataToSend.append('email', formData.email);
    const message = `
═══════════════════════════════
    НОВЫЙ ЗАПРОС С ВАШЕГО ПОРТФОЛИО
═══════════════════════════════

👤 ИНФОРМАЦИЯ О КЛИЕНТЕ:

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
💬 Сообщение:
${formData.message}

═══════════════════════════════
    `;
    formDataToSend.append('message', message);
    try {
      const res = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
      const result = res.then((res) => res.json());
      result.then((data) => {
        if (data.success) {
          alert("Сообщение отправлено успешно!");
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        }
      });
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      alert("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз позже.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'm51869956@gmail.com',
      href: 'mailto:m51869956@gmail.com',
      color: '#10b981'
    },
    {
      icon: FiPhone,
      label: t('contact.phone'),
      value: '+996 505 577 656',
      href: 'tel:+996555123456',
      color: '#3b82f6'
    },
    {
      icon: FiMapPin,
      label: t('contact.location'),
      value: 'Бишкек, Кыргызстан',
      href: '#',
      color: '#8b5cf6'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/mirbek10', label: 'GitHub', color: '#333' },
    { icon: FiInstagram, href: 'https://www.instagram.com/bad.b0y10/', label: 'Instagram', color: '#de2183' },
    { icon: FaTelegramPlane, href: 'https://t.me/atabekov_mirbek', label: 'Telegram', color: '#1da1f2' }
  ];

  return (
    <motion.div
      className="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="contact-container">
        <motion.div className="contact-header" variants={itemVariants}>
          <h1>{t('contact.title')}</h1>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h2>Контактная информация</h2>

            <div className="contact-list">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="contact-item"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="contact-icon"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon />
                  </motion.div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h3>Социальные сети</h3>
              <div className="social-grid">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    style={{ borderColor: social.color }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: social.color,
                      color: 'white'
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <social.icon />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-container" variants={itemVariants}>
            <h2>Отправить сообщение</h2>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <motion.div className={`form-group ${formData.name ? 'filled' : ''}`} variants={itemVariants}>
                <label htmlFor="name">{t('contact.name')}</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div className={`form-group ${formData.email ? 'filled' : ''}`} variants={itemVariants}>
                <label htmlFor="email">{t('contact.email')}</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.div className={`form-group form-textarea ${formData.message ? 'filled' : ''}`} variants={itemVariants}>
                <label htmlFor="message">{t('contact.message')}</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend />
                {t('contact.send')}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;