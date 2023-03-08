import { useReducer } from "react"
import { playingModes } from "../constants"
import { INITIAL_STATE, PlayerContext } from "./playerContext"
import { getSong } from "./utils"

const playerReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case "CHANGE_SONG": {
      const songIndex = state.playlist.findIndex((song) => song.id === payload)
      return { ...state, playing: state.playlist[songIndex] }
    }
    case "NEXT_SONG": {
      const playing = getSong({ action: 'NEXT', songId: payload, playlist: state.playlist, playingMode: state.playingMode })
      return { ...state, playing }
    }
    case "PREV_SONG": {
      const playing = getSong({ action: 'PREV', songId: payload, playlist: state.playlist, playingMode: state.playingMode })
      return { ...state, playing }
    }
    case "CHANGE_MODE": {
      const currentMode = playingModes.findIndex(mode => mode === payload)
      const newMode = playingModes[currentMode + 1] || playingModes[0]
      return { ...state, playingMode: newMode }
    }
    default:
      throw new Error(`No case for ${type} found in playerReducer.`)
  }
}

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, INITIAL_STATE)


  const goToSong = (songIndex) => {
    dispatch({
      type: 'CHANGE_SONG',
      payload: songIndex
    })
  }

  const goToNextSong = (songIndex) => {
    dispatch({
      type: 'NEXT_SONG',
      payload: songIndex
    })
  }

  const goToPrevSong = (songIndex) => {
    dispatch({
      type: 'PREV_SONG',
      payload: songIndex
    })
  }

  const changeMode = (mode) => {
    dispatch({
      type: 'CHANGE_MODE',
      payload: mode
    })
  }

  const value = {
    ...state,
    goToSong,
    goToNextSong,
    goToPrevSong,
    changeMode
  }

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};