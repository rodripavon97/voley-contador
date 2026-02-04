import { useState } from "react";
import {
  addPointToMatch,
  createInitialMatchState,
  getSetsWon as getSetsWonFromDomain,
  removePointFromMatch
} from "../domain/match";
import type { MatchState } from "../domain/match";
import type { GameConfiguration } from "../domain/gameMode";
import { useMatchPersistence } from "./useMatchPersistence";

export const useMatchState = (gameConfig: GameConfiguration) => {
  const [matchState, setMatchState] = useState<MatchState>(() => {
    return createInitialMatchState(gameConfig);
  });

  const { clearMatch } = useMatchPersistence(matchState);

  const addPoint = (team: "team1" | "team2") => {
    setMatchState(prev => addPointToMatch(prev, team));
  };

  const removePoint = (team: "team1" | "team2") => {
    setMatchState(prev => removePointFromMatch(prev, team));
  };

  const getSetsWon = (team: "team1" | "team2"): number =>
    getSetsWonFromDomain(matchState, team);

  const resetMatch = () => {
    setMatchState(createInitialMatchState(gameConfig));
    clearMatch();
  };

  return {
    matchState,
    addPoint,
    removePoint,
    getSetsWon,
    resetMatch
  };
};
