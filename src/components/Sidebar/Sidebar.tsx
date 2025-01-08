import { MdSpaceDashboard } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HeadphonesIcon, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

export default function Sidebar() {
    return (
        <div className='w-1/5 bg-white justify-between flex flex-col shadow-lg relative'>
            <div className='text-2xl font-bold font-mulish text-center py-4 flex flex-row items-center justify-left m-5'>
                <p className='p-2 mx-2 border bg-secondary-300 rounded-full text-white'>PD</p>
                Pediaverse
            </div>
            <div className='text-left flex flex-col gap-5 justify-center items-center text-left px-5'>
                <div className='text-lg flex flex-row gap-2 font-mulish font-light py-5 hover:bg-secondary-300 rounded-2xl w-full px-5 items-center group cursor-pointer'>
                    <MdSpaceDashboard size={24} className='text-gray-600 group-hover:text-white'/>
                    <p className='text-gray-600 group-hover:text-white'>Dashboard</p>
                </div>
                <div className='text-lg flex flex-row gap-2 font-mulish font-light py-5 hover:bg-secondary-300 rounded-2xl w-full px-5 items-center group cursor-pointer'>
                    <IoChatbubbleOutline size={24} className='text-gray-600 group-hover:text-white'/>
                    <p className='text-gray-600 group-hover:text-white'>Community</p>
                </div>
                <div className='text-lg flex flex-row gap-2 font-mulish font-light py-5 hover:bg-secondary-300 rounded-2xl w-full px-5 items-center group cursor-pointer'>
                    <div className='h-10 w-10 bg-secondary-300 rounded-full group-hover:bg-white'/>
                    <div className="flex items-center flex-col">
                        <p className='text-gray-600 group-hover:text-white text-sm font-bold'>Musfiq</p>
                        <p className='text-gray-600 group-hover:text-white text-sm'>Class 9</p>
                    </div>
                </div>
            </div>
            <div className='items-center flex justify-center my-5 bg-secondary-300 mx-5 p-2 rounded-2xl py-7 flex-col gap-5 relative'>
                <div className='bg-white p-2 rounded-xl z-10'>
                    <HeadphonesIcon className='text-secondary-300' />
                </div>
                <p className='text-white font-mulish font-light text-2xl z-10'>Get Help</p>
                <div className='items-center flex flex-col z-10'>
                    <p className='text-white font-mulish font-light text-sm'>Our customer care is</p>
                    <p className='text-white font-mulish font-light text-sm'>available 24/7</p>
                </div>
                <Button className='bg-white hover:bg-gray-200 z-10'>
                    Contact Support
                </Button>
                <div className="absolute top-24 right-24 z-0 bg-white/10 rounded-full h-full w-full flex"/>
            </div>
            <div className='text-lg flex flex-row gap-2 font-mulish font-light justify-center items-center my-5 cursor-pointer'>
                <LogOut size={24} className='text-gray-600' />
                <p className='text-gray-600'>Log Out</p>
            </div>
        </div>
    )
}
