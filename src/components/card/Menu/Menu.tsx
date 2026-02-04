import type { Duration, Icon, SetPointDescription, SetPoints } from "../../../types/types";

export interface MenuProps {
    setPoints: SetPoints;
    duration: Duration;
    setPointDescription: SetPointDescription;
    onNavigate: () => void;
    icon : Icon
}

export const Menu = ({ setPoints, duration, setPointDescription, onNavigate, icon}: MenuProps) => {
    return (
        <section className="w-full max-w-md mb-6 @container">  
        <article className="flex flex-col items-stretch justify-start rounded-xl shadow-xl bg-[#1c2127] border-2 border-transparent hover:border-primary transition-colors cursor-pointer group">
            <div
                className="w-full h-40 bg-center bg-no-repeat bg-cover rounded-t-xl relative overflow-hidden"
                data-alt="Abstract blue volleyball action background"
                style={{ backgroundImage: "linear-gradient(to bottom right, #2b8cee, #101922)" }}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl font-black text-white/20">{setPoints}</span>
                </div>
                <div className={duration === "Corto" ? "absolute bottom-4 right-4 bg-blue-500 text-background-white font-bold px-3 py-1 rounded-full text-xs" : "absolute bottom-4 right-4 bg-accent-yellow text-background-dark font-bold px-3 py-1 rounded-full text-xs"}>
                    SET {duration}
                </div>
            </div>
            <div className="flex w-full grow flex-col items-stretch justify-center gap-1 py-5 px-5">
                <div className="flex justify-between items-start">
                    <p className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Set a {setPoints} puntos</p>
                    <span className={icon === "timer" ? "material-symbols-outlined text-blue-500" : "material-symbols-outlined text-accent-yellow"}>
                        {icon === "timer" ? "timer" : "emoji_events"}
                    </span>
                </div>
                <div className="flex items-end gap-3 justify-between mt-2">
                    <p className="text-[#9dabb9] text-sm font-normal leading-normal max-w-[70%]">{setPointDescription}</p>
                    <button onClick={onNavigate} className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:scale-105 transition-transform">
                        <span className="truncate">Elegir</span>
                    </button>
                </div>
            </div>
        </article>
        </section>
    )

}