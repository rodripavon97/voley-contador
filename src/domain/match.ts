import type { GameConfiguration } from "./gameMode";

export interface SetScore {
  team1: number;
  team2: number;
}

export interface MatchState {
  currentSet: number;
  completedSets: SetScore[];
  currentScore: SetScore;
  gameConfig: GameConfiguration;
}

export const createInitialMatchState = (
  gameConfig: GameConfiguration
): MatchState => ({
  currentSet: 1,
  completedSets: [],
  currentScore: { team1: 0, team2: 0 },
  gameConfig
});

export const isSetFinished = (
  score: SetScore,
  config: GameConfiguration
): boolean => {
  const { team1, team2 } = score;
  const { pointsToWin, minDifference } = config;
  
  if (team1 >= pointsToWin && team1 - team2 >= minDifference) return true;
  if (team2 >= pointsToWin && team2 - team1 >= minDifference) return true;
  return false;
};

export const addPointToMatch = (
  state: MatchState,
  team: "team1" | "team2"
): MatchState => {
  const newScore: SetScore = {
    ...state.currentScore,
    [team]: state.currentScore[team] + 1
  };

  if (isSetFinished(newScore, state.gameConfig)) {
    return {
      ...state,
      currentSet: state.currentSet + 1,
      completedSets: [...state.completedSets, newScore],
      currentScore: { team1: 0, team2: 0 }
    };
  }

  return {
    ...state,
    currentScore: newScore
  };
};

export const removePointFromMatch = (
  state: MatchState,
  team: "team1" | "team2"
): MatchState => {
  if (state.currentScore[team] === 0) return state;

  return {
    ...state,
    currentScore: {
      ...state.currentScore,
      [team]: state.currentScore[team] - 1
    }
  };
};

export const getSetsWon = (
  state: MatchState,
  team: "team1" | "team2"
): number =>
  state.completedSets.filter(set => {
    if (team === "team1") {
      return set.team1 > set.team2;
    }
    return set.team2 > set.team1;
  }).length;
