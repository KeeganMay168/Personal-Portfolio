'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import { ScrollAnimation, FadeIn } from "@/components/ui/scroll-animation"

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

export function GitHubSection() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const username = "KeeganMay168" // Your GitHub username

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        )
        if (response.ok) {
          const data = await response.json()
          setRepos(data)
        }
      } catch (error) {
        console.error('Failed to fetch GitHub repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-400',
      Python: 'bg-blue-500',
      Java: 'bg-red-500',
      'C++': 'bg-pink-500',
      C: 'bg-gray-500',
      HTML: 'bg-orange-500',
      CSS: 'bg-purple-500',
      Go: 'bg-cyan-400',
      Rust: 'bg-orange-600',
    }
    return colors[language || ''] || 'bg-neutral-400'
  }

  return (
    <section id="github" className="py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <Github className="w-8 h-8 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">GitHub Activity</h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mb-4"></div>
          <p className="text-neutral-400 mb-12 max-w-3xl">
            Recent projects and contributions on GitHub
          </p>
        </FadeIn>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="bg-neutral-900/50 border-neutral-800 animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-neutral-800 rounded mb-3"></div>
                  <div className="h-4 bg-neutral-800 rounded mb-2"></div>
                  <div className="h-4 bg-neutral-800 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <ScrollAnimation key={repo.id} delay={0.1 * (index % 3)}>
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-blue-500/50 transition-all group h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                        {repo.name}
                      </h3>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-neutral-400 text-sm mb-4 flex-1">
                      {repo.description || 'No description available'}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      )}
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <div className="text-center text-neutral-500 py-12">
            <Github className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No repositories found</p>
          </div>
        )}

        <FadeIn>
          <div className="mt-12 text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-all font-medium border border-neutral-700 hover:border-blue-500"
            >
              <Github className="w-5 h-5" />
              View All Repositories
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
