
import React from 'react';
import { TEAM } from '../constants';

const TeamGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {TEAM.map((member) => (
        <div key={member.id} className="group cursor-default">
          <div className="relative aspect-[4/5] overflow-hidden bg-neural-blue/10 mb-4 rounded-sm">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-neural-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <p className="text-xs text-synapse-teal font-mono uppercase mb-2">Research Focus</p>
              <p className="text-sm text-white font-light leading-relaxed mb-4">
                {member.interests}
              </p>
              <div className="flex space-x-3">
                {member.links.scholar && <div className="w-5 h-5 bg-white/20 rounded-full"></div>}
                {member.links.github && <div className="w-5 h-5 bg-white/20 rounded-full"></div>}
                {member.links.twitter && <div className="w-5 h-5 bg-white/20 rounded-full"></div>}
              </div>
            </div>
          </div>
          <h4 className="text-lg font-bold text-neural-blue">{member.name}</h4>
          <p className="text-xs font-mono text-neural-blue/50 uppercase tracking-widest">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
