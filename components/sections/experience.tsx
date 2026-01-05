'use client'

import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Process Engineer",
      company: "BrYet Pharmaceuticals",
      location: "Houston, Texas",
      period: "February 2025 – Present",
      type: "professional",
      highlights: [
        "Implementing semiconductor manufacturing and biomedical techniques to develop injectable silicon nanoparticles for cancer drug delivery systems",
        "Analyzing nanopores on micron-sized particles using Focused-Ion-Beam (FIB) microscope to provide feedback on film non-uniformity and defects",
        "Introduced nanoparticle tangential flow filtration (TFF) process, significantly reducing process lead time",
        "Formulating solutions to effectively target and eliminate cancer in tumor microenvironments"
      ]
    },
    {
      title: "Process Engineer - Biomedical Devices",
      company: "Medtronic",
      location: "Tempe, Arizona",
      period: "July 2024 – August 2024",
      type: "professional",
      highlights: [
        "Qualified automated semiconductor tools for manufacturing micro-scale injectable devices and sensors",
        "Optimized facility throughput by 4.1% and improved tool capacity by 33% in photoresist strip and dry etch processes",
        "Authored qualification documents and technical reports for LINQ-II cardiac monitors and diabetes sensor production",
        "Developed non-destructive inspection process using spectroscopic ellipsometry to detect contamination/defects"
      ]
    },
    {
      title: "Equipment Engineering Technician",
      company: "Samsung Austin Semiconductors",
      location: "Austin, Texas",
      period: "June 2022 – August 2022",
      type: "professional",
      highlights: [
        "Designed digital SOP templates for equipment maintenance and documentation with CAD models and hyperlinks",
        "Performed tool maintenance and troubleshooting on Chemical Vapor Deposition (CVD) equipment in collaboration with engineers"
      ]
    },
    {
      title: "Research Assistant - Soft Robotics",
      company: "Texas A&M Dept. of Multidisciplinary Engineering",
      location: "College Station, Texas",
      period: "August 2023 – Present",
      type: "research",
      highlights: [
        "Developing soft robotics model incorporating flexibly actuated polyurethane gyroids",
        "Designing CAD models and conducting FEA to guide design adjustments for parts with variable mechanical properties",
        "PID tuning for IMU sensors to provide feedback on real-time 3D kinematics"
      ]
    },
    {
      title: "Undergraduate Researcher - Nanofabrication",
      company: "AggieFab Nanofabrication Facility",
      location: "College Station, Texas",
      period: "September 2023 – January 2025",
      type: "research",
      highlights: [
        "Developed thin-film characterization models for SiN, Si₃N₄, and SiO₂ using spectroscopic reflectometry",
        "Trained 30+ researchers on semiconductor equipment for metrology, etch, and deposition",
        "Performed experimental analysis optimizing etch rate and uniformity of reactive-ion etch (RIE) processes"
      ]
    },
    {
      title: "Undergraduate Researcher - Additive Manufacturing",
      company: "Texas A&M Dept. of Industrial & Systems Engineering",
      location: "College Station, Texas",
      period: "February 2025 – Present",
      type: "research",
      highlights: [
        "Conducting research on binder jet additive manufacturing techniques and composite materials",
        "Designed and fabricated test specimens using binder jet printing technology",
        "Analyzing mechanical properties of printed composites through material characterization and testing",
        "Optimizing binder jet process parameters to improve part quality and structural integrity"
      ]
    }
  ]

  const leadership = [
    {
      title: "Captain",
      company: "Texas A&M Robomasters Robotics",
      achievement: "1st Place North America Championship",
      period: "September 2022 – Present",
      highlights: [
        "Led 140+ engineering students across electrical, mechanical, and programming sub-teams",
        "Directed design and fabrication of complex robots for international competitions",
        "Hosted STEM outreach events and conferences with local K-12 schools"
      ]
    },
    {
      title: "Event Coordinator, Judge, Inspector",
      company: "Texas Combat Robotics",
      period: "September 2022 – March 2024",
      highlights: [
        "Coordinated Texas A&M's largest robotics event featuring BattleBots teams Riptide and SubZero",
        "Organized safety inspections, judging protocols, and live broadcasting of combat robotics events"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mb-12"></div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-400 mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.filter(exp => exp.type === 'professional').map((exp, index) => (
              <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:border-blue-500/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <p className="text-lg text-blue-400">{exp.company}</p>
                      <p className="text-neutral-400 text-sm">{exp.location}</p>
                    </div>
                    <span className="text-neutral-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-neutral-300 text-sm flex items-start">
                        <span className="text-blue-500 mr-2">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-purple-400 mb-8">Research Experience</h3>
          <div className="space-y-6">
            {experiences.filter(exp => exp.type === 'research').map((exp, index) => (
              <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:border-purple-500/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <p className="text-lg text-purple-400">{exp.company}</p>
                      <p className="text-neutral-400 text-sm">{exp.location}</p>
                    </div>
                    <span className="text-neutral-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-neutral-300 text-sm flex items-start">
                        <span className="text-purple-500 mr-2">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-8">Leadership Experience</h3>
          <div className="space-y-6">
            {leadership.map((role, index) => (
              <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{role.title}</h4>
                      <p className="text-lg text-green-400">{role.company}</p>
                      {role.achievement && (
                        <p className="text-yellow-400 text-sm font-semibold">🏆 {role.achievement}</p>
                      )}
                    </div>
                    <span className="text-neutral-400 text-sm mt-2 md:mt-0">{role.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {role.highlights.map((highlight, i) => (
                      <li key={i} className="text-neutral-300 text-sm flex items-start">
                        <span className="text-green-500 mr-2">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
