import logo from '/images/assets/logo.svg';
import hamburgerIcon from '/images/assets/icon-hamburger.svg';

export default function Header() {
    return (
        <header className='py-6 px-5 z-50 bg-white'>
            <nav className='container mx-auto flex justify-between items-center bg-white z-50'>
                <a href="/">
                    <img src={logo} alt="insure logo" />
                </a>

                <section className='hidden md:flex justify-between items-center gap-10'>
                    <ul className='flex gap-10'>
                        <li>
                            <a href="#" className='font-karlaFont font-semibold tracking-widest text-darkGrayishViolet hover:text-veryDarkViolet'>HOW WE WORK</a>
                        </li>
                        <li>
                            <a href="#" className='font-karlaFont font-semibold tracking-widest text-darkGrayishViolet hover:text-veryDarkViolet'>BLOG</a>
                        </li>
                        <li>
                            <a href="#" className='font-karlaFont font-semibold tracking-widest text-darkGrayishViolet hover:text-veryDarkViolet'>ACCOUNT</a>
                        </li>
                    </ul>

                    <button className='py-2 px-6 text-sm tracking-widest border-2 border-black transition-all hover:bg-black hover:text-white'>VIEW PLANS</button>
                </section>

                <button className='md:hidden'>
                    <img src={hamburgerIcon} alt="hamburger menu button" />
                </button>
            </nav>
        </header>
    )
}