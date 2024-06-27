import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Close, ChevronLeft, ChevronRight, Link } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg from '../assets/background.png';
import cassava from '../assets/cassava/mun1.png';
import cassava2 from '../assets/cassava/mun2.png';
import cassava3 from '../assets/cassava/mun3.png';
import cassava4 from '../assets/cassava/mun4.png';
import cassava_video from '../assets/cassava/munbot.mp4';
import intern1 from '../assets/intern1/sensor1.png';
import intern1_2 from '../assets/intern1/sensor2.png';
import intern1_3 from '../assets/intern1/sensor3.png';
import intern1_4 from '../assets/intern1/sensor4.png';
import intern2 from '../assets/intern2/hrm.png';
import intern2_2 from '../assets/intern2/compare.png';
import intern2_3 from '../assets/intern2/DIGI1.png';
import intern2_4 from '../assets/intern2/digital.png';
import match from '../assets/match/match1.png';
import match2 from '../assets/match/match2.png';
import match3 from '../assets/match/match3.png';
import match4 from '../assets/match/match4.png';
import ta1 from '../assets/ta/slide.png';
import ta2 from '../assets/ta/lab.png';
import ta3 from '../assets/ta/name.png';
import ta_video from '../assets/ta/final_python.mp4';
import uka from '../assets/uka/uka_1.png';
import uka2 from '../assets/uka/uka_2.png';
import uka3 from '../assets/uka/uka_3.png';
import uka4 from '../assets/uka/uka_4.png';
import uka5 from '../assets/uka/uka_5.png';
import uka6 from '../assets/uka/uka_6.png';
import uka7 from '../assets/uka/uka_7.png';
import uka8 from '../assets/uka/uka_8.png';
import uka9 from '../assets/uka/uka_9.png';
import uka10 from '../assets/uka/uka_10.png';
import vacay from '../assets/vacay/vacay.png';
import vacay2 from '../assets/vacay/yourVacation_img1.png';
import vacay3 from '../assets/vacay/yourVacation_img2.png';
import vacay4 from '../assets/vacay/yourVacation_img3.png';
import vacay5 from '../assets/vacay/yourVacation_img4.png';
import vacay_video from '../assets/vacay/video_vacay.mp4';
import elder2 from '../assets/elder/por_2.png';
import elder1 from '../assets/elder/por_1.png';
import elder3 from '../assets/elder/por_3.png';

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <IconButton onClick={onClick}>
            <ChevronLeft />
        </IconButton>
    );
};

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <IconButton onClick={onClick}>
            <ChevronRight /></IconButton>
    );
};

const items = [
    {
        id: '1',
        image: cassava,
        link: 'https://www.munbot.org/cassava/',
        link_name: 'MunBOT web application',
        video: cassava_video,
        imageList: [cassava2, cassava3, cassava4],
        title: 'MunBOT',
        subtitle: ['Front-End Developer', 'UX/UI Designer(Only in Vue.js)'],
        description: 'Participate in developing a web application system for data collection, surveying and storing photos of cassava diseases, or Cassava Pathomation Data Bank, under the Intelligent Systems for Diagnosis research project. Cassava Disease Surveillance and Warning (MunBOT) is a system for collecting data on cassava disease surveys along with photographs of cassava diseases. To be used in integration with image diagnosis services. and warning of disease outbreaks Supported by the Agricultural Research Development Agency, a public organization (ARRI).',
        frameworks: ['Vue.js', 'Bootstrap', 'JSTL', 'Spring boot'],
    },
    {
        id: '2',
        image: intern2,
        imageList: [intern2, intern2_2, intern2_3, intern2_4],
        title: 'Internship at Acuitmesh Company Limited',
        subtitle: ['Full-Stack Developer', 'UX/UI Designer(Not all features)'],
        description: `<ul class="list-disc pl-5"><li>Web application for testing employee knowledge by sending fake emails</li>
<li>Web applications and mobile applications to facilitate tourists traveling to Thailand.<ul class="list-disc pl-5">
<li>Flutter Dynamic Multi Form</li>
<li>Create a QR code with an expiration time.</li>
<li>use Chart.js</li>
<li>UX/UI Design(additional parts that need to be added)</li></ul></li>
<li>Company internal information management system (Human Resource System)<ul class="list-disc pl-5">
<li>Obtain requirements and create module timelines with the team</li>
<li>Flutter text recognition</li>
<li>Flutter Expansion</li>
<li>Entry and exit timestamps (use iBeacon ,WiFi ,QR Code , GPS)</li></ul></li>
</ul>`,
        frameworks: ['Next.js', 'Flutter', 'FastApi'],
    },
    {
        id: '3',
        image: intern1,
        imageList: [intern1, intern1_2, intern1_3, intern1_4],
        title: 'Internship at INVISOR Company Limited',
        subtitle: ['Programmer'],
        description: 'Make a mobile application with the ESP32 board to display temperature values. Humidity and light intensity measured by sensors',
        frameworks: ['React Native', 'Arduino IDE'],
    },
    {
        id: '4',
        image: match,
        link: 'https://github.com/SasichaSalab/make-a-match',
        link_name: 'view source code in my github',
        imageList: [match,match2, match3, match4],
        title: 'MAKE A MATCH',
        subtitle: ['Full-Stack Developer', 'UX/UI Designer'],
        description: `<ul class="list-disc pl-5"><li>Web applicationcreated to facilitate users who want to buy clothes online. and can be used to compare the compatibility of the sets to be purchased Without having to imagine whether the chosen outfit will match or not with a system that supports both users and admins.</li>
<li>Users can test the compatibility of the clothes they are buying before making a purchase.</li>
<li>Ordering system, adding to cart, adding to favorites, sending a request to return products in the user section</li>
<li>Dashboard summarizing all product sales, adding, deleting, editing products, confirming and rejecting orders and requesting product returns for users in the admin section.</li></ul>`,
        frameworks: ['React.js', 'Spring boot'],
    },
    {
        id: '5',
        image: vacay,
        video: vacay_video,
        imageList: [vacay2, vacay3, vacay4, vacay5],
        title: 'Your Vacation web application for tourism',
        subtitle: ['Front-End Developer', 'UX/UI Designer'],
        description: 'Web application created to facilitate tourists. who want to find tourist attractions and need accommodations nearby No need to search for multiple websites separately.',
        frameworks: ['Vue.js', 'Spring boot'],
    },
    {
        id: '6',
        image: elder2,
        link: 'https://youtu.be/0OwUqLX1it0',
        link_name: 'Video demonstrating how to use the web application',
        imageList: [elder2, elder1, elder3],
        title: 'Web applications for elderly physical exercises',
        subtitle: ['Front-End Developer', 'UX/UI Designer'],
        description: `<ul class="list-disc pl-5"><li>Web application for the elderly for physical therapy at home</li>
<li>Working as UX/UI Designer I have an task to </li>
<li>make a design suitable for the elderly, which must be easy to use and my idea was to design all UX/UI in the web-application in the concept of makeing it for “elderly easy to use”</li></ul>`,
        frameworks: ['HTML', 'Flask'],
    },
    {
        id: '7',
        image: uka,
        imageList: [uka,uka2, uka3, uka4, uka5, uka6, uka7, uka8, uka9, uka10],
        title: 'UKA Market',
        subtitle: ['Front-End Developer', 'UX/UI Designer'],
        description: 'The purpose of this project is Previously, when merchants wanted to reserve space to sell goods Must come in and request to reserve space within the university. The developer therefore wants to create convenience for merchants. And students can also know which stores are selling them today.',
        frameworks: ['Flutter', 'Spring boot'],
    },
    {
        id: '8',
        image: ta1,
        video: ta_video,
        imageList: [ta1, ta2, ta3],
        title: 'Teacher Assistant',
        subtitle: ['Teacher Assistant'],
        description: `<ul class="list-disc pl-5"><li>Help guide you in writing code during the lab.</li>
<li>Check name, check lab score</li>
<li>Make tutoring slides for both midterms and finals.</li></ul>`,
        frameworks: ['C++', 'Python', 'IT For Engineering(word excel powerpoint)'],
    },
];

const Experience = () => {
    const [selectedId, setSelectedId] = useState(null);
    const getItemsPerPage = () => {
        if (window.innerWidth >= 1300) {
            return 8; // Large screens
        } else if (window.innerWidth >= 1200) {
            return 3; // Medium screens
        } else if (window.innerWidth >= 800) {
            return 2; // Medium screens
        } else {
            return 1; // Small screens
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
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

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    // useInView hook to track visibility of skills grid
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger animation when 20% of element is in view
    });

    return (
        <div
            className='flex flex-col items-center w-full gap-5 p-5'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%'
            }}
        ><motion.div className='w-full flex flex-row items-center justify-center'
            ref={ref} // Attach ref to element you want to track
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 2 }}
        >
                <Typography variant='h4' className='uppercase text-black'>Experience</Typography></motion.div>
            <motion.div className='w-full flex flex-wrap items-start justify-center h-full'>
                <AnimatePresence>
                    {currentItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                        <motion.div
                            key={item.id}
                            layoutId={item.id}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }} // Adjust delay timing as needed
                            className='cursor-pointer m-1 bg-white bg-opacity-65 shadow-lg rounded-3xl h-80 flex flex-col justify-between'
                        >
                            <img src={item.image} alt={item.title} className='w-full h-1/2 object-cover rounded-tl-3xl rounded-tr-3xl p-5' />
                            <div className='bg-white p-2 rounded-bl-3xl rounded-br-3xl max-w-96 h-1/2'>
                                <motion.h5 className='mt-2 text-gray-600'>{item.subtitle[0]}</motion.h5>
                                <motion.h2 className='text-xl font-bold'>{item.title}</motion.h2>
                                <div className='w-full mt-2 flex flex-wrap gap-2'>
                                    {item.frameworks.map((framework, index) => (
                                        <span key={index} className='border border-gray-300 rounded-full px-3 py-1 text-sm'>{framework}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            <div className='flex justify-center mt-5 xl:hidden'>
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
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className='fixed inset-0 bg-white  p-10 overflow-auto rounded-lg shadow-lg flex flex-col xl:m-24 lg:m-24 m-2 justify-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.button
                            onClick={() => setSelectedId(null)}
                            className='absolute top-4 right-4 bg-gray-200 p-2 rounded-full'
                        >
                            <Close />
                        </motion.button>
                        {items.map(item => item.id === selectedId && (
                            <div key={item.id} className='flex flex-col md:flex-col xl:flex-row lg:flex-row gap-5 justify-center items-center xl:mt-0 lg:mt-0 mt-96'>
                                <Slider {...settings} className=' md:w-1/2 w-full h-full flex flex-row justify-center items-center'>
                                    {(item.video ? [item.video] : []).concat(item.imageList).map((media, index) => (
                                        <div key={index}>
                                            {item.video && index === 0 ? (
                                                <video autoPlay loop muted className='w-full h-72 object-contain rounded-t-lg'>
                                                    <source src={media} type='video/mp4' />
                                                </video>
                                            ) : (
                                                <img src={media} alt={`slide-${index}`} className='w-full h-60 object-contain rounded-t-lg' />
                                            )}
                                        </div>
                                    ))}
                                </Slider>
                                <div className='flex flex-col w-full md:w-1/2'>
                                    <motion.h5 className='text-gray-600'>Responsibilities</motion.h5>
                                    <ul className='list-disc ml-5'> {/* Adding Tailwind CSS classes for bullets */}
                                        {item.subtitle.map((position, index) => (
                                            <li key={index}>
                                                <motion.span className='text-gray-600'>{position}</motion.span> {/* Use span instead of h5 */}
                                            </li>
                                        ))}
                                    </ul>

                                    <motion.h2 className='text-3xl font-bold'>{item.title}</motion.h2>
                                    {item.link ? <div className='flex flex-row gap-2 items-center'><Link /><a href={item.link}>{item.link_name}</a></div> : ''}
                                    <div className='mt-4 flex flex-wrap gap-2'>
                                        {item.frameworks.map((framework, index) => (
                                            <span key={index} className='border border-gray-300 rounded-full px-3 py-1 text-sm'>{framework}</span>
                                        ))}
                                    </div>
                                    <motion.div className='mt-4 list-container' dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Experience;
