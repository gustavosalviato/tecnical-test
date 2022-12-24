import './App.css'
import { MouseEvent, useEffect, useState } from 'react'
import { BaseButton } from './styles'

export interface IPoints {
  clientX: number,
  clientY: number,
}

const LOCAL_STORAGE_KEY = '@techincal-test:clickedPoints'

export function App() {

  const [clickedPoints, setClickedPoints] = useState<IPoints[]>(() => {
    const storedPoints = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (storedPoints) {
      return JSON.parse(storedPoints)
    }
    return []
  })


  const [removedPoints, setRemovedPoints] = useState<IPoints[]>([])

  function getCoordinates(e: MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e

    setClickedPoints([...clickedPoints, { clientX, clientY }])
  }

  function handleUndo() {
    const newClickedPoints = [...clickedPoints]

    const removedPoint = newClickedPoints.pop()
    if (!removedPoint) return
    setClickedPoints(newClickedPoints)
    setRemovedPoints([...removedPoints, removedPoint])
  }

  function handleRedo() {
    const newRemovedPoints = [...removedPoints]
    const removedPoint = newRemovedPoints.pop()
    if (!removedPoint) return
    setRemovedPoints(newRemovedPoints)
    setClickedPoints([...clickedPoints, removedPoint])
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(clickedPoints))

  }, [clickedPoints])

  return (
    <>
      <BaseButton
        onClick={handleUndo}
      >
        Undo Point
      </BaseButton>


      <BaseButton
        className='redoButton'
        onClick={handleRedo}
      >
        Redo Point
      </BaseButton>
      <div
        className="app-container"
        onClick={getCoordinates}
      >
        {clickedPoints.map((point, key) => (
          <div
            className='circle'
            style={{
              left: point.clientX,
              top: point.clientY,
              position: 'absolute',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              color: 'tomato',

            }}
            key={key}>
            •
          </div>
        ))}
      </div>
    </>

  )
}