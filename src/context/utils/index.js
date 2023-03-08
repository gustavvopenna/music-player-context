import { playingModes } from "../../constants"

export const getSong = ({ action = 'NEXT', songId, playlist, playingMode = playingModes[0] }) => {
  const songIndex = playlist.findIndex((song) => song.id === songId)
  const current = playlist[songIndex]
  const prev = playlist[songIndex - 1]
  const next = playlist[songIndex + 1]
  const first = playlist[0]
  const last = playlist[playlist.length - 1]

  if(action === 'NEXT') {
    if(next && playingMode === 'Replaying one') return current
    if(!next && playingMode === 'Not replaying') return current
    if(!next && playingMode === 'Replaying one') return current
    if(!next && playingMode === 'Replaying all') return first
    return next
  } else if(action === 'PREV') {
    if(prev && playingMode === 'Replaying one') return current
    if(!prev && playingMode === 'Not replaying') return current
    if(!prev && playingMode === 'Replaying one') return current
    if(!prev && playingMode === 'Replaying all') return last
    return prev
  }
}