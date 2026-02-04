export type GameMode = "short" | "standard";

export interface GameConfiguration {
  mode: GameMode;
  pointsToWin: number;
  minDifference: number;
}

export const GAME_MODES: Record<GameMode, GameConfiguration> = {
  short: {
    mode: "short",
    pointsToWin: 15,
    minDifference: 2
  },
  standard: {
    mode: "standard",
    pointsToWin: 25,
    minDifference: 2
  }
};

export const getGameConfiguration = (mode: GameMode): GameConfiguration =>
  GAME_MODES[mode];
