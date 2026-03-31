
import React, { useState } from 'react';
import { Publication } from '../types';

interface PublicationCardProps {
  pub: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ pub }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayImage = pub?.image || ``;

  return (
    <div 
      className="group relative border-b border-neural-blue/10 py-8 transition-all hover:bg-white/50 px-4 cursor-default"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {pub.tags.map(tag => (
              <span key={tag} className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${
                tag.includes('Award') ? 'bg-signal-amber/20 text-signal-amber' : 'bg-neural-blue/5 text-neural-blue/60'
              }`}>
                {tag}
              </span>
            ))}
            <span className="text-[10px] uppercase font-mono text-neural-blue/40 ml-auto">{pub.year}</span>
          </div>
          
          <h3 className="text-lg font-bold text-neural-blue mb-2 leading-tight group-hover:text-synapse-teal transition-colors">
            {pub.title}
          </h3>
          
          <p className="text-sm font-mono text-neural-blue/60 mb-4">
            {pub.authors.join(', ')} — <span className="italic">{pub.journal}</span>
          </p>

          <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'} overflow-hidden`}>
            <div className="min-h-0 flex flex-col md:flex-row gap-6">
              {displayImage && (
                <div className="shrink-0 w-full md:w-48 h-32 overflow-hidden rounded border border-neural-blue/10 shadow-sm">
                  <img 
                    src={displayImage} 
                    alt="Publication figure" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm text-neural-blue/80 font-light leading-relaxed max-w-2xl">
                  {pub.abstract || "Abstract currently being indexed."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 shrink-0 pt-1">
          {pub.links.pdf && (
            <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase text-neural-blue/40 hover:text-synapse-teal flex items-center gap-1 transition-colors">
              [PDF]
            </a>
          )}
          {pub.links.code && (
            <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase text-neural-blue/40 hover:text-synapse-teal flex items-center gap-1 transition-colors">
              [CODE]
            </a>
          )}
          {pub.links.data && (
            <a href={pub.links.data} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase text-neural-blue/40 hover:text-synapse-teal flex items-center gap-1 transition-colors">
              [DATA]
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
