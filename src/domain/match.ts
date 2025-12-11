export class Match {
    teamA: number
    teamB: number
    setNumber: number
    maxPoints: number
    minDifference: number


    constructor(opts?: Partial<Pick<Match, 'teamA' | 'teamB' | 'setNumber' | 'maxPoints' | 'minDifference'>>) {
        this.teamA = opts?.teamA ?? 0
        this.teamB = opts?.teamB ?? 0
        this.setNumber = opts?.setNumber ?? 1
        this.maxPoints = opts?.maxPoints ?? 25
        this.minDifference = opts?.minDifference ?? 2
    }


    isSetFinished(): boolean {
        const reach = this.teamA >= this.maxPoints || this.teamB >= this.maxPoints
        const diff = Math.abs(this.teamA - this.teamB) >= this.minDifference
        return reach && diff
    }


    winnerTeam(): 'A' | 'B' | null {
        if (!this.isSetFinished()) return null
        return this.teamA > this.teamB ? 'A' : 'B'
    }
}