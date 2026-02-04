interface TimerPointProps {
    seconds: number;
}

export const TimerPoint = ({ seconds }: TimerPointProps) => {
    const formatTime = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return {
            minutes: mins.toString().padStart(2, '0'),
            seconds: secs.toString().padStart(2, '0')
        };
    };

    const { minutes, seconds: displaySeconds } = formatTime(seconds);

    return (
        <div className="py-4">
            <div className="flex gap-4 px-6 justify-center max-w-sm mx-auto">
                <div className="flex grow basis-0 flex-col items-center gap-2">
                    <div className="flex h-16 w-full items-center justify-center rounded-xl px-3 bg-[#1c2127] border border-white/10 shadow-lg">
                        <p className="text-primary text-3xl font-bold font-display">{minutes}</p>
                    </div>
                    <p className="text-[#9dabb9] text-[10px] font-bold uppercase tracking-wider">Minutos</p>
                </div>
                <div className="flex items-center pb-6">
                    <span className="text-primary text-3xl font-bold">:</span>
                </div>
                <div className="flex grow basis-0 flex-col items-center gap-2">
                    <div className="flex h-16 w-full items-center justify-center rounded-xl px-3 bg-[#1c2127] border border-white/10 shadow-lg">
                        <p className="text-primary text-3xl font-bold font-display">{displaySeconds}</p>
                    </div>
                    <p className="text-[#9dabb9] text-[10px] font-bold uppercase tracking-wider">Segundos</p>
                </div>
            </div>
        </div>
    )
}