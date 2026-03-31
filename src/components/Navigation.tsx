
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-neural-blue rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-synapse-teal rounded-sm rotate-45"></div>
          </div>
          <span className="font-mono text-xl font-bold tracking-tight text-neural-blue uppercase">
            Principe<span className="text-synapse-teal">Lab</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-mono uppercase tracking-widest text-neural-blue/70">
          <a href="#research" className="hover:text-synapse-teal transition-colors">Research</a>
          <a href="#publications" className="hover:text-synapse-teal transition-colors">Publications</a>
          <a href="#team" className="hover:text-synapse-teal transition-colors">Team</a>
          <a href="#join" className="hover:text-synapse-teal transition-colors">Join Us</a>
          <a href="https://github.com/principelab/principelab.github.io" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neural-blue text-white hover:bg-neural-blue/90 transition-all rounded">GitHub</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
