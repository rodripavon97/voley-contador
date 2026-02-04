import { useOutletContext, useNavigate } from "react-router-dom";
import { Menu } from "../components/card/Menu/Menu"
import { Hero } from "../components/Hero/Hero"
import { useEffect } from "react";
import { SET_POINT_SHORT, SET_POINT_STANDARD } from "../types/constant";
import { useGameConfiguration } from "../hooks/useGameConfiguration";
import type { LayoutContext } from "../types/layout";

export const GameMode = () => {
    const { setTitle, setShowBackButton } = useOutletContext<LayoutContext>();
    const navigate = useNavigate();
    const { setGameMode } = useGameConfiguration();

    useEffect(() => {
      setTitle("Modo de Juego");
      setShowBackButton(false);
      
      return () => {
        setShowBackButton(true);
      };
    }, [setTitle, setShowBackButton]);

    const handleShortMode = () => {
        setGameMode("short");
        navigate("/match-live");
    };

    const handleStandardMode = () => {
        setGameMode("standard");
        navigate("/match-live");
    };

    return (
        <>
        
        <Hero />
      
        <Menu icon="timer" setPoints="15" duration="Corto" setPointDescription={SET_POINT_SHORT} onNavigate={handleShortMode} />
        <Menu icon="emoji_events" setPoints="25" duration="Estandar" setPointDescription={SET_POINT_STANDARD} onNavigate={handleStandardMode} />
        </>
    )
}