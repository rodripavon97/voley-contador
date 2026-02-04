import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { TimerPoint } from "../../components/TimerPoint/TimerPoint";
import { TimerControls } from "../../components/TimerControls/TimerControls";
import { Pills } from "../../components/pills/Pills";
import { Point } from "../../components/card/Point/Point";
import { useMatchState } from "../../hooks/useMatchState";
import { useTimer } from "../../hooks/useTimer";
import { useGameConfiguration } from "../../hooks/useGameConfiguration";
import type { LayoutContext } from "../../types/layout";

export const MatchLive = () => {
    const { setTitle } = useOutletContext<LayoutContext>();
    const { gameConfig } = useGameConfiguration();
    const { matchState, addPoint, removePoint, getSetsWon } = useMatchState(gameConfig);  
    const { seconds, isRunning, handleStart, handlePause, handleReset } = useTimer();

    useEffect(() => {
      setTitle("Marcador en vivo");
    }, [setTitle]);

    return (
        <article className="flex-1 overflow-y-auto pb-32">
            <div className="bg-background-light dark:bg-background-dark">
                <TimerPoint seconds={seconds} />
                
                
                <Pills 
                    currentSet={matchState.currentSet}
                    completedSets={matchState.completedSets}
                />
                
                <div className="px-6 py-6 flex flex-col gap-4">
                    <Point 
                        currentScore={matchState.currentScore}
                        onAddPoint={addPoint}
                        onRemovePoint={removePoint}
                        team="team1"
                        teamName="Equipo A"
                        setsWon={getSetsWon('team1')}
                    />
                    
                    <Point 
                        currentScore={matchState.currentScore}
                        onAddPoint={addPoint}
                        onRemovePoint={removePoint}
                        team="team2"
                        teamName="Equipo B"
                        setsWon={getSetsWon('team2')}
                    />
                </div>

                <TimerControls 
                    isRunning={isRunning}
                    onStart={handleStart}
                    onPause={handlePause}
                    onReset={handleReset}
                />
                
            </div>
        </article>
    )
}
