import { SET_POINT_SHORT, SET_POINT_STANDARD } from './constant';

export type SetPoints = "15" | "25";
export type Duration = "Corto" | "Estandar";
export type SetPointDescription = typeof SET_POINT_SHORT | typeof SET_POINT_STANDARD;

export type Icon = "timer" | "emoji_events";