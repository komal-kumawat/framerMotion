import { X } from "lucide-react";
import logo from "../assets/logo.png";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const Card = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <AnimatePresence>
                {open &&
                    <motion.div
                        initial={{
                            opacity:0,
                            scale:0.5,
                            filter:"blur(10px)",


                        }}
                        transition={{
                            ease:"easeInOut",
                            duration:0.5
                        }}
                        animate={{
                            opacity:1,
                            scale:1,
                            filter:"blur(0px)"
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            filter: "blur(10px)"
                        }}
                        className={"w-80 min-h-[28rem]  rounded-xl  shadow-2xl p-4 flex flex-col "}
                    >
                        <h1 className="font-bold text-[18px] text-gray-700">Aceternity UI Components</h1>
                        <p
                            className=" text-neutral-600 mt-2 text-[12px] "
                        >A collection of beautiful UI components , let's get on with it.
                        </p>
                        <div className="flex items-center justify-center">
                            <button className="flex items-center gap-1 text-[12px] mt-4 shadow-xl rounded-md px-2 py-1 font-bold" >
                                <img src={logo} alt="logo" width={50} height={50} className="h-5 w-5" />
                                Aceternity
                                <X className="h-3 w-4 top-0 right-0 text-neutral-400" onClick={() => setOpen(!open)}></X>
                            </button>
                        </div>
                        <div className="bg-gray-200 flex-1 mt-4 rounded-lg border border-neutral-200 relative">
                            {/* motion divs here */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur(10px)"
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur(0px)"
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5
                                }}
                                className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200">
                                <div className="p-4 text-[10px] flex items-start">abcd</div>
                                <div className="p-4 text-[10px] flex items-start">abcd</div>
                                <div className="p-4 text-[10px] flex items-start">abcd</div>
                                <div className="p-4 text-[10px] flex items-start">abcd</div>
                                <div className="p-4 text-[10px] flex items-start">abcd</div>
                                <div className="flex items-start p-4 text-[10px]">abcd</div>


                            </motion.div>


                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>

    )
}

export default Card
