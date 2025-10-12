"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
type Card = {
    title: string;
    description: string;
    src: string;
    ctaLink: string;
    ctaText: string;
    content: React.ReactNode;
};

export const cards: Card[] = [
    {
        title: "Seamless Integration",
        description: "Easily connect with your favorite tools and services.",
        src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        ctaLink: "https://zapier.com",
        ctaText: "play",
        content: (
            <p className="text-gray-400">
                Zapier lets you automate workflows by connecting 6,000+ apps without writing code.
                Zapier lets you automate workflows by connecting 6,000+ apps without writing code.
                Zapier lets you automate workflows by connecting 6,000+ apps without writing code.
                Zapier lets you automate workflows by connecting 6,000+ apps without writing code.
                Zapier lets you automate workflows by connecting 6,000+ apps without writing code.
                Zapier lets you automate workflows by connecting 6,000+ apps without writing code.
                Zapier lets you automate workflows by connecting 6,000+ apps without writing code.

            </p>
        ),
    },
    {
        title: "Powerful Analytics",
        description: "Track, analyze, and optimize your performance in real time.",
        src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",

        ctaLink: "https://analytics.google.com/",
        ctaText: "play",

        content: (
            <p className="text-gray-400">
                Google Analytics gives you deep insights into traffic sources, engagement, and conversions.
            </p>
        ),
    },
    {
        title: "Team Collaboration",
        description: "Empower your team to work smarter together.",
        src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",

        ctaLink: "https://slack.com",
        ctaText: "play",

        content: (
            <p className="text-gray-400">
                Slack helps your team collaborate efficiently with channels, calls, and integrations.
            </p>
        ),
    },
    {
        title: "Data Security",
        description: "Your data is encrypted and safely stored.",
        src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",

        ctaLink: "https://www.cloudflare.com/",
        ctaText: "play",

        content: (
            <p className="text-gray-400">
                Cloudflare secures millions of websites with DDoS protection and SSL encryption.
            </p>
        ),
    },
    {
        title: "24/7 Support",
        description: "We’re always here to help you succeed.",
        src: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",

        ctaLink: "https://intercom.com",
        ctaText: "play",

        content: (
            <p className="text-gray-400">
                Intercom provides world-class chat-based customer support tools for modern teams.
            </p>
        ),
    },
];

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        const timer = setTimeout(() => {
            document.addEventListener("click", handleClick);
        }, 0);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("click", handleClick);
        };
    }, [callback])
    return ref;
}

const Layout = () => {
    const [current, setCurrent] = useState<Card | null>(null);
    const ref = useOutsideClick(() => setCurrent(null));
    return (
        <div className="py-20 bg-gray-100 min-h-screen relative  flex flex-col items-center justify-center">
            {current && <div className="fixed z-60 h-full inset-0 bg-black/50 backdrop-blur-sm"></div>}
            {current &&
                <motion.div
                    layoutId={`card-${current.title}`}
                    ref={ref}
                    className="h-[600px] w-90  rounded-2xl border border-neutral-200 p-4 flex flex-col justify-center items-center absolute z-100 bg-gray-100 overflow-hidden">
                    <motion.img layoutId={`card-image-${current.title}`} src={current.src} alt={current.title} className="h-60 w-full rounded-xl aspect-square" />
                    <motion.div layoutId={`card-comp-${current.title}`} className="flex justify-content items-center  flex-col">
                        <motion.div className="flex gap-4 items-center gap-10 p-2" >
                            <motion.div layoutId={`card-h2p-${current.title}`} className="flex flex-col items-center justify-between gap-2 p-5">
                                <motion.h2 layoutId={`card-h2-${current.title}`} className="font-bold text-lg text-black">{current.title}</motion.h2>
                                <motion.p layoutId={`card-p-${current.title}`} className="text-[15px] text-neutral-500">{current.description}</motion.p>
                            </motion.div>
                        <motion.a layoutId={`card-a-${current.title}`} href={current.ctaLink} className="px-2 py-1 bg-green-500 rounded-lg text-white text-[15px]">{current.ctaText}</motion.a>

                        </motion.div>
                        <motion.div
                            initial={{
                                filter:`blur(10px)`,
                                opacity:0,
                            }}
                            animate={{
                                opacity:1,
                                filter:`blur(0px)`
                            }}
                            transition={{
                                duration:0.5,
                                ease:"easeInOut"
                            }}
                            className="p-5 h-50 pb-20 overflow-auto [mask-image:linear-gradient(to_top,transparent_20%,rgba(0,0,0,0.8)_50%)]"
                            >

                            {current.content}
                        </motion.div>

                    </motion.div>
                </motion.div>
            }
            <div className="max-w-xl mx-auto flex flex-col gap-10">
                {cards.map((card, idx) =>
                    <motion.button
                        layoutId={`card-${card.title}`}
                        key={card.title + idx}
                        className="p-4 rounded-xl flex justify-between shadow-lg items-center gap-20 cursor-pointer z-50"
                        onClick={() => setCurrent(card)}>
                        <motion.div layoutId={`card-comp-${card.title}`} className="flex gap-4 items-center gap-10">
                            <motion.img layoutId={`card-image-${card.title}`} src={card.src} alt={card.title} className=" h-12 aspect-square rounded-lg" width={60} />
                            <motion.div layoutId={`card-h2p-${card.title}`} className="flex flex-col items-center gap-2">
                                <motion.h2 layoutId={`card-h2-${card.title}`} className="font-bold text-lg text-black">{card.title}</motion.h2>
                                <motion.p layoutId={`card-p-${card.title}`} className="text-xs text-neutral-500">{card.description}</motion.p>
                            </motion.div>
                        </motion.div>
                        <motion.a layoutId={`card-a-${card.title}`} href={card.ctaLink} className="px-2 py-1 bg-green-500 rounded-lg text-white text-[15px]">{card.ctaText}</motion.a>


                    </motion.button>
                )}

            </div>
        </div>
    )
}

export default Layout;
