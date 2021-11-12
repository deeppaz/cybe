import React from "react"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
  items: {
    bottom: "#ffffff",
    left: "#ffffff",
    front: "#ffffff",
    line: "#ffffff",
    right: "#ffffff",
    back: "#ffffff",
    top: "#ffffff",
  },
})

function Picker() {
  const snap = useSnapshot(state)

  return (
    <div>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current ? snap.current : "pick color"}</h1>
    </div>
  )
}

export default Picker
