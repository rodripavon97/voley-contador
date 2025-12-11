import { useEffect, useRef, useState } from "react"
import { useMatchStore } from "../../state/matchStore"
import { Info } from "./info"
import { PointContainer } from "./pointContainer"
import { Toast } from "./toast"

export default function Scoreboard() {
    const { match, addPointA, addPointB, removePointA, removePointB, nextSet, resetMatch } = useMatchStore()
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState("")
    const previousSetFinished = useRef(false)

    const winner = match.winnerTeam()
    const isSetFinished = match.isSetFinished()

    useEffect(() => {
        // Detectar cuando el set se completa por primera vez
        if (isSetFinished && !previousSetFinished.current && winner) {
            setToastMessage(`¡Equipo ${winner} ganó el Set ${match.setNumber}!`)
            setShowToast(true)
        }
        previousSetFinished.current = isSetFinished
    }, [isSetFinished, winner, match.setNumber])

    return (
        <div className="flex flex-col gap-4">
            <Toast 
                message={toastMessage} 
                show={showToast} 
                onClose={() => setShowToast(false)} 
            />
            
            <div className="flex justify-between items-center">
                <PointContainer 
                    team="A" 
                    points={match.teamA} 
                    onAddPoint={addPointA} 
                    onRemovePoint={removePointA} 
                    backgroundColor="blue"
                    disabled={isSetFinished}
                />
                <Info setNumber={match.setNumber} maxPoints={match.maxPoints} minDifference={match.minDifference} />
              <PointContainer 
                    team="B" 
                    points={match.teamB} 
                    onAddPoint={addPointB} 
                    onRemovePoint={removePointB} 
                    backgroundColor="red"
                    disabled={isSetFinished}
                />
            </div>


            {match.isSetFinished() && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded flex flex-col items-center">
                    <div className="font-medium">Set finalizado — Ganador: Equipo {winner}</div>
                    <div className="mt-2 flex gap-2">
                        <button className="px-3 py-1 rounded bg-green-600 text-white" onClick={nextSet}>Siguiente set</button>
                        <button className="px-3 py-1 rounded border" onClick={resetMatch}>Resetear partido</button>
                    </div>
                </div>
            )}
        </div>
    )
}