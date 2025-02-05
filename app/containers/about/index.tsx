import { TextAnimate } from "@/components/ui/text-animate";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

export function About() {
    return (
        <section className="pb-48">
            <div className="text-center py-24">
                <h2 className="text-3xl relative z-20 md:text-4xl font-bold text-customDarkBlue dark:text-white font-sans tracking-wide">
                    {/* <p className="leading-relaxed lg:leading-tight">
                        We make online business <br></br>acquisitions fast, safe, and easy
                    </p> */}

                    <TextAnimate className="max-w-xl mx-auto leading-snug" animation="slideUp" by="word">
                        We make online business acquisitions fast, safe, and easy
                    </TextAnimate>
                </h2>
            </div>
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Buy Startups with Confidence"
                    description="Discover vetted startups ready for acquisition, ensuring secure and seamless transactions."
                />

                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="AI-Powered Startup Matching"
                    description="Let our AI recommend the best acquisition opportunities based on your investment criteria."
                />

                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Secure Transactions, Hassle-Free"
                    description="It's the best money you'll ever spend"
                />

                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Verified Startups, Real Sellers"
                    description="Every startup on SERS is verified to maintain transparency and trust in the marketplace."
                />

                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
                    title="Explore the Best Startup Deals"
                    description="Find startups across various industries and price ranges—your next big acquisition is here."
                />
            </ul>

        </section>
    )
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-customDarkBlue dark:text-white">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
                md:text-base/[1.375rem] text-neutral-600 dark:text-neutral-400"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};