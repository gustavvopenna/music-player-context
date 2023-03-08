import { createContext } from "react"
import { playingModes, songList } from "../constants"

export const INITIAL_STATE = {
  list: songList,
  currentSong: {
    author: '',
    title: '',
    id: ''
  },
  currentMode: playingModes[0]
}

export const PlayerContext = createContext(INITIAL_STATE)