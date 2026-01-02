'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Hand, Plane, Bot, Waves, Activity } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Teleoperated Robot Hand",
      tags: ["ESP32", "Flex Sensors", "C++"],
      description: "Designed a remotely operated robotic hand controlled by a sensory glove. Implemented sensor fusion algorithms to map human finger flexure to servo actuation for precise, real-time mimicry.",
      category: "Embedded Systems",
      icon: Hand,
      color: "blue"
    },
    {
      title: "Smart Drone Landing Pad",
      tags: ["LiDAR", "Computer Vision", "Raspberry Pi"],
      description: "Engineered an autonomous landing system with active bed-leveling. Integrated LiDAR for obstacle avoidance and computer vision algorithms for precise color tracking and target alignment.",
      category: "Machine Vision",
      icon: Plane,
      color: "purple"
    },
    {
      title: "Autonomous Sentry Robot",
      tags: ["Mechanical Design", "Control Systems"],
      description: "Built a mobile robot featuring a custom suspension drivetrain and double-flywheel turret. Developed navigation logic for autonomous pathing and object targeting systems for competitive utility.",
      category: "Mechatronics",
      icon: Bot,
      color: "green"
    },
    {
      title: "Robotic Snake",
      tags: ["MATLAB", "Motion Tracking", "Control"],
      description: "Developed a robotic snake performing lateral undulation gait with motion tracking and feedback control in MATLAB for biomimetic locomotion research.",
      category: "Biomimetic Robotics",
      icon: Activity,
      color: "yellow"
    },
    {
      title: "Magnetohydrodynamic Submersible",
      tags: ["Sonar", "Computer Vision", "Underwater"],
      description: "Remotely-operated magnetohydrodynamic submersible robot with sonar sensing and computer vision for underwater navigation and exploration.",
      category: "Marine Robotics",
      icon: Waves,
      color: "cyan"
    }
  ]

  return (
    <section id="projects" className="py-20 px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mb-4"></div>
        <p className="text-neutral-400 mb-12 max-w-3xl">
          Engineering solutions integrating embedded systems, computer vision, and mechanical design
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            const colorClasses = {
              blue: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
              purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
              green: { bg: 'bg-green-500/10', text: 'text-green-400' },
              yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
              cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' }
            }
            const colors = colorClasses[project.color as keyof typeof colorClasses] || colorClasses.blue

            return (
              <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:border-blue-500/50 transition-all group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-purple-400 mb-3">{project.category}</p>
                  <p className="text-neutral-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
