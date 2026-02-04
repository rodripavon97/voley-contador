

import type { SetScore } from "../../../domain/match";

interface PointProps {
    currentScore: SetScore;
    onAddPoint: (team: 'team1' | 'team2') => void;
    onRemovePoint: (team: 'team1' | 'team2') => void;
    team: 'team1' | 'team2';
    teamName?: string;
    setsWon: number;
}

export const Point = ({ 
    currentScore, 
    onAddPoint, 
    onRemovePoint, 
    team,
    teamName = "Equipo",
    setsWon
}: PointProps) => {
    const teamScore = team === 'team1' ? currentScore.team1 : currentScore.team2;

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1c2127] p-5 shadow-xl">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-xl">groups</span>
                    </div>
                    <div>
                        <h2 className="text-white text-lg font-bold font-display">{teamName}</h2>
                        <p className="text-[#9dabb9] text-xs font-medium">Sets Ganados: {setsWon}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-1">
                <button 
                    onClick={() => onRemovePoint(team)}
                    disabled={teamScore === 0}
                    className="flex size-14 items-center justify-center rounded-full bg-white/5 border border-white/10 active:scale-90 transition-transform disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <span className="material-symbols-outlined text-2xl">remove</span>
                </button>
                <h1 className="text-white tracking-tight text-7xl font-bold font-display px-4">{teamScore}</h1>
                <button 
                    onClick={() => onAddPoint(team)}
                    className="flex size-14 items-center justify-center rounded-full bg-primary active:scale-90 transition-transform shadow-lg shadow-primary/20"
                >
                    <span className="material-symbols-outlined text-2xl text-white">add</span>
                </button>
            </div>
        </div>
    )
}