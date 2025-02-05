import { GoArrowRight } from "react-icons/go";
import { TextAnimate } from "@/components/ui/text-animate";
import { FeaturesSectionDemo } from "@/components/ui/features-section";
import { PiUsersThreeBold } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

export function Home() {

    const features = [
        {
            title: "1,000+",
            description: "Startups sold",
            icon: <GrTransaction className="text-2xl" />,
        },
        {
            title: "5000+",
            description: "Entrepreneurs trust us",
            icon: <PiUsersThreeBold className="text-2xl" />,
        },
        {
            title: "2+ years",
            description: "Acquisition experience",
            icon: <MdOutlineAccessTime className="text-2xl" />,
        },
        {
            title: "$2M +",
            description: "Closed deal volume",
            icon: <AiOutlineDollar className="text-2xl" />,
        },
    ];

    return <section id="home" className="">
        <div className="py-24">
            <div className="flex items-center 2xl:justify-center">

                <div className="">
                    <h2 className="xl:max-w-6xl text-3xl relative z-20 md:text-4xl lg:text-6xl xl:text-7xl font-bold text-customDarkBlue dark:text-white font-sans tracking-wide mb-4">
                        <p className="leading-relaxed lg:leading-tight">
                            The easiest way to buy and sell online businesses<br></br>
                        </p>
                        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-1 md:py-2 from-rose-500 via-orange-500 to-rose-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">for entrepreneurs</span>
                            </div>
                            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500 py-1 md:py-2">
                                <span className="">for entrepreneurs</span>
                            </div>
                        </div>
                    </h2>

                    <p className="max-w-4xl text-lg md:text-xl 2xl:text-2xl text-gray-500 dark:text-neutral-500 leading-loose mb-12">
                        Join entrepreneurs closing life-changing deals. Buy and sell SaaS, ecommerce, agencies, and content businesses effortlessly with sers.com
                    </p>

                    <button className="group px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl lg:px-12 lg:py-6 lg:text-2xl bg-customDarkBlue text-white rounded-xl font-bold transform transition duration-300">
                        View listings
                        <GoArrowRight className="inline ms-2 transition-all duration-300 ease-in-out group-hover:translate-x-2" />
                    </button>
                </div>

                <div className="hidden 2xl:flex">
                    <div className="w-full max-w-lg 2xl:max-w-2xl overflow-hidden">
                        <img
                            src="/images/home-hero.png"
                            alt="Hero Image"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            <FeaturesSectionDemo features={features} />
        </div>

    </section>
}