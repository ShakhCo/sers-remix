import { TextAnimate } from "@/components/ui/text-animate";
import { FaDollarSign } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

export function Pricing() {
    return (
        <section className="max-w-[96rem] mx-8 mb-24">

            <div className="text-center mt-12 mb-24 mx-8">
                <h2 className="text-white text-3xl relative z-20 md:text-4xl font-bold text-customDarkBlue dark:text-white font-sans tracking-wide">
                    <TextAnimate className="max-w-xl mx-auto leading-snug" animation="slideUp" by="word">
                        We make online business acquisitions fast, safe, and easy
                    </TextAnimate>
                </h2>
            </div>


            <div className="grid lg:grid-cols-3 gap-12">
                <div className="bg-no-repeat bg-rose-600 p-8 rounded-xl">
                    <h3 className="text-white font-bold text-xl mb-4">
                        <span className="tracking-wide">Free subscription tier</span>
                    </h3>

                    <div className="bg-white rounded py-2 px-3 font-medium text-sm sm:text-base mb-8">
                        For: Beginners & College Students
                    </div>

                    <div className="flex items-center gap-1 text-3xl xl:text-5xl text-white mb-8">
                        <FaDollarSign />
                        <h4 className="font-bold">50</h4>
                    </div>

                    <div className="flex flex-col gap-6 text-white">
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-xl text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                Dive into the world of digital marketing with our immersive cohort-based program.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                Dive into the world of digital marketing with our immersive cohort-based program.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-xl text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                From crafting compelling content to closing sales, you'll emerge with a 360° understanding of what it takes to succeed in the digital landscape.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-no-repeat bg-rose-600 p-8 rounded-xl">
                    <h3 className="text-white font-bold text-xl mb-4">
                        <span className="tracking-wide">Free subscription tier</span>
                    </h3>

                    <div className="bg-white rounded py-2 px-3 font-medium text-sm sm:text-base mb-8">
                        For: Working Professionals
                    </div>

                    <div className="flex items-center gap-1 text-3xl xl:text-5xl text-white mb-8">
                        <FaDollarSign />
                        <h4 className="font-bold">75</h4>
                    </div>

                    <div className="flex flex-col gap-6 text-white">
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-xl text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                Dive into the world of digital marketing with our immersive cohort-based program.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                Dive into the world of digital marketing with our immersive cohort-based program.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-xl text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                From crafting compelling content to closing sales, you'll emerge with a 360° understanding of what it takes to succeed in the digital landscape.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-no-repeat bg-rose-600 p-8 rounded-xl">
                    <h3 className="text-white font-bold text-xl mb-4">
                        <span className="tracking-wide">Free subscription tier</span>
                    </h3>

                    <div className="bg-white rounded py-2 px-3 font-medium text-sm sm:text-base mb-8">
                        For: Founders and Agency Owners
                    </div>

                    <div className="flex items-center gap-1 text-3xl xl:text-5xl text-white mb-8">
                        <FaDollarSign />
                        <h4 className="font-bold">100</h4>
                    </div>

                    <div className="flex flex-col gap-6 text-white">
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-xl text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                Dive into the world of digital marketing with our immersive cohort-based program.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                Dive into the world of digital marketing with our immersive cohort-based program.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span><FaCheckSquare className="text-xl text-base sm:text-xl" /></span>
                            <p className="text-sm sm:text-base 2xl:text-xl mb-0">
                                From crafting compelling content to closing sales, you'll emerge with a 360° understanding of what it takes to succeed in the digital landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}