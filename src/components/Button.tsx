

const Button = () => {
    return (

        <button className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255 , 255,255,0.1)_inset,0px_-1px_2px_0px_rgbs(255,255,255,0.1)_inset] text-xl">Subscribe
            <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-full mx-auto"></span>
            <span className="absolute opacity-0 group-hover:opacity-100  inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm transition-opacity duration-300 "></span>

        </button>

    )
}

export default Button
