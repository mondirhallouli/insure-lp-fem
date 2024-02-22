export default function Benifits() {
    return (
        <section className="px-5 pt-28 lg:container lg:mx-auto sm:pt-40 xl:pt-80 pb-12">

            <h2 className="font-dmFont text-veryDarkViolet text-5xl text-center mb-20 md:text-7xl lg:text-left before:content-[''] before:block before:h-[1px] before:w-40 before:mx-auto before:lg:mx-0 before:bg-grayishBlue before:mb-12">We're different</h2>

            <div className="lg:flex lg:justify-between lg:items-center lg:gap-10">

                <section className="mb-16 text-center sm:max-w-[350px] sm:mx-auto lg:mx-0 lg:text-left">
                    <img src="/images/assets/icon-snappy-process.svg" className="inline-block mb-8" alt="lightening icon" />
                    <h3 className="font-dmFont text-3xl mb-4">Snappy Process</h3>
                    <p className="font-karlaFont text-darkGrayishViolet">Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
                </section>

                <section className="mb-16 text-center sm:max-w-[350px] sm:mx-auto lg:mx-0 lg:text-left">
                    <img src="/images/assets/icon-affordable-prices.svg" className="inline-block mb-8" alt="coin icon" />
                    <h3 className="font-dmFont text-3xl mb-4">Affordable Prices</h3>
                    <p className="font-karlaFont text-darkGrayishViolet">We don't want you worrying about high monthly costs. Our prices might be low, but we still offer the best coverage possible.</p>
                </section>

                <section className="mb-16 text-center sm:max-w-[350px] sm:mx-auto lg:mx-0 lg:text-left">
                    <img src="/images/assets/icon-people-first.svg" className="inline-block mb-8" alt="profile icon" />
                    <h3 className="font-dmFont text-3xl mb-4">People First</h3>
                    <p className="font-karlaFont text-darkGrayishViolet">Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
                </section>
            </div>
        </section>
    )
}