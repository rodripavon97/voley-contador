import { useMatchStore } from "../state/matchStore"

export const useMatch = () => {
    const { match, addPointA, addPointB, nextSet, resetMatch } = useMatchStore()
    return { match, addPointA, addPointB, nextSet, resetMatch }
}