import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

export const usePlayerContext = () => {
  const context = useContext(PlayerContext)

  if(context === undefined) {
    throw new Error('usePlayer must be used inside PlayerContext')
  }

  return context
};