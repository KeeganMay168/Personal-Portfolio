'use client'

import { useEffect, useState, useRef } from 'react'

interface CommandHistory {
  command: string
  output: string[]
}

export function Terminal() {
  const [history, setHistory] = useState<CommandHistory[]>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands: Record<string, () => string[]> = {
    help: () => [
      'Available commands:',
      '  help       - Show this help message',
      '  about      - Learn about me',
      '  skills     - View my technical skills',
      '  experience - View my work experience',
      '  education  - View my education',
      '  contact    - Get my contact information',
      '  projects   - View my technical projects',
      '  summary    - Quick overview',
      '  clear      - Clear terminal',
    ],
    about: () => [
      'Keegan May - Mechatronics Engineering Student',
      '',
      'I specialize in Semiconductor Manufacturing, Robotics & Automation.',
      'Passionate about bridging hardware and software to create innovative solutions.',
      '',
      'Currently pursuing B.S. in Mechatronics Engineering at Texas A&M University.',
    ],
    skills: () => [
      'Core Expertise:',
      '',
      '🔧 Manufacturing: Semiconductor Manufacturing, CNC, 3D Printing',
      '💻 Programming: Python, C/C++, Java, ROS2, Assembly, JavaScript',
      '📐 CAD: SolidWorks, Fusion 360, OnShape, Inventor',
      '⚡ Semiconductor: CVD, Etch, FIB, Ellipsometry, Metrology',
      '',
      'Certifications: Lean Six Sigma Green Belt, Google Data Analytics, Harvard CS50',
    ],
    experience: () => [
      'Professional Experience:',
      '',
      '🔬 BrYet Pharmaceuticals - Process Engineer (Feb 2025 - Present)',
      '   └─ Cancer drug delivery systems, FIB microscopy, TFF processes',
      '',
      '💊 Medtronic - Process Engineer (Summer 2024)',
      '   └─ Optimized throughput by 4.1%, improved tool capacity by 33%',
      '',
      '⚙️  Samsung Austin Semiconductors - Equipment Engineering (Summer 2022)',
      '   └─ CVD equipment maintenance, digital SOP templates',
    ],
    education: () => [
      'Texas A&M University',
      'B.S. Mechatronics Engineering',
      'Minor: Embedded Systems Programming',
      'GPA: 3.04 | Expected Graduation: May 2026',
      '',
      'Research Areas:',
      '  • Soft Robotics & Electromechanical Systems',
      '  • Nanofabrication & Thin-Film Characterization',
      '  • Additive Manufacturing & Composites',
    ],
    contact: () => [
      'Contact Information:',
      '',
      '📧 Email: keeganmay168@gmail.com',
      '📱 Phone: (806) 283-3129',
      '📍 Location: Fort Worth, Texas',
      '🔗 LinkedIn: linkedin.com/in/keegan-may',
      '',
      'Feel free to reach out for opportunities or collaborations!',
    ],
    projects: () => [
      'Technical Projects:',
      '',
      '🤖 Autonomous Sentry Robot - Navigation & targeting systems',
      '✋ Teleoperated Robot Hand - ESP32, flex sensors, C++',
      '🚁 Smart Drone Landing Pad - LiDAR, computer vision',
      '🐍 Robotic Snake - MATLAB motion tracking & control',
      '🌊 MHD Submersible - Underwater navigation with sonar',
    ],
    summary: () => [
      'Keegan May | Mechatronics Engineer',
      '',
      '🎓 Texas A&M University - B.S. Mechatronics Engineering (2026)',
      '💼 Process Engineer @ BrYet Pharmaceuticals',
      '🏆 Captain - 1st Place North America Robotics Championship',
      '',
      '⚡ Specializations:',
      '   Semiconductor Manufacturing | Robotics | Automation',
      '',
      'Type "help" for available commands',
    ],
    clear: () => [],
  }

  useEffect(() => {
    // Show welcome message on mount
    setHistory([
      {
        command: '',
        output: [
          'Welcome to Keegan May\'s Portfolio Terminal',
          'Type "help" to see available commands or "summary" for a quick overview',
          '',
        ],
      },
    ])
  }, [])

  useEffect(() => {
    // Auto-scroll to bottom when history updates
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === 'clear') {
      setHistory([])
      return
    }

    let output: string[]
    if (commands[trimmedCmd]) {
      output = commands[trimmedCmd]()
    } else if (trimmedCmd === '') {
      output = []
    } else {
      output = [`Command not found: ${trimmedCmd}`, 'Type "help" to see available commands']
    }

    setHistory(prev => [...prev, { command: cmd, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentCommand.trim()) {
      handleCommand(currentCommand)
      setCurrentCommand('')
    }
  }

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 rounded-lg overflow-hidden font-mono text-sm shadow-2xl cursor-text"
      onClick={handleTerminalClick}
    >
      {/* Terminal Header */}
      <div className="bg-neutral-800 px-4 py-2 flex items-center gap-2 border-b border-neutral-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-neutral-400 text-xs ml-2">terminal - keegan@portfolio</span>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-4 space-y-2 h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900"
      >
        {history.map((entry, index) => (
          <div key={index}>
            {entry.command && (
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            {entry.output.map((line, lineIndex) => (
              <div key={lineIndex} className="text-neutral-300 ml-4">
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none"
            placeholder="Type a command..."
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}
