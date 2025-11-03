'use client'
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Sparkles, Rocket, Brain, Zap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "AI Influencer Tracker",
      description: "Automated social media analysis of 50+ AI influencers using n8n and Google Sheets",
      tech: ["n8n", "Google Sheets", "ChatGPT", "Pandas"],
      impact: "80% faster research",
      points: 30,
      icon: "🔍",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Stack Showdown",
      description: "Comprehensive framework comparison: MERN vs Next.js vs Remix vs Astro for AI apps",
      tech: ["Next.js", "Vercel AI SDK", "LangChain", "React"],
      impact: "Next.js recommended",
      points: 35,
      icon: "⚔️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Content Forge",
      description: "SEO-friendly technical content automation for ORANTS website using OpenAI",
      tech: ["n8n", "OpenAI API", "Google Sheets", "SEO"],
      impact: "180x faster creation",
      points: 40,
      icon: "✍️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Content Repurposing Agent",
      description: "Multi-platform content transformer powered by Gemini API",
      tech: ["Python", "Gemini API", "pdfplumber", "BeautifulSoup"],
      impact: "One-click repurposing",
      points: 30,
      icon: "🔄",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Viral Replicator",
      description: "AI model analyzing and replicating viral post patterns for social media",
      tech: ["OpenAI", "LangChain", "Python", "NLP"],
      impact: "Content psychology mastery",
      points: 50,
      icon: "🔥",
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Vibe Coding Sprint",
      description: "Mobile app development using AI-powered Vibe Coding platform",
      tech: ["React Native", "AI Vibe Coding", "Mobile APIs"],
      impact: "Production deployed",
      points: 45,
      icon: "📱",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "C++", "HTML/CSS"],
    "Frameworks": ["Next.js", "React", "LangChain.js", "Tailwind"],
    "AI Tools": ["OpenAI API", "Gemini API", "n8n", "ChatGPT"],
    "Other": ["Google Sheets API", "Vercel", "GitHub", "REST APIs"]
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/3 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-2xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              S. Sai Prasad
            </span>
          </div>
          <div className="flex gap-8">
            {['about', 'projects', 'skills'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize text-sm font-medium transition-all duration-200 ${
                  activeSection === section
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-white/10 ring-offset-4 ring-offset-black">
                <img 
                  src="/profile.jpg" 
                  alt="S. Sai Prasad"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center text-5xl">
                  🤖
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full ring-4 ring-black"></div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              AI & Automation
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto font-light">
            Building intelligent solutions with creativity and code
          </p>
          
          <p className="text-base text-gray-500 mb-12">
            Vibe Coding Intern @ ORANTS · 285+ Points Delivered
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-20">
            <a
              href="mailto:saisethupathy414@gmail.com"
              className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </span>
            </a>
            <a
              href="#"
              className="group bg-white/5 backdrop-blur-xl hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Slides
              </span>
            </a>
            <a
              href="https://github.com/Saiehhh"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">11+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">180x</div>
              <div className="text-gray-400 text-sm">Faster Workflow</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">80%</div>
              <div className="text-gray-400 text-sm">Time Saved</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">285</div>
              <div className="text-gray-400 text-sm">Total Points</div>
            </div>
          </div>
        </div>
      </section>

      {activeSection === 'about' && (
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              About Me
            </h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Who I Am
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI & Automation Specialist</li>
                    <li>• Workflow Intelligence Expert</li>
                    <li>• Creative Problem Solver</li>
                    <li>• Full-Stack AI Developer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Core Strengths
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Python & JavaScript</li>
                    <li>• Machine Learning</li>
                    <li>• n8n Automation</li>
                    <li>• API Integration</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-white/10">
                <p className="text-center text-lg text-gray-200 italic">
                  "Merging creativity, AI, and engineering to build scalable intelligent solutions"
                </p>
                <div className="mt-4 text-center">
                  <a
                    href="https://github.com/Saiehhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    github.com/Saiehhh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-4xl w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      {project.icon}
                    </div>
                    <div className="text-sm text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full">
                      {project.points} pts
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-green-400 font-semibold">
                      ✓ {project.impact}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                Additional Completed Tasks
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🎓</div>
                  <div className="font-semibold text-white">Data Science Course</div>
                  <div className="text-sm text-gray-400">Harvard/MIT Labs</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎥</div>
                  <div className="font-semibold text-white">AI Video Profile</div>
                  <div className="text-sm text-gray-400">Professional intro</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">⚙️</div>
                  <div className="font-semibold text-white">Automation Arena</div>
                  <div className="text-sm text-gray-400">Workflow systems</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'skills' && (
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              Tech Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 text-white px-4 py-2 rounded-full font-medium hover:border-white/40 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2 justify-center">
                <Rocket className="w-6 h-6" />
                Key Learnings & Growth
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Technical Skills</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Workflow automation mastery</li>
                    <li>✓ Advanced prompt engineering</li>
                    <li>✓ API integration expertise</li>
                    <li>✓ Data pipeline design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-3">Professional Growth</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Problem-solving mindset</li>
                    <li>✓ AI tool evaluation</li>
                    <li>✓ Project documentation</li>
                    <li>✓ Storytelling with AI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="relative z-10 py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing
          </h3>
          <p className="text-gray-400 mb-8">
            Open to AI Engineering opportunities & collaborations
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:saisethupathy414@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://github.com/Saiehhh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sai-prasad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            © 2025 S. Sai Prasad • AI & Automation Engineer
          </div>
        </div>
      </footer>
    </div>
  );
}