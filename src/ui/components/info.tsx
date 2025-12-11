interface infoProps {
    setNumber: number ,
    maxPoints: number
    minDifference: number
}

export const Info = ({ setNumber, maxPoints, minDifference }: infoProps) => {
    return (
        <div className="text-center">
            <div className="text-sm text-gray-500">Set {setNumber}</div>
            <div className="text-xl text-gray-600">Meta: {maxPoints} pts</div>
            <div className="mt-2 text-sm text-gray-500">Diferencia mínima: {minDifference}</div>
        </div>
    )
}