import { Button } from "./button"

interface PointContainerProps {
    team: 'A' | 'B'
    points: number
    onAddPoint: () => void
    onRemovePoint: () => void
    backgroundColor: 'blue' | 'red'
    disabled?: boolean
}

export const PointContainer = ({ team, points, onAddPoint, onRemovePoint, backgroundColor, disabled = false }: PointContainerProps) => {
    const bgColorClass = backgroundColor === 'blue' ? 'bg-blue-500' : 'bg-red-500'
    const buttonColorClass = backgroundColor === 'blue' ? 'bg-blue-700' : 'bg-red-700'
    
    return (
        <div className={`text-center ${bgColorClass} p-4 rounded-lg ${disabled ? 'opacity-75' : ''}`}>
            <div className="text-sm text-neutral-50">Equipo {team}</div>
            <div className="text-5xl font-bold text-neutral-50">{points}</div>
            <div className="mt-2 flex gap-2 justify-center">
            <Button text="-1" onClick={onRemovePoint} buttonClass={buttonColorClass} disabled={disabled || points === 0} />
            <Button text="+1" onClick={onAddPoint} buttonClass={buttonColorClass} disabled={disabled} />
            </div>
        </div>
    )
}