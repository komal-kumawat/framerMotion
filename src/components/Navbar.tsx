import { useState } from "react";
import { motion } from "motion/react";
const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [hovered , setHovered] = useState<number|null>(null);
  return (
    <div className="py-40 flex items-center justify-center">
    <nav className="max-w-2xl min-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex justify-between items-center">
        {links.map((link , idx) => (
            <a 
            onMouseEnter={()=>setHovered(idx)}
            onMouseLeave={()=>setHovered(null)}
            className="w-full group py-3 relative text-center text-xs text-neutral-500"
            href={link.href}
            key={link.title}
            > {hovered===idx && (
              <motion.div layoutId="hover" className="absolute inset-0  rounded-full h-full bg-black "></motion.div>
            )}
            <motion.span className="relative group-hover:text-white">
              {link.title}

            </motion.span>
              </a>
        ))}
    </nav>
    </div>
  );
};

export default Navbar;
