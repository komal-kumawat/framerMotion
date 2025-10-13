import { useAnimate , motion, stagger } from "motion/react"
import { useEffect } from "react";

const AnimatedText = () => {
    const [scope, animate] = useAnimate();
    const text = "I’m passionate about turning ideas into reality through code. With a strong foundation in software development and a creative approach to problem-solving, I strive to build projects that make a meaningful impact."
    
    useEffect(()=>{
        startAnimating();
    } , [])

    const startAnimating = ()=>{
        "span"
        animate("span" , {
            opacity:1,
            filter:"blur(0px)",
            y:0
        },{
            duration:0.5,
            ease:"easeInOut",
            delay:stagger(0.04)
        });
    }
    return (
        <div
            ref={scope}

            className="text-white max-w-4xl mx-auto font-bold text-2xl">
            {/* <motion.span
                style={{
                    opacity:0
                }}
                className="inline-block"
            >
            {text}

            </motion.span> */}
            {text.split(" ").map((word , idx)=>(
                <motion.span
                    style={{
                       opacity:0,
                       filter:"blur(10px)" ,
                       y:10,
                    }}
                    key={word+idx}
                    className="inline-block"
                >
                    {word} &nbsp;
                </motion.span>
            ))}

        </div>
    )
}
const AnimatedTextComp = () => {
    return (
        <div
            className='flex items-center justify-content min-h-screen bg-black p-20'>
            <AnimatedText />
        </div>
    )
}

export default AnimatedTextComp
