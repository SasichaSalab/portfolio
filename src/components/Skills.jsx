import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView
import react_icon from '../assets/react.png';
import vue from '../assets/vue.png';
import tailwind from '../assets/tailwind.png';
import spring from '../assets/spring.png';
import flutter from '../assets/flutter.png';
import bootstap from '../assets/bootstap.png';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
import html from '../assets/html.png';
import mysql from '../assets/mysql.png';
import next from '../assets/next.png';
import laravel from '../assets/laravel.png';

const skills = [
  { src: react_icon, name: 'react.js' },
  { src: vue, name: 'vue.js' },
  { src: tailwind, name: 'tailwind' },
  { src: spring, name: 'spring boot' },
  { src: flutter, name: 'flutter' },
  { src: bootstap, name: 'bootstrap' },
  { src: css, name: 'css' },
  { src: figma, name: 'figma' },
  { src: html, name: 'html' },
  { src: mysql, name: 'MySQL' },
  { src: next, name: 'next.js' },
  { src: laravel, name: 'laravel' },
];

const getItemsPerPage = () => {
  if (window.innerWidth >= 1024) {
    return 12; // Large screens
  } else if (window.innerWidth >= 768) {
    return 8; // Medium screens
  } else if (window.innerWidth >= 392) {
    return 4; // Medium screens
  }
  else if (window.innerWidth >= 350) {
    return 2; // Medium screens
  } else {
    return 1; // Small screens
  }
};

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(1); // Reset to first page on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = skills.slice(startIndex, startIndex + itemsPerPage);

  // useInView hook to track visibility of skills grid
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger animation when 20% of element is in view
  });

  return (
    <div className='w-full flex flex-col justify-center items-center gap-2 p-5 h-screen mt-96 xl:mt-0 lg:mt-0 '>
      <motion.div
        ref={ref} // Attach ref to element you want to track
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 2 }}
      >
        <Typography variant='h4' className='uppercase'>TECHNICAL SKILLS</Typography>
      </motion.div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 p-5'>
        {currentItems.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-transparent w-32 h-32 rounded-3xl m-2 bg-white shadow-lg items-center flex flex-col justify-center"
            whileHover={{ scale: [null, 1.5, 1.4]  }}
            transition={{ duration: 2 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          >
            <div className='w-20 h-20'>
              <img src={skill.src} alt={skill.name} className='w-full h-full object-contain rounded-tl-3xl rounded-bl-3xl' />
            </div>
            <p className='uppercase'>{skill.name}</p>
          </motion.div>
        ))}
      </div>
      <div className='flex justify-center mt-5 xl:hidden lg:hidden'>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='px-4 py-2 mx-2 bg-custom-gradient rounded hover:bg-gray-300 '
        >
          Prev
        </button>
        <span className='px-4 py-2'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className='px-4 py-2 mx-2 bg-custom-gradient rounded hover:bg-gray-300'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Skills;
