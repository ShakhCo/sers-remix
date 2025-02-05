import { Pricing } from "../pricing"

export function Background() {
    return (
        <div className="w-full dark:bg-black bg-customDarkBlue dark:bg-grid-white/[0.2] bg-grid-gray-900 relative flex flex-col items-center justify-center py-24">

            <Pricing />

            <div className="bg-black/[0.7] rounded-3xl mx-8">
                <div className="max-w-[96rem] mx-auto p-12 text-white w-full">
                    <div>
                        <p className="font-bold text-sm sm:text-lg lg:text-xl mb-4 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500  ">
                            But here's what sets us apart
                        </p>
                        <h1 className="text-white text-xl sm:text-4xl lg:text-5xl leading-relaxed md:leading-normal lg:leading-normal font-bold mb-4">
                            Every step, every decision, every pivot - it all happens in full view of the public
                        </h1>
                        <p className="text-neutral-400 text-sm sm:text-base lg:text-lg">
                            Join us as we redefine startup culture, one transparent step at a time.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}