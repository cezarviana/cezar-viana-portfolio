import { useRef, useState } from 'react'
import UnicornImg from '../../assets/images/unicorn.png'

export const UnicornOrigami = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const [tilt, setTilt] = useState({ x: 0, y: 0, z: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef<{
    x: number
    y: number
    rotation: typeof rotation
  } | null>(null)

  const handlePointerMove = (event: React.PointerEvent<HTMLImageElement>) => {
    if (dragStart.current) {
      const deltaX = event.clientX - dragStart.current.x
      const deltaY = event.clientY - dragStart.current.y

      setRotation({
        x: dragStart.current.rotation.x - deltaY * 0.5,
        y: dragStart.current.rotation.y + deltaX * 0.5,
        z: dragStart.current.rotation.z,
      })
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)

    setTilt({ x: -y * 6, y: x * 6, z: 0 })
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLImageElement>) => {
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      rotation,
    }
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerUp = () => {
    dragStart.current = null
    setIsDragging(false)
  }

  return (
    <>
      <img
        src={UnicornImg}
        alt="Unicorn Origami"
        className="flex items-end w-35 h-35 bottom-0 cursor-grab active:cursor-grabbing touch-none select-none"
        draggable={false}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          if (!dragStart.current) setTilt({ x: 0, y: 0, z: 0 })
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          transform: `perspective(600px) rotateX(${rotation.x + tilt.x}deg) rotateY(${rotation.y + tilt.y}deg) rotateZ(${rotation.z}deg)`,
          transition: isDragging ? 'none' : 'transform 120ms ease-out',
        }}
      />
    </>
  )
}
