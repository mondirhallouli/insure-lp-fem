export default function Footer() {
    return (
        <footer className="relative px-8 py-24 bg-veryLightGray">

            <div className="absolute top-0 left-0 z-0">
                <img src="/images/assets/bg-pattern-footer-mobile.svg" className="lg:hidden" />
                <img src="/images/assets/bg-pattern-footer-desktop.svg" className="hidden lg:inline-block" />
            </div>

            <div className="container mx-auto relative z-50">

                <nav className="flex flex-col justify-center items-center gap-8 pb-10 mb-10 border-b-[1.5px] border-l-darkGrayishViolet lg:flex-row lg:justify-between">
                    <a href="/">
                        <img src="/images/assets/logo.svg" alt="Insure brand" />
                    </a>

                    <ul className="flex justify-center items-center gap-2">
                        <li>
                            <a href="#">
                                <img src="/images/assets/icon-facebook.svg" alt="insure facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/assets/icon-twitter.svg" alt="insure twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/assets/icon-pinterest.svg" alt="insure pinterest" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/assets/icon-instagram.svg" alt="insure instagram" />
                            </a>
                        </li>
                    </ul>
                </nav>

                <section className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:items-start">
                    <div className="text-center lg:text-left">
                        <h4 className="font-karlaFont text-darkGrayishViolet text-sm font-semibold tracking-widest mb-4">OUR COMPANY</h4>
                        <ul className="font-karlaFont text-veryDarkViolet font-semibold text-sm tracking-widest">
                            <li className="mb-2 hover:underline">
                                <a href="#">HOW WE WORK</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">WHY INSURE?</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">CHECK PRICE</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">REVIEWS</a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left">
                        <h4 className="font-karlaFont text-darkGrayishViolet text-sm font-semibold tracking-widest mb-4">HELP ME</h4>
                        <ul className="font-karlaFont text-veryDarkViolet font-semibold text-sm tracking-widest">
                            <li className="mb-2 hover:underline">
                                <a href="#">FAQ</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">TERMS OF USE</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">PRIVACY POLICY</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">COOKIES</a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left">
                        <h4 className="font-karlaFont text-darkGrayishViolet text-sm font-semibold tracking-widest mb-4">CONTACT</h4>
                        <ul className="font-karlaFont text-veryDarkViolet font-semibold text-sm tracking-widest">
                            <li className="mb-2 hover:underline">
                                <a href="#">SALES</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">SUPPORT</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">LIVE CHAT</a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center lg:text-left">
                        <h4 className="font-karlaFont text-darkGrayishViolet text-sm font-semibold tracking-widest mb-4">OTHERS</h4>
                        <ul className="font-karlaFont text-veryDarkViolet font-semibold text-sm tracking-widest">
                            <li className="mb-2 hover:underline">
                                <a href="#">CAREERS</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">PRESS</a>
                            </li>
                            <li className="mb-2 hover:underline">
                                <a href="#">LICENSES</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    )
}