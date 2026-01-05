'use client'

import { Suspense, lazy, useState } from 'react'
import { motion } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function LoadingScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="relative w-24 h-24 mb-6">
          <motion.div
            className="absolute inset-0 border-4 border-blue-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-purple-500/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 border-4 border-blue-400 rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          className="text-white text-lg font-semibold mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading 3D Experience
        </motion.p>
        <p className="text-neutral-400 text-sm">Please wait...</p>
      </motion.div>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full">
      {isLoading && <LoadingScreen />}
      <Suspense fallback={<LoadingScreen />}>
        <Spline
          scene={scene}
          className={className}
          onLoad={() => setIsLoading(false)}
        />
      </Suspense>
    </div>
  )
}
