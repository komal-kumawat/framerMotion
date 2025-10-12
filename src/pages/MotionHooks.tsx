"use client";

"use client";

import { X, CheckCircle, Star, Heart, Zap } from "lucide-react";
import car from "../assets/car.png"
import { useMotionValueEvent, useScroll, useTransform , motion } from "motion/react";
import { useRef } from "react";
type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
    content: React.ReactNode;
};

export const features: Feature[] = [
    {
        icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
        title: "Fast Performance",
        description: "Our app runs lightning fast",
        content: (
            <div className="w-full h-60  bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                    src={car}
                    alt="Fast Performance"
                    className="object-cover w-full h-full"
                />
            </div>
        ),
    },
    {
        icon: <Star className="h-6 w-6 text-yellow-500" />,
        title: "High Quality",
        description: "Top-notch quality in every feature",
        content: (
            <div className="w-full h-50 bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                    src={car}

                    alt="High Quality"
                    className="object-cover w-full h-full"
                />
            </div>
        ),
    },
    {
        icon: <Heart className="h-6 w-6 text-red-500" />,
        title: "User Friendly",
        description: "Intuitive and easy to use",
        content: (
            <div className="w-full h-50 bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                    src={car}

                    alt="User Friendly"
                    className="object-cover w-full h-full"
                />
            </div>
        ),
    },
    {
        icon: <Zap className="h-6 w-6 text-purple-500" />,
        title: "Innovative",
        description: "Cutting-edge technology",
        content: (
            <div className="w-full h-50 bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                    src={car}

                    alt="Innovative"
                    className="object-cover w-full h-full"
                />
            </div>
        ),
    },

];

const MotionHooks = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-10 ">
            <div className="flex flex-col gap-40 py-40">
                {features.map((feature, idx) =>
                    <Card key={feature.title} feature={feature} />
                )}
            </div>
        </div>
    )
}

const Card = ({ feature }: { feature: Feature }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    // useMotionValueEvent(scrollYProgress , "change" , (latest)=>{
    //     console.log("change values" ,latest )
    // })
    const translateContent = useTransform(scrollYProgress , [0,1] , [-200,200]);
    const opacityContent = useTransform(scrollYProgress , [0, 0.5, 1] , [0,1,0]);
    
    return <div
        ref = {ref}
        key={feature.title} 
        className="grid grid-cols-2 gap-10 py-40">
        <motion.div className="flex flex-col gap-5  justify-center" style={{opacity:opacityContent}}>
            {feature.icon}
            <h2 className="font-bold text-white text-2xl">{feature.title}</h2>
            <p className="text-gray-400 ">{feature.description}</p>
        </motion.div>
        <motion.div style={{
            y:translateContent,
            opacity:opacityContent
        }}>{feature.content}</motion.div>
    </div>
}

export default MotionHooks
