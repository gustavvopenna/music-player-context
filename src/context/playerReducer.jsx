import { useReducer } from "react"
import { playingModes } from "../constants"
import { INITIAL_STATE, PlayerContext } from "./playerContext"

const playerReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case "CHANGE_SONG": {
      const songIndex = state.list.findIndex((song) => song.id === payload)
      return { ...state, currentSong: state.list[songIndex] }
    }
    case "NEXT_SONG": {
      const songIndex = state.list.findIndex((song) => song.id === payload)
      const current = state.list[songIndex]
      const next = state.list[songIndex + 1]
      const first = state.list[0]

      if(!next && state.currentMode === 'Not replaying') return { ...state, currentSong: current }
      if(!next && state.currentMode === 'Replaying all') return { ...state, currentSong: first }
      if(!next && state.currentMode === 'Replaying one') return { ...state, currentSong: current }
      if(next && state.currentMode === 'Replaying one') return { ...state, currentSong: current }

      return { ...state, currentSong: next }
    }
    case "PREV_SONG": {
      const songIndex = state.list.findIndex((song) => song.id === payload)
      const current = state.list[songIndex]
      const prev = state.list[songIndex - 1]
      const last = state.list[state.list.length - 1]

      if(!prev && state.currentMode === 'Not replaying') return { ...state, currentSong: current }
      if(!prev && state.currentMode === 'Replaying all') return { ...state, currentSong: last }
      if(!prev && state.currentMode === 'Replaying one') return { ...state, currentSong: current }
      if(prev && state.currentMode === 'Replaying one') return { ...state, currentSong: current }

      return { ...state, currentSong: prev }
    }
    case "CHANGE_MODE": {
      const current = playingModes.findIndex(mode => mode === payload)
      const next = playingModes[current + 1] || playingModes[0]
      return { ...state, currentMode: next }
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