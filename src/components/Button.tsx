import {motion} from "motion/react";

const Button = () => {
    return (

        <motion.button
            // initial={{rotate:0}}
            // animate = {{rotate:[0,20,0]}}
            // transition={{
            //     duration:2,
            //     ease:"easeInOut"
            // }}
            whileHover={{
                rotateX:20,
                rotateY:10,
                boxShadow:"0px 20px 50px rgba(8 , 112 , 184 , 0.7"

            }}
            style={{
                translateZ:100,   //for 3d effect
            }}
            transition={{
                ease:"easeInOut",
                duration:0.3
            }}
         className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255 , 255,255,0.1)_inset,0px_-1px_2px_0px_rgbs(255,255,255,0.1)_inset] text-xl">
            <span className="group-hover:text-cyan-500 transition-colors duration-300
            ">
            Subscribe
            </span>
            <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
            <span className="absolute opacity-0 group-hover:opacity-100  inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm transition-opacity duration-300 "></span>

        </motion.button>

    )
}

export default Button
