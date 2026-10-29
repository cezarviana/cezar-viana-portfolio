import { useEffect, useRef } from 'react'
import { MatrixAnimation as MatrixAnimationEngine } from 'matrix-animation'

export const MatrixAnimation = () => {
    const matrixRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const container = matrixRef.current
      if (!container) return
  
      const matrix = new MatrixAnimationEngine(container, {
        autoStart: false,
        charArrays: ['0', '1'],
        frameDelay: 70,
        rainHeight: 7,
        fontSize: 18,
        headColor: '#d5ffdf',
        rainGenerator: { count: 70 },
        rainWidth: 18,
        trailColorLogic: 'sequential',
        trailColors: ['#005b1b', '#00a832', '#00ff41'],
      })
      matrix.play()
  
      return () => matrix.dispose()
    }, [])
  return (
          <div
        ref={matrixRef}
        className="matrix-background pointer-events-none absolute inset-0 z-0 opacity-36"
        aria-hidden="true"
      />
  )
}
