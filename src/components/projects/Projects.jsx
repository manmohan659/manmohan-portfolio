import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: "samosaChaat",
      description: "A 1.4B parameter language model trained from scratch on 8xH100 GPUs. Full pipeline: tokenizer training, pretraining on ClimbMix, and SFT with baked-in identity. Chat with it live!",
      tags: ['LLM', 'Deep Learning', 'NLP', 'PyTorch'],
      demoUrl: "https://samosachaat.art",
      githubUrl: "https://github.com/manmohan659/nanochat",
      huggingfaceUrl: "https://huggingface.co/ManmohanSharma/nanochat-d24"
    },
    {
      title: "AutoDock",
      description: "Autonomous drug discovery system targeting KRAS G12C cancer mutation. Uses GPU-accelerated molecular docking with an AI-driven genetic algorithm to search chemical space.",
      tags: ['Drug Discovery', 'AI', 'GPU Computing', 'Bioinformatics'],
      githubUrl: "https://github.com/manmohan659/autodock"
    },
    {
      title: "CashCanvas",
      description: "A zero-cost PWA that ingests your Chase data, crunches it locally in SQLite, syncs to Supabase, and paints your spending story in real-time charts.",
      tags: ['PWA', 'SQLite', 'Supabase', 'Data Viz'],
      githubUrl: "https://github.com/manmohan659/CashCanvas"
    },
    {
      title: "DALL Concept Model",
      description: "Cutting-edge LLM techniques for solving circuit design optimization problems.",
      status: "upcoming",
      tags: ['LLM', 'Circuit Design', 'AI']
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300" />
              
              <div className="relative p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.status === 'upcoming' ? (
                  <div className="text-purple-600 dark:text-purple-400 font-medium">
                    Coming Soon! 🚀
                  </div>
                ) : (
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Try it live →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.huggingfaceUrl && (
                      <a
                        href={project.huggingfaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        HuggingFace →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;