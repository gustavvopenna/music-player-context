import { playingModes } from "../constants";
import { usePlayerContext } from "../hooks/usePlayer";
import { BarSongTitle, BottomBar, Button } from "../styled-components";

export const ControlBar = () => {
  const { goToNextSong, goToPrevSong, playing, playingMode, changeMode } = usePlayerContext();

  if(!playing.title) return null;
  
  
  return (
    <BottomBar>
      <BarSongTitle data-testid="barTitle">{playing.author} - {playing.title}</BarSongTitle>
      <div>
        <Button data-testid="previousButton" onClick={() => goToPrevSong(playing.id)}>Previous</Button>
        <Button data-testid="nextButton" onClick={() => goToNextSong(playing.id)}>Next</Button>
        <Button data-testid="currentModeButton" onClick={() => changeMode(playingMode)}>{playingMode}</Button>
      </div>
    </BottomBar>
  );
};