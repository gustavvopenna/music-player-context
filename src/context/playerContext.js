import { createContext } from "react"
import { playingModes, songList } from "../constants"

export const INITIAL_STATE = {
  playlist: songList,
  playing: {
    author: '',
    title: '',
    id: ''
  },
  playingMode: playingModes[0]
}

export const PlayerContext = createContext(INITIAL_STATE)