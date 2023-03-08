import { songList } from "../constants";
import { usePlayerContext } from "../hooks/usePlayer";
import { PlayList, Song, SongTitle } from "../styled-components";

export const Songs = () => {
  const { goToSong } = usePlayerContext()

  return (
    <PlayList>
      {songList.map(({ title, author, id }) => (
        <Song key={id} onClick={() => goToSong(id)}>
          <SongTitle data-testid={id} active={false}>
            {title}
          </SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </PlayList>
  );
};