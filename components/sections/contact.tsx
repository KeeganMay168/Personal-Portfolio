'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mb-12"></div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-neutral-900/50 border-neutral-800 hover:border-blue-500/50 transition-all group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4 group-hover:bg-blue-500/20 transition-all">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:keeganmay168@gmail.com" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">
                keeganmay168@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800 hover:border-purple-500/50 transition-all group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4 group-hover:bg-purple-500/20 transition-all">
                <Phone className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+18062833129" className="text-neutral-400 hover:text-purple-400 transition-colors text-sm">
                (806) 283-3129
              </a>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all group">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4 group-hover:bg-green-500/20 transition-all">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-neutral-400 text-sm">Fort Worth, Texas</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center space-y-6">
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Passionate about advancing semiconductor manufacturing through robotics and automation.
            Open to opportunities in process engineering, research, and automation development.
          </p>

          {/* LinkedIn Link */}
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/keegan-may/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
