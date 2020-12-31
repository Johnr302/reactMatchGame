import React from 'react'

export default (props) => {
  const { startOver } = props
  return (
    <>
    <h2>Game Over</h2>
    <button onClick={startOver}>Restart Game</button>
    </>
  )
}