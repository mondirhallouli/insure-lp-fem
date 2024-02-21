export default function Work() {
    return (
        <section className="max-w-80 lg:container mx-auto mb-40 px-10 lg:px-20 py-[72px] lg:py-[65px] overflow-hidden text-center lg:text-left lg:flex lg:justify-between lg:items-center bg-gradient-how-we-work relative">

            <div className="absolute top-0 right-0 z-0">
                <img src="/images/assets/bg-pattern-how-we-work-mobile.svg" className="lg:hidden" />
                <img src="/images/assets/bg-pattern-how-we-work-desktop.svg" className="hidden lg:inline-block" />
            </div>

            <h3 className="lg:max-w-[530px] text-veryLightGray font-dmFont text-4xl lg:text-6xl mb-10 lg:mb-0 relative z-50">Find out more about how we work</h3>

            <button className="text-veryLightGray text-sm font-karlaFont px-6 py-2 border-2 border-veryLightGray relative z-50 transition-all tracking-widest font-semibold hover:bg-veryLightGray hover:text-veryDarkViolet">HOW WE WORK</button>
        </section>
    )
}