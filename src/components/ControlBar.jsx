import { playingModes } from "../constants";
import { usePlayerContext } from "../hooks/usePlayer";
import { BarSongTitle, BottomBar, Button } from "../styled-components";

export const ControlBar = () => {
  const { goToNextSong, goToPrevSong, currentSong, currentMode, changeMode } = usePlayerContext();

  if(!currentSong.title) return null;
  
  
  return (
    <BottomBar>
      <BarSongTitle data-testid="barTitle">{currentSong.author} - {currentSong.title}</BarSongTitle>
      <div>
        <Button data-testid="previousButton" onClick={() => goToPrevSong(currentSong.id)}>Previous</Button>
        <Button data-testid="nextButton" onClick={() => goToNextSong(currentSong.id)}>Next</Button>
        <Button data-testid="currentModeButton" onClick={() => changeMode(currentMode)}>{currentMode}</Button>
      </div>
    </BottomBar>
  );
};