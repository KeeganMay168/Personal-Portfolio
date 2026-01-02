'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Microscope, TrendingUp, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-xl text-blue-400 font-semibold">Texas A&M University</p>
                <p className="text-lg text-neutral-300">B.S. Mechatronics Engineering</p>
                <p className="text-neutral-400">Minor: Embedded Systems Programming</p>
                <p className="text-neutral-400">GPA: 3.04 | Expected: May 2026</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Focus Areas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-1">Semiconductor Manufacturing</h4>
                  <p className="text-neutral-400 text-sm">Driving innovation in advanced packaging and process integration</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-1">Robotics & Automation</h4>
                  <p className="text-neutral-400 text-sm">Applying automated systems to enhance manufacturing scalability</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-1">Embedded Systems</h4>
                  <p className="text-neutral-400 text-sm">Developing intelligent control systems for complex mechatronic applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-neutral-900/50 border-neutral-800 mt-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Key Strengths</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <Microscope className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Hands-on Fab Experience</h4>
                <p className="text-neutral-400 text-sm">Practical knowledge of CVD, Etch, and Metrology tools from industry experience</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Process Optimization</h4>
                <p className="text-neutral-400 text-sm">Data-driven mindset for improving throughput and yield (+4.1% facility throughput, +33% tool capacity)</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Cross-functional Leadership</h4>
                <p className="text-neutral-400 text-sm">Led 140+ engineering students and trained 30+ researchers on critical equipment</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
