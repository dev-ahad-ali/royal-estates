import { Button } from '@material-tailwind/react';
import { FaInstagramSquare, FaPhoneVolume } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';

const ContactUs = () => {
    return (
        <section>
            <div className='mt-4 text-center'>
                <h2 className='font-playfair text-4xl font-semibold underline underline-offset-8'>
                    Contact Us
                </h2>
            </div>
            <div className='mx-auto mt-12 grid max-w-7xl gap-4 px-5 lg:grid-cols-3'>
                <div
                    data-aos='zoom-in'
                    data-aos-duration='500'
                    className='flex cursor-pointer items-center gap-2 border border-amber-600 p-3 hover:text-amber-500'
                >
                    <MdAttachEmail className='border-r-2 border-amber-600 pe-2 text-[45px]' />
                    <p className='md:text-2xl'>royalestates@gmail.com</p>
                </div>
                <div
                    data-aos='zoom-in'
                    data-aos-duration='500'
                    className='flex cursor-pointer items-center gap-2 border border-amber-600 p-3 hover:text-amber-500'
                >
                    <FaPhoneVolume className='border-r-2 border-amber-600 pe-2 text-[45px]' />
                    <p className='md:text-2xl'>+10987654321</p>
                </div>
                <div
                    data-aos='zoom-in'
                    data-aos-duration='500'
                    className='flex cursor-pointer items-center gap-2 border border-amber-600 p-3 hover:text-amber-500'
                >
                    <FaInstagramSquare className='border-r-2 border-amber-600 pe-2 text-[45px]' />
                    <p className='md:text-2xl'>@royalestates</p>
                </div>
            </div>
            <div className='mx-auto mt-8 max-w-3xl px-5'>
                <div className='border border-amber-600 p-4'>
                    <h3 className='border-b pb-2 font-playfair text-2xl'>
                        Send A Massage
                    </h3>
                    <form className='mt-2 grid grid-cols-2 gap-3'>
                        <label className='flex flex-col gap-2'>
                            <span className='text-lg font-light'>Name</span>
                            <input
                                className='h-12 w-full rounded-sm text-black outline-2 focus:outline-amber-600'
                                type='text'
                            />
                        </label>
                        <label className='flex flex-col gap-2'>
                            <span className='text-lg font-light'>Email</span>
                            <input
                                className='h-12 w-full rounded-sm text-black outline-2 focus:outline-amber-600'
                                type='email'
                            />
                        </label>
                        <label className='col-span-2 flex flex-col gap-2'>
                            <span className='text-lg font-light'>Massage</span>
                            <textarea className='h-28 w-full resize-none rounded-sm text-black outline-2 focus:outline-amber-600'></textarea>
                        </label>
                    </form>
                    <div>
                        <Button
                            size='lg'
                            className='mt-4 w-full cursor-pointer rounded-md bg-amber-700 p-2 font-noto font-semibold uppercase text-black  duration-300 hover:bg-red-400 hover:shadow-2xl'
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
