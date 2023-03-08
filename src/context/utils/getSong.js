import { INITIAL_STATE } from "../playerContext"

export const getSong = ({ action = 'NEXT', songId, playlist, playingMode }) => {
  const songIndex = playlist.findIndex((song) => song.id === songId)
  const current = playlist[songIndex]
  const prev = playlist[songIndex - 1]
  const next = playlist[songIndex + 1]
  const first = playlist[0]
  const last = playlist[playlist.length - 1]

  if(action === 'NEXT') {
    if(playingMode === 'Replaying one') return current
    if(!next && playingMode === 'Not replaying') return INITIAL_STATE.playing
    if(!next && playingMode === 'Replaying all') return first
    return next
  } else if(action === 'PREV') {
    if(playingMode === 'Replaying one') return current
    if(!prev && playingMode === 'Not replaying') return first
    if(!prev && playingMode === 'Replaying all') return last
    return prev
  }
}