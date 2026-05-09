export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Voice-to-Text App',
    description: 'Real-time speech transcription powered by Whisper AI and n8n workflows.',
    tags: ['React', 'Node.js', 'n8n', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Modern Portfolio',
    description: 'A personal developer portfolio built with React, Vite, and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  }
]
