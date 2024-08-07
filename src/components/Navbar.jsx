import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Dialog, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, useTransform, useScroll } from 'framer-motion';

const Navbar = ({ heroRef, aboutMeRef, skillsRef, experienceRef }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const underlineWidth = useTransform(scrollY, [0, 200], ['0%', '100%']); // Adjust 200 based on your scroll range
    const [activeSection, setActiveSection] = useState('home'); // Default section set to 'home'

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const heroOffsetTop = heroRef.current?.offsetTop || 0;
            const aboutMeOffsetTop = aboutMeRef.current?.offsetTop || 0;
            const skillsOffsetTop = skillsRef.current?.offsetTop || 0;
            const experienceOffsetTop = experienceRef.current?.offsetTop || 0;

            if (scrollTop >= experienceOffsetTop - 50) {
                setActiveSection('experience');
            } else if (scrollTop >= skillsOffsetTop - 50) {
                setActiveSection('skills');
            } else if (scrollTop >= aboutMeOffsetTop - 50) {
                setActiveSection('about me');
            } else if (scrollTop >= heroOffsetTop - 50) {
                setActiveSection('home');
            } else {
                setActiveSection(null);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [heroRef, aboutMeRef, skillsRef, experienceRef]);

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setDialogOpen(false);
    };

    return (
        <motion.div className='w-full uppercase items-center'>
            <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black' }}>
                <Toolbar className='w-full flex flex-row justify-between relative'>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className="cloudy-circle"></div>
                        <Typography variant="h6" component="div">
                            SASICHA’S PORTFOLIO
                        </Typography>
                    </div>
                    <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-primary"
                        style={{ width: underlineWidth }}
                    ></motion.div>
                    <div className='flex md:hidden'>
                        <IconButton
                            color="inherit"
                            aria-label="open dialog"
                            edge="start"
                            onClick={handleDialogOpen}
                            sx={{ zIndex: 1300 }} // Ensure the button is on top of other elements
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className='hidden md:flex flex-row space-x-4 items-center'>
                        {['home', 'about me', 'skills', 'experience'].map((text) => (
                            <Typography
                                key={text}
                                variant="h7"
                                component="div"
                                className={activeSection === text ? ' text-fuchsia-600 font-bold' : 'text-black'}
                                onClick={() => {
                                    if (text === 'home') scrollToSection(heroRef);
                                    else if (text === 'about me') scrollToSection(aboutMeRef);
                                    else if (text === 'skills') scrollToSection(skillsRef);
                                    else if (text === 'experience') scrollToSection(experienceRef);
                                }}
                                style={{ cursor: 'pointer', padding: '0 8px' }} // Add padding to ensure visibility
                            >
                                {text}
                            </Typography>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="responsive-dialog-title"
                PaperProps={{
                    sx: {
                        width:'100%',
                        minWidth: '180px', // Minimum width for the dialog
                        padding: '20px', // Padding around the content
                    }
                }}
            >
                <Typography variant='h5'>Menu</Typography>
                <List>
                    {['home', 'about me', 'skills', 'experience'].map((text) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => {
                                if (text === 'home') scrollToSection(heroRef);
                                else if (text === 'about me') scrollToSection(aboutMeRef);
                                else if (text === 'skills') scrollToSection(skillsRef);
                                else if (text === 'experience') scrollToSection(experienceRef);
                            }}
                        >
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{
                                    style: {
                                        fontWeight: activeSection === text ? 'bold' : 'normal',
                                        color: activeSection === text ? '#BA67D7' : 'inherit',
                                        padding: '0 8px' // Add padding to ensure visibility
                                    }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </motion.div>
    );
};

export default Navbar;
