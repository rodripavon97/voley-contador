import { create } from "zustand"
import { Match } from "../domain/match"
import { ScoringService } from "../service/scoringService"

const scoring = new ScoringService()


type State = {
    match: Match
    addPointA: () => void
    addPointB: () => void
    removePointA: () => void
    removePointB: () => void
    nextSet: () => void
    resetMatch: () => void
}


export const useMatchStore = create<State>((set, get) => ({
    match: new Match(),


    addPointA: () => {
        const { match } = get()
        const updated = scoring.addPoint(match, 'A')
        set({ match: updated })
    },


    addPointB: () => {
        const { match } = get()
        const updated = scoring.addPoint(match, 'B')
        set({ match: updated })
    },

    removePointA: () => {
        const { match } = get()
        const updated = scoring.removePoint(match, 'A')
        set({ match: updated })
    },

    removePointB: () => {
        const { match } = get()
        const updated = scoring.removePoint(match, 'B')
        set({ match: updated })
    },


    nextSet: () => {
        const { match } = get()
        if (!match.isSetFinished()) return
        const newMatch = scoring.reset(match)
        newMatch.setNumber = match.setNumber + 1
        set({ match: newMatch })
    },


    resetMatch: () => set({ match: scoring.reset() }),
}))