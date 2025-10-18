"use client"
import {motion} from "motion/react";
const AnimationSequesnce = () => {
    const startAnimating = ()=>{
         
    }
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
        <motion.button
            onClick={startAnimating}
            style={{
                width:"20rem",
            }}
            className="h-20 rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500
            text-white font-medium cursor-pointer"
        >
            <span className="text">Purchase Now ($169)</span>
        </motion.button>

    </div>
  )
}

export default AnimationSequesnce
