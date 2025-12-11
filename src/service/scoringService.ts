import type { IScoringService } from "../domain/iScoringService"
import { Match } from "../domain/match"

export class ScoringService implements IScoringService {
    addPoint(match: Match, team: 'A' | 'B'): Match {
        if (match.isSetFinished()) {
            return match
        }

      
        const next = new Match({
            teamA: match.teamA,
            teamB: match.teamB,
            setNumber: match.setNumber,
            maxPoints: match.maxPoints,
            minDifference: match.minDifference,
        })


        if (team === 'A') next.teamA++
        else next.teamB++
       
        return next
    }

    removePoint(match: Match, team: 'A' | 'B'): Match {
        if (match.isSetFinished()) {
            return match
        }

        const next = new Match({
            teamA: match.teamA,
            teamB: match.teamB,
            setNumber: match.setNumber,
            maxPoints: match.maxPoints,
            minDifference: match.minDifference,
        })

        if (team === 'A' && next.teamA > 0) next.teamA--
        else if (team === 'B' && next.teamB > 0) next.teamB--
        // No permitimos puntajes negativos
        return next
    }


    reset(match?: Match): Match {
        return new Match({
            maxPoints: match?.maxPoints ?? 25,
            minDifference: match?.minDifference ?? 2,
        })
    }
}