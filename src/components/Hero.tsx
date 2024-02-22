export default function Hero() {
    return (
        <section className="bg-darkViolet relative sm:py-20 xl:py-0">

            <img src="/images/assets/bg-pattern-intro-left-desktop.svg" className="hidden sm:block absolute lg:translate-y-[480px] left-0 z-0 translate-y-28" />

            <div className="container mx-auto flex flex-col justify-between items-center xl:gap-6 xl:px-0  xl:order-1 xl:flex-row">

                <div className="w-fit xl:order-2 xl:relative xl:top-40">
                    <img src="/images/image-intro-mobile.jpg" className="xl:hidden" alt="family photo" />
                    <img src="/images/image-intro-desktop.jpg" className="hidden xl:block" alt="family photo" />
                </div>

                <div className="text-center text-veryLightGray py-24 bg-bg-pattern-intro-left-mobile bg-no-repeat bg-left-top sm:bg-none xl:text-left sm:max-w-[540px] xl:py-0 before:xl:content-[''] before:xl:w-40 before:xl:h-[1px] before:xl:bg-veryLightGray before:xl:block before:xl:mb-12">

                    <h1 className="font-dmFont text-5xl mb-4 relative z-50 xl:text-7xl">Humanizing your insurance.</h1>

                    <p className="font-karlaFont mb-8 px-2 relative z-50 lg:px-0">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>

                    <button className="border-2 py-2 px-6 font-karlaFont font-semibold text-sm uppercase tracking-widest border-veryLightGray transition-all hover:bg-veryLightGray hover:text-veryDarkViolet relative z-50">view plans</button>

                    <div className="inline-block absolute right-0 lg:top-0 z-10">
                        <img src="/images/assets/bg-pattern-intro-right-mobile.svg" className="lg:hidden" />
                        <img src="/images/assets/bg-pattern-intro-right-desktop.svg" className="hidden lg:block" />
                    </div>

                </div>

            </div>
        </section>
    )
}