import { useState, useEffect } from "react";
import { GAME_MODES, type GameMode, type GameConfiguration } from "../domain/gameMode";

const STORAGE_KEY = "voleypoints_game_config";

export const useGameConfiguration = () => {
  const [gameConfig, setGameConfig] = useState<GameConfiguration>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return parsed;
      } catch {
        return GAME_MODES.standard;
      }
    }
    return GAME_MODES.standard;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameConfig));
  }, [gameConfig]);

  const setGameMode = (mode: GameMode) => {
    setGameConfig(GAME_MODES[mode]);
  };

  return {
    gameConfig,
    setGameMode
  };
};
