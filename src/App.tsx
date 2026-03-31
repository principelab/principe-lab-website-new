
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import PublicationCard from './components/PublicationCard';
import TeamGrid from './components/TeamGrid';
import { PUBLICATIONS, NEWS, PROJECTS } from './constants';

const App: React.FC = () => {
  const [stats, setStats] = useState({ papers: 0, neurons: 0, petaflops: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<null | { title: string, fullDescription: string, id: string }>(null);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ papers: 127, neurons: 0, petaflops: 0.0 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const totalPages = Math.ceil(PUBLICATIONS.length / ITEMS_PER_PAGE);
  const displayedPublications = PUBLICATIONS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );








  return (
    <div className="min-h-screen font-sans neural-bg">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-white">
        {/* Fading Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="./src/assets/background.png" 
            alt="Neural Geometry Background" 
            className="w-full h-full object-cover opacity-[0.6]"
          />
          {/* Gradient Masks for Fading Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white"></div>
        </div>

        {/* Large Circular Decorative Element */}
        <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-synapse-teal/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-synapse-teal/5 rounded-full pointer-events-none border border-synapse-teal/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-synapse-teal/10 text-synapse-teal font-mono text-[10px] uppercase tracking-[0.2em] mb-6 rounded">
              Hospital del Mar Research Institute • Barcelona
            </div>
            <h1 className="text-7xl md:text-[120px] font-bold text-neural-blue leading-[0.85] mb-12 tracking-tighter">
              Principe
              <span className="text-synapse-teal">Lab</span>
            </h1>
            <p className="text-xl text-neural-blue/60 font-light leading-relaxed mb-12 max-w-2xl">
              We integrate multimodal biomarkers with advanced computational modeling to precisely localize the epileptogenic zone and optimize surgical planning for drug-resistant epilepsy.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#research" className="px-10 py-5 bg-neural-blue text-white font-mono uppercase text-sm tracking-widest hover:bg-neural-blue/90 transition-all shadow-xl shadow-neural-blue/20">
                Projects
              </a>
              <a href="#join" className="px-10 py-5 border border-neural-blue text-neural-blue font-mono uppercase text-sm tracking-widest hover:bg-neural-blue hover:text-white transition-all">
                Collaborate
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Partners Section */}
      <section className="py-24 px-6 border-y border-neural-blue/5 bg-lab-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-neural-blue/40 mb-16">Affiliations and funding</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-60 grayscale hover:grayscale-0 transition-all">
            <img 
              src="./src/assets/HDM_Research_logo.svg" 
              alt="Hospital del Mar Research Institute" 
              className="h-12 md:h-16" 
            />
            <img 
              src="./src/assets/UPF_logo.png" 
              alt="UPF Barcelona" 
              className="h-18 md:h-20" 
            />
            <img 
              src="./src/assets/Fundacio_Tatiana.png" 
              alt="Fundacio Tatiana de Guzman" 
              className="h-30 md:h-40" 
            />
          </div>
        </div>
      </section>

      <section id="research" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-synapse-teal mb-4">Research</p>
            <div className="flex items-center gap-8">
              <h2 className="text-5xl font-bold text-neural-blue whitespace-nowrap">Current and past projects</h2>
              <div className="h-px bg-neural-blue/5 w-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
              >
                {project.icon}
                <h3 className="text-xl font-bold text-neural-blue mb-4 group-hover:text-synapse-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-neural-blue/50 leading-relaxed font-light text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-neural-blue/20 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl p-12 shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-neural-blue/40 hover:text-neural-blue transition-colors text-2xl"
            >
              ×
            </button>
            <p className="font-mono text-[10px] uppercase tracking-widest text-synapse-teal mb-4">Project Detail</p>
            <h2 className="text-3xl font-bold text-neural-blue mb-8">{selectedProject.title}</h2>
            <div className="prose prose-sm text-neural-blue/70 leading-relaxed">
              {selectedProject.fullDescription}
            </div>
            <div className="mt-12 pt-8 border-t border-neural-blue/5 flex justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-8 py-3 bg-neural-blue text-white font-mono uppercase text-[10px] tracking-widest hover:bg-synapse-teal transition-all"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lab News & Activity (In-Progress Feed) */}
      <section className="py-32 bg-neural-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-synapse-teal mb-4">Real-time Feed</p>
              <h2 className="text-4xl font-bold mb-12">News</h2>
              <div className="space-y-12">
                {NEWS.map(item => (
                  <div key={item.id} className="flex gap-6 items-start group">
                    <div className="shrink-0 w-1 bg-synapse-teal h-full self-stretch opacity-30 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <p className="text-xs font-mono text-white/40 mb-2">{item.date}</p>
                      <p className="text-lg font-light mb-4 text-white/80">{item.content}</p>
                      {item.image && (
                        <img src={item.image} alt="News" className="w-full h-48 object-cover rounded grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="p-12 border border-white/10 bg-white/5 rounded-sm">
                <p className="font-mono text-[10px] text-synapse-teal uppercase tracking-widest mb-8">Lab Impact Metrics</p>
                <div className="space-y-10">
                  <div>
                    <span className="text-6xl font-bold block transition-all duration-1000">
                      {stats.papers}
                    </span>
                    <span className="text-xs font-mono uppercase text-white/40">Publications</span>
                  </div>
                  <div>
                    <span className="text-6xl font-bold block transition-all duration-1000">
                      -
                    </span>
                    <span className="text-xs font-mono uppercase text-white/40">-</span>
                  </div>
                  <div>
                    <span className="text-6xl font-bold block transition-all duration-1000">
                      -
                    </span>
                    <span className="text-xs font-mono uppercase text-white/40">-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-synapse-teal mb-2">Scientific Output</p>
              <h2 className="text-4xl font-bold text-neural-blue">Publications</h2>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-1 text-xs font-mono uppercase bg-neural-blue text-white">All</button>
              <button className="px-4 py-1 text-xs font-mono uppercase border border-neural-blue/10 hover:bg-neural-blue/5">Peer Reviewed</button>
              <button className="px-4 py-1 text-xs font-mono uppercase border border-neural-blue/10 hover:bg-neural-blue/5">Pre-prints</button>
            </div>
          </div>

          <div className="border-t border-neural-blue/10">
            {displayedPublications.map(pub => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-6">
            {totalPages > 1 && (
              <div className="flex items-center gap-8">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neural-blue/60 hover:text-synapse-teal disabled:opacity-30 disabled:hover:text-neural-blue/60 transition-colors"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  Newer
                </button>
                <span className="text-xs font-mono text-neural-blue/30">
                  Page {currentPage} / {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neural-blue/60 hover:text-synapse-teal disabled:opacity-30 disabled:hover:text-neural-blue/60 transition-colors"
                >
                  Older
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            )}
            
            <a href="https://scholar.google.com/citations?hl=en&user=SFX6QRAAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-neural-blue/40 hover:text-synapse-teal transition-colors">
              View Google Scholar Profile →
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 px-6 bg-white border-y border-neural-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="font-mono text-xs uppercase tracking-widest text-synapse-teal mb-2">Our People</p>
            <h2 className="text-4xl font-bold text-neural-blue">Team</h2>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* Join Section */}
            {/* Collaborators*/}
      <section className="py-10 px-6 border-y border-neural-blue/5 bg-lab-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-neural-blue/40 mb-16">Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
            <img 
              src="./src/assets/CRG.png" 
              alt="CRG-Centre Recerca Genomica" 
              className="h-4 md:h-16" 
            />
            <img 
              src="./src/assets/certh.png" 
              alt="CERTH - Center for Research and Technology Hellas" 
              className="h-4 md:h-20" 
            />
            <img 
              src="./src/assets/epicare.svg" 
              alt="Epicare" 
              className="h-4 md:h-14" 
            />
            <img 
              src="./src/assets/Bambino_Gesù_Hospital.png" 
              alt="Hospital Bambin Gesu" 
              className="h-4 md:h-18" 
            />
            <img 
              src="./src/assets/Duke_University_logo.png" 
              alt="Duke University" 
              className="h-4 md:h-16" 
            />
          </div>
        </div>
      </section>

      <section id="join" className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-neural-blue mb-8">Collaborate with us</h2>
          <p className="text-lg text-neural-blue/60 font-light mb-12">
            We are looking for inquisitive minds with backgrounds in medicine, physics, computer science, or biology. If you are passionate about the intersection of computation and the brain, we want to hear from you.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="mailto:" className="px-12 py-5 bg-neural-blue text-white font-mono uppercase text-sm tracking-widest hover:bg-synapse-teal transition-all rounded-sm shadow-xl shadow-neural-blue/20">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-neural-blue/10 bg-lab-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-neural-blue rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-synapse-teal rounded-sm rotate-45"></div>
                </div>
                <span className="font-mono text-lg font-bold tracking-tight text-neural-blue uppercase">
                  Principe<span className="text-synapse-teal">Lab</span>
                </span>
              </div>
              <p className="text-sm text-neural-blue/50 leading-relaxed max-w-sm">
                A research unit affiliated with the Hospital del Mar Research Institute and the Universitat Pomepu Fabra Dept of Biomedical Engineering.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-neural-blue mb-6">Location</h4>
              <p className="text-sm text-neural-blue/50 leading-relaxed">
                Hospital del Mar Research Institute<br />
                Passeig Maritim 25-29<br />
                08003 Barcelona Spain
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-neural-blue mb-6">Connect</h4>
              <div className="space-y-2">
                <a href="https://github.com/principelab/principelab.github.io" target="_blank" rel="noopener noreferrer" className="text-sm block text-neural-blue/50 hover:text-synapse-teal transition-colors">GitHub</a>
                <a href="#" className="text-sm block text-neural-blue/50 hover:text-synapse-teal transition-colors">X (Twitter)</a>
                <a href="#" className="text-sm block text-neural-blue/50 hover:text-synapse-teal transition-colors">Open Science Framework</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-neural-blue/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono uppercase text-neural-blue/30">
              © 2026 Principe Lab.
            </p>
            <div className="flex space-x-8">
              <img src="./src/assets/HDM_Research_logo.svg" alt="University Logo" className="h-10 grayscale opacity-30" />
               </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
