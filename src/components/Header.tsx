import logo from '/images/assets/logo.svg';
import hamburgerIcon from '/images/assets/icon-hamburger.svg';
import closeIcon from '/images/assets/icon-close.svg';
import { useState } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className='py-6 px-5 z-[100] bg-white relative'>
            {/* NAVBAR */}
            <nav className='container mx-auto flex justify-between items-center bg-white z-50'>
                <a href="/">
                    <img src={logo} alt="insure logo" />
                </a>

                {/* NAVIGATION MENU */}
                <section className={`pt-8 pb-80 px-5 transition-all w-full absolute left-0 ${!open ? '-top-[700px]' : 'top-20'} bg-veryDarkViolet overflow-hidden md:bg-white md:pt-0 md:pb-0 md:px-0 md:w-auto md:h-auto md:static md:flex md:justify-between md:items-center md:gap-10`}>

                    <ul className='flex flex-col justify-center items-center gap-3 mb-8 md:mb-0 md:gap-10 md:flex-row md:justify-normal'>
                        <li>
                            <a href="#" className='inline-block font-karlaFont font-semibold tracking-widest text-veryLightGray text-lg md:text-base md:text-darkGrayishViolet md:hover:text-veryDarkViolet py-2 md:py-0'>HOW WE WORK</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block font-karlaFont font-semibold tracking-widest text-veryLightGray text-lg md:text-base md:text-darkGrayishViolet md:hover:text-veryDarkViolet py-2 md:py-0'>BLOG</a>
                        </li>
                        <li>
                            <a href="#" className='inline-block font-karlaFont font-semibold tracking-widest text-veryLightGray text-lg md:text-base md:text-darkGrayishViolet md:hover:text-veryDarkViolet py-2 md:py-0'>ACCOUNT</a>
                        </li>
                    </ul>

                    <button className='inline-block z-50 w-full py-3 px-6 text-veryLightGray font-semibold tracking-widest border-2 border-veryLightGray transition-all hover:bg-veryLightGray hover:text-veryDarkViolet md:text-sm md:text-veryDarkViolet md:font-normal md:border-veryDarkViolet md:hover:bg-veryDarkViolet md:hover:text-white md:py-2 md:w-auto'>VIEW PLANS</button>

                    <div className="z-10 absolute bottom-0 right-0 md:hidden">
                        <img src="/images/assets/bg-pattern-mobile-nav.svg" className='block w-full' />
                    </div>
                </section>

                {/* MOBILE MENU BUTTON(s) */}
                <button onClick={() => setOpen(!open)} className='md:hidden'>
                    <img src={open ? closeIcon : hamburgerIcon} alt="menu button icon" />
                </button>
            </nav>
        </header>
    )
}