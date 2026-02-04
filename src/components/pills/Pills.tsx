import type { SetScore } from "../../hooks/useMatchState";

interface PillsProps {
    currentSet: number;
    completedSets: SetScore[];
}

export const Pills = ({ currentSet, completedSets }: PillsProps) => {
    return (
        <section className="flex flex-col items-center py-2 gap-2">
            <h4 className="text-white text-xs font-bold leading-normal tracking-[0.2em] px-4 py-1 uppercase bg-primary/20 rounded-full border border-primary/30">
                Set {currentSet}
            </h4>
            
            {completedSets.length > 0 && (
                <div className="flex items-center gap-3 text-[11px] font-medium text-[#9dabb9] bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    {completedSets.map((set, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <span className="opacity-60 uppercase">Set {index + 1}:</span>
                                <span className="text-white font-bold">{set.team1}-{set.team2}</span>
                            </div>
                            {index < completedSets.length - 1 && (
                                <div className="w-px h-3 bg-white/10"></div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}