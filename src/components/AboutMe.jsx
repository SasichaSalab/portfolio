import React, { useEffect, useState } from 'react';
import me from '../assets/me.png';
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Contact from './Contact';

const AboutMe = () => {
    const theme = useTheme();
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Adjust as needed
        triggerOnce: true, // Only trigger animation once
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3 // Adjust the delay between children animations
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } }
    };

    const childVariantsShow = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } }
    };

    const [animationComplete, setAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
        setAnimationComplete(true);
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className='w-full flex flex-col justify-center items-center gap-10 p-5 h-screen xl:mb-0 lg:mb-0 md:mb-96 sm:mb-96 mb-96 mt-48 xl:mt-0 lg:mt-0'
        >
            <motion.div variants={childVariants}>
                <Typography variant='h4' className='uppercase'>ABOUT ME</Typography>
            </motion.div>
            <motion.div className='w-full flex flex-col justify-center items-end gap-2 xl:flex-row lg:flex-row md:flex-col sm:flex-col' variants={childVariantsShow}>
                {/*open card */}
                <motion.div
                    className="relative max-w-5xl h-auto overflow-hidden"
                    initial={{ width: '0%', height: animationComplete ? '100%' : '50vh' }}
                    animate={{ width: '100%', height: animationComplete ? '100%' : '50vh' }}
                    transition={{ duration: 2, delay: 2 }} // Adjusted delay here
                    onAnimationComplete={handleAnimationComplete}
                >
                    <motion.div variants={childVariants}
                        className="absolute top-0 left-0 h-full bg-zinc-900 z-50"
                        initial={{ width: '50%' }}
                        animate={{ x: '-50%', width: '0%', opacity: 0 }}
                        transition={{ duration: 1, delay: 3 }} // Adjusted delay here
                        style={{ backgroundColor: theme.palette.secondary.main }}
                    />
                    <motion.div variants={childVariants}
                        className="absolute top-0 right-0 h-full bg-zinc-900 z-50"
                        initial={{ width: '50%' }}
                        animate={{ x: '50%', width: '0%', opacity: 0 }}
                        transition={{ duration: 1, delay: 3 }} // Adjusted delay here
                        style={{ backgroundColor: theme.palette.secondary.main }}
                    />
                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }} // Adjusted delay here
                        className="z-40 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl bg-white p-2 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-2 shadow-lg shadow-fuchsia-200"
                    >
                        <div className='rounded-tl-3xl rounded-bl-3xl xl:w-2/6 lg:w-2/6 md:w-full sm:w-full w-full items-center justify-center bg-black'>
                            <img src={me} alt="Sasicha Salabkaeo" className='w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl' />
                        </div>
                        <div className='flex flex-col w-full gap-2 justify-between'>
                            <motion.div className='flex flex-row gap-2' variants={childVariantsShow} initial="hidden" animate="visible">
                                <div className='h-full w-1' style={{ backgroundColor: theme.palette.primary.main }}></div>
                                <div className='flex flex-col'>
                                    <Typography variant='h6' color='primary'>name</Typography>
                                    <Typography variant='h4'>SASICHA SALABKAEO</Typography>
                                </div>
                            </motion.div>
                            <motion.div className='flex flex-row gap-2' variants={childVariantsShow} initial="hidden" animate="visible">
                                <div className='h-full w-1 pr-1' style={{ backgroundColor: theme.palette.secondary.main }}></div>
                                <div className='flex flex-col'>
                                    <Typography variant='h6' color='secondary'>introduce</Typography>
                                    <p>&nbsp;&nbsp; During my internship, I have experience planning the work of the HRM (human resource management)
                                        system, having been assigned to do it from the beginning of the project. It starts with studying competitors in the market,
                                        determining what the application should have, determining the timeline for the work of each phase of the project, defining
                                        duties and responsibilities with the mentor. I have an understanding of user usage, allowing me to design web
                                        applications and mobile applications. Including the development of web applications and mobile applications.</p>
                                    <p>&nbsp;&nbsp; I want to improve my abilities in web application development and now I am ready for new challenges. And I thought being a software engineer could meet my needs.</p>
                                </div>
                            </motion.div>
                            <motion.div className='flex flex-row gap-2' variants={childVariantsShow} initial="hidden" animate="visible">
                                <div className='h-full w-1' style={{ backgroundColor: theme.palette.tertiary.main }}></div>
                                <div className='flex flex-col'>
                                    <Typography variant='h6' sx={{ color: theme.palette.tertiary.main }}>education</Typography>
                                    <div className='flex flex-row gap-1 p-2'>
                                        <Typography variant='h7'>Faculty of Engineering
                                            Department of Computer Engineering
                                            Kasetsart University</Typography>
                                        <div className='h-full bg-black' style={{ width: 1 }}>
                                        </div>
                                        <Typography variant='h7'>GPA : 3.25</Typography>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className='flex flex-row gap-2' variants={childVariantsShow} initial="hidden" animate="visible">
                                <Contact/>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div variants={childVariants} className="rounded-tr-full rounded-br-full rounded-tl-full xl:w-3/12 lg:w-3/12 md:w-full sm:w-full w-full bg-custom-gradient flex flex-col p-4 py-9 gap-5 text-white items-center">
                    <Typography variant='h5' className='uppercase'>SOFT SKILLS</Typography>
                    <div className='flex flex-wrap font-semibold'>
                        {['CREATIVITY', 'ADAPTABILITY', 'ACTIVE LEARNING', 'COLLABORATION', 'PROBLEM SOLVING', 'COMMUNICATION'].map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-transparent py-1 px-2 rounded-3xl border-2 border-white inline-block m-2"
                                whileHover={{ scale: [null, 1.5, 1.4] }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{skill}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default AboutMe;
