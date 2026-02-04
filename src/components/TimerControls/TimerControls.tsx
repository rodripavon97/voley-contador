interface TimerControlsProps {
    isRunning: boolean;
    onStart: () => void;
    onPause: () => void;
    onReset: () => void;
}

export const TimerControls = ({ isRunning, onStart, onPause, onReset }: TimerControlsProps) => {
    return (
        <div className="grid grid-cols-2 gap-3 px-4 mt-2">
            <button 
                onClick={isRunning ? onPause : onStart}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 active:opacity-90 transition-transform active:scale-95"
            >
                <span className="material-symbols-outlined text-xl">
                    {isRunning ? 'pause_circle' : 'play_circle'}
                </span>
                {isRunning ? 'Pausar' : 'Iniciar'}
            </button>
            <button 
                onClick={onReset}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#283039] text-white font-bold text-sm border border-white/10 active:bg-[#343d48] transition-transform active:scale-95"
            >
                <span className="material-symbols-outlined text-xl">restart_alt</span>
                Reiniciar
            </button>
        </div>
    );
};
