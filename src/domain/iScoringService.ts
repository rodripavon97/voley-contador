import type { Match } from "./match"

export interface IScoringService {
addPoint(match: Match, team: 'A' | 'B'): Match
removePoint(match: Match, team: 'A' | 'B'): Match
reset(match?: Match): Match
}