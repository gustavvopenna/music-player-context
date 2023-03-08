import { songList } from "../constants";
import { usePlayerContext } from "../hooks/usePlayer";
import { PlayList, Song, SongTitle } from "../styled-components";

export const Songs = () => {
  const { goToSong, playing } = usePlayerContext()

  const isActive = (currentSong, songId) => currentSong.id === songId

  return (
    <PlayList>
      {songList.map(({ title, author, id }) => (
        <Song key={id} onClick={() => goToSong(id)} data-active={isActive(playing, id)}>
          <SongTitle data-testid={id} active={isActive(playing, id)}>
            {title}
          </SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </PlayList>
  );
};