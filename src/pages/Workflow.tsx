import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiPenTool, FiCode, FiCheckCircle } from 'react-icons/fi';
import { BsRocketTakeoffFill } from "react-icons/bs";
import { useLanguage } from '../contexts/LanguageContext';
import './Workflow.scss';

const Workflow: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      icon: FiSearch,
      title: t('workflow.step1'),
      description: t('workflow.step1Desc'),
      color: '#10b981'
    },
    {
      icon: FiPenTool,
      title: t('workflow.step2'),
      description: t('workflow.step2Desc'),
      color: '#3b82f6'
    },
    {
      icon: FiCode,
      title: t('workflow.step3'),
      description: t('workflow.step3Desc'),
      color: '#8b5cf6'
    },
    {
      icon: FiCheckCircle,
      title: t('workflow.step4'),
      description: t('workflow.step4Desc'),
      color: '#f59e0b'
    },
    {
      icon: BsRocketTakeoffFill,
      title: t('workflow.step5'),
      description: t('workflow.step5Desc'),
      color: '#ef4444'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="workflow"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="workflow-container">
        <motion.div className="workflow-header" variants={itemVariants}>
          <h1>{t('workflow.title')}</h1>
          <p>{t('workflow.subtitle')}</p>
        </motion.div>

        <motion.div className="workflow-steps" variants={containerVariants}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="workflow-step"
              variants={stepVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: `0 20px 40px rgba(${step.color.replace('#', '')}, 0.3)`,
                transition: { duration: 0.3 }
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(-1)}
            >
              <motion.div 
                className="step-number"
                style={{ backgroundColor: step.color }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
              >
                {index + 1}
              </motion.div>
              
              <motion.div 
                className="step-icon"
                style={{ color: step.color }}
                whileHover={activeStep === index ? { rotate: 360 } : {}}
                transition={{ duration: 0.5 }}
              >
                <step.icon />
              </motion.div>
              
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <motion.div
                className="step-glow"
                style={{ 
                  background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)` 
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
        </motion.div>

        <motion.div className="workflow-timeline" variants={itemVariants}>
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="timeline-dot"
              style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + index * 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Workflow;