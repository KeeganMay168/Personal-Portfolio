'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Factory, Code, Ruler, Zap, GraduationCap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Manufacturing & Fabrication",
      icon: Factory,
      color: "blue",
      skills: [
        "Semiconductor Manufacturing",
        "CNC Mill & Lathe",
        "Additive Manufacturing",
        "Laser Cutter",
        "3D Printing"
      ]
    },
    {
      title: "Programming & Control",
      icon: Code,
      color: "purple",
      skills: [
        "Python",
        "C / C++",
        "Java",
        "ROS2",
        "Assembly",
        "HTML/CSS/JavaScript"
      ]
    },
    {
      title: "CAD & Mechanical Design",
      icon: Ruler,
      color: "green",
      skills: [
        "SolidWorks",
        "Autodesk Fusion 360",
        "OnShape",
        "Autodesk Inventor"
      ]
    },
    {
      title: "Semiconductor Tools",
      icon: Zap,
      color: "yellow",
      skills: [
        "CVD & Etch Equipment",
        "FIB Microscopy",
        "Spectroscopic Ellipsometry",
        "Metrology Systems",
        "Thin-Film Characterization"
      ]
    }
  ]

  const certifications = [
    "Lean Six Sigma Green Belt",
    "Google Data Analytics",
    "Microsoft Excel",
    "Harvard CS50",
    "Chemical Safety"
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string, bg: string, text: string }> = {
      blue: { border: "border-blue-500/20", bg: "bg-blue-500/10", text: "text-blue-400" },
      purple: { border: "border-purple-500/20", bg: "bg-purple-500/10", text: "text-purple-400" },
      green: { border: "border-green-500/20", bg: "bg-green-500/10", text: "text-green-400" },
      yellow: { border: "border-yellow-500/20", bg: "bg-yellow-500/10", text: "text-yellow-400" }
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="skills" className="py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mb-4"></div>
        <p className="text-neutral-400 mb-12 max-w-3xl">
          Comprehensive toolkit for engineering & manufacturing
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color)
            const IconComponent = category.icon
            return (
              <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:border-opacity-50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 ${colors.bg} ${colors.text} text-sm rounded-lg border ${colors.border}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-neutral-900/50 border-neutral-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications & Training</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white text-sm rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all"
                >
                  {cert}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
