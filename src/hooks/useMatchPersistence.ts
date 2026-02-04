import { useEffect } from "react";
import type { MatchState } from "../domain/match";

const STORAGE_KEY = "voleypoints_current_match";

export const useMatchPersistence = (matchState: MatchState) => {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(matchState));
  }, [matchState]);

  const loadMatch = (): MatchState | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  };

  const clearMatch = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    loadMatch,
    clearMatch
  };
};
