import { Link } from "react-router-dom"
import LINKS from "../../types/links"

export const Navbar = () => {
    return (
        <nav className="flex gap-2 border-t border-[#283039] bg-[#1c2127] px-4 pb-6 pt-2">
         { LINKS.map((link) => 
            <Link key={link.id} to={link.href} className="flex flex-1 flex-col items-center justify-center gap-1 text-[#9dabb9]">
                 <div className="flex h-8 items-center justify-center">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{link.icon}</span>
                </div>
                <p className="text-xs font-medium leading-normal tracking-[0.015em]">{link.label}</p>
            </Link>
        )}
        </nav>
    )
}

