import React from 'react';
import { Typography, Button, useTheme } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import mercury from '../assets/mercury.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = ({ aboutMeRef }) => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
            },
        }),
    };
    const theme = useTheme();

    const scrollToAboutMe = () => {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='w-full h-screen px-5 flex flex-col justify-center items-center xl:mb-0 lg:mb-0 md:mb-96 sm:mb-96 mb-96'>
            <div className='uppercase h-1/3 w-full flex flex-row items-center justify-center text-center'>
                <p className='text-responsive text-center'>
                    <Typewriter
                        words={['Welcome to Sasicha\'s Portfolio']}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={90}
                        delaySpeed={2000}
                    />
                </p>
            </div>
            <div className='w-full px-5 flex flex-row justify-center items-start h-1/2 mb-10'>
                <div className='absolute flex flex-col items-start justify-center gap-3 z-40 mt-10 sm:mr-48 md:mr-56 lg:mr-60 xl:mr-96'>
                    <motion.div
                        className='flex flex-col items-start justify-center'
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        custom={0}
                    >
                        <Typography variant='h3' className='uppercase'>hello</Typography>
                        <Typography variant='h3' className='uppercase'>i'm</Typography>
                        <Typography variant='h3' className='uppercase'>sasicha</Typography>
                    </motion.div>
                    <motion.div
                        className='flex flex-col items-start justify-center'
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        custom={1}
                    >
                        <Typography variant='h5' className='uppercase'>I’M SOFTWARE ENGINEER</Typography>
                    </motion.div>
                    <motion.div
                        className='flex flex-col items-center justify-center w-full'
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        custom={2}
                    >
                        <Button 
                            color="primary" 
                            className='flex flex-col' 
                            sx={{ padding: 2, borderRadius: 10 }} 
                            onClick={scrollToAboutMe}
                        >
                            <Typography variant='h7'>discover more about me</Typography>
                            <ExpandMore />
                        </Button>
                    </motion.div>
                </div>
                <motion.div
                    className='relative w-72 ml-10 sm:ml-48 md:ml-96 lg:ml-96 xl:ml-96 overflow-hidden'
                    whileHover={{ scale: 1.05 }}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    custom={0}
                >
                    <img src={mercury} alt="mercury" className='w-full z-30' />
                    <motion.div
                        className="absolute inset-0 flex gap-2 flex-col items-start justify-center bg-orange-50 bg-opacity-75 opacity-0 transition-opacity duration-300 p-14"
                        whileHover={{ opacity: 1 }}
                    >
                        <Typography variant='h5' color="secondary" className='font-semibold'>name</Typography>
                        <Typography variant='h4' color="secondary" className='uppercase font-extrabold'>sasicha</Typography>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='h-24 w-1' style={{ backgroundColor: theme.palette.secondary.main }}></div>
                            <Typography variant='h6' color="secondary">means a person born from the planet Mercury.</Typography>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
