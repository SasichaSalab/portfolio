import { Typography } from '@mui/material'
import React from 'react'
import { GitHub, Call, Email } from '@mui/icons-material'

const Contact = () => {
    return (
        <div className='w-full p-2 flex flex-col justify-center items-center bg-custom-gradient text-white gap-2'>
            <Typography variant='h6' className=' uppercase'> Contact</Typography>
            <div className='flex flex-col w-full gap-5 xl:flex-row lg:flex-row justify-center items-center'>
                <div className='flex flex-row items-center justify-center p-2 gap-2 xl:w-1/3 lg:w-1/3 w-full'>
                    <GitHub sx={{fontSize:30}} />
                    <Typography variant='h8'>SasichaSalab</Typography>
                </div>
                <div className='flex flex-row items-center justify-center p-2 gap-2  xl:w-1/3 lg:w-1/3 w-full'>
                    <Call sx={{fontSize:30}} />
                    <Typography variant='h8'>(+66) 98 263 6676</Typography>
                </div>
                <div className='flex flex-row items-center justify-center p-2 gap-2  xl:w-1/3 lg:w-1/3 w-full'>
                    <Email sx={{fontSize:30}} />
                    <Typography variant='h8'>sasicha.salab@gmail.com</Typography>
                </div>
            </div>
        </div>
    )
}

export default Contact