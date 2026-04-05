import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false)
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      ) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: -10,
        left: -10,
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: 'var(--primary)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        x: mouseX,
        y: mouseY,
      }}
      animate={{
        scale: isPointer ? 3 : 1,
        opacity: 0.8,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    />
  )
}

export default CustomCursor
