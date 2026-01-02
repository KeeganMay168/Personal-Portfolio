'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Terminal } from "@/components/ui/terminal"
import { Download, Mail } from "lucide-react"

const handleResumeDownload = async () => {
  const basePath = '/Personal-Portfolio'
  const pathsToTry = [
    `${basePath}/resume.pdf`,
    '/resume.pdf',
    './resume.pdf',
    'resume.pdf'
  ]

  for (const path of pathsToTry) {
    try {
      const response = await fetch(path)
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Keegan_May_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
        return
      }
    } catch (error) {
      // Try next path
      continue
    }
  }
  
  // If all fetch attempts fail, try opening in new tab
  console.error('All download attempts failed, trying direct link')
  window.open(`${basePath}/resume.pdf`, '_blank')
}

export function SplineSceneBasic() {
  return (
    <Card className="w-full min-h-[700px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-20 right-0 md:right-40 md:-top-10"
        fill="white"
      />

      <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 p-12 relative z-10">
        {/* Left content */}
        <div className="flex flex-col justify-center space-y-5 max-w-xl">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight pb-2">
              Keegan May
            </h1>
            <p className="text-xl text-blue-400">Mechatronics Engineer</p>
            <p className="text-neutral-300 text-base">
              Specializing in Semiconductor Manufacturing, Robotics & Automation
            </p>
          </div>

          {/* Terminal - Slightly Smaller */}
          <div className="max-w-[90%]">
            <Terminal />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap pt-2">
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium shadow-lg hover:shadow-blue-500/50"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-all font-medium border border-neutral-700 hover:border-blue-500"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
        </div>

        {/* Right content - 3D Scene */}
        <div className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
