import React from 'react';
import { Publication, TeamMember, NewsItem } from './types';

export const PROJECTS = [
  {
    id: 'eanet',
    title: "EANet: Epileptogenic adversarial networks",
    description: "Leveraging game theory and machine learning to map epileptogenic networks using invasive EEG data and GANs.",
    fullDescription: "The EANet project addresses the challenge of drug-resistant epilepsy by leveraging game theory and machine learning to map epileptogenic networks. Using invasive EEG data and Generative Adversarial Networks (GANs), we model the 'competition' between brain networks to predict surgical outcomes with record accuracy. Our goal is to refine surgical selection and develop next-generation electrical stimulation therapies for patients who are not candidates for surgery.",
    icon: (
      <div className="w-10 h-10 border border-neural-blue/20 flex items-center justify-center bg-white shadow-sm mb-4">
        <div className="w-4 h-4 bg-neural-blue"></div>
      </div>
    )
  },
  {
    id: 'epigame',
    title: "EpiGame",
    description: "Framework for epilepsy surgery outcome prediction based on competitive network interactions.",
    fullDescription: "EpiGame is a specialized framework designed for epilepsy surgery outcome prediction. It conceptualizes neural regions as players in a competitive game, where the goal is to identify the 'dominant' nodes driving seizure activity. By applying cross-validation techniques to measure connectivity via machine learning, we provide clinicians with a quantitative score for surgical target viability.",
    icon: (
      <div className="w-10 h-10 border border-neural-blue/20 flex items-center justify-center bg-white shadow-sm mb-4">
        <div className="text-xl font-bold text-neural-blue">+</div>
      </div>
    )
  },
  {
    id: 'multipec',
    title: "MultiPEC",
    description: "Automatic detection of data models from neural activity data using prediction error connectivity markers.",
    fullDescription: "MultiPEC is a powerful tool for the automatic detection of data models from neural activity data, guided purely by the structure of the information itself. It leverages prediction error connectivity (PEC) as a core network marker, which relates to the complexity of information contained in the network and its consistency across repetitions. This method identifies specific neural encoding patterns in both artificial networks and the biological brain.",
    icon: (
      <div className="w-10 h-10 border border-neural-blue/20 flex items-center justify-center bg-white shadow-sm mb-4 rounded-full">
        <div className="w-4 h-4 rounded-full border-2 border-neural-blue"></div>
      </div>
    )
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: "The Therapeutic Loop: Closed-Loop Epilepsy Systems Mirroring the Read-Write Architecture of Brain-Computer Interfaces",
    authors: ["J Montoya-Gálvez", "K Ivankovic", "R Rocamora", "A Principe"],
    journal: "Applied Sciences 16 (1), 294",
    image: "./src/assets/montoya_et_al_2025.jpg",
    year: 2025,
    abstract: "By framing closed-loop neuromodulation as a read-write brain-computer interface, this review identifies critical barriers to clinical translation and outlines the path toward fully autonomous systems for treating drug-resistant epilepsy.",
    tags: ["Peer Reviewed"],
    links: { pdf: "https://www.mdpi.com/2076-3417/16/1/294" }
  },
  {
    id: '2',
    title: "Data-driven identification of functional networks in artificial and biological neural networks",
    authors: ["K Ivankovic", "A Dimou", "J Montoya-Gálvez", "R Zucca", "M Valero", "A Principe"],
    journal: "bioRxiv, 2025.11. 18.688989",
    year: 2025,
    abstract: "We developed MultiPEC, a new data-driven method that identifies the specific neural patterns encoding information in both AI and human brains, potentially unlocking more precise brain-computer interfaces and clinical diagnostics",
    tags: ["Pre-print"],
    links: { pdf: "https://www.biorxiv.org/content/biorxiv/early/2025/11/18/2025.11.18.688989.full.pdf", code: "https://github.com/principelab/multipec-core.git" }
  },
  {
    id: '3',
    title: "On the concordance between electrical source imaging, anatomical and functional neuroimaging in patients with focal epilepsy",
    authors: ["M Ley", "R Zucca", "K Langohr", "A Principe", "J Capellades", "M Aguilar", "R Rocamora"],
    image: "./src/assets/ley.jpg",
    journal: "Clinical Neurophysiology 172, 22-32",
    year: 2025,
    abstract: "Limited knowledge exists regarding how electrical source imaging (ESI) of interictal epileptiform discharges (IEDs) aligns with findings from other neuroimaging modalities. This study investigates the relationships of interictal ESI with MRI, 18FDG PET, SISCOM, and voxel-based morphometry (VBM) during presurgical evaluation of drug-resistant epilepsy (DRE).",
    tags: ["Peer Reviewed"],
    links: { pdf: "https://www.sciencedirect.com/science/article/abs/pii/S1388245725000033" }
  },
    {
    id: '4',
    title: "MRI-guided laser interstitial thermal therapy in epilepsy: indications, technique and outcome in an adult population. A single-center data analysis",
    authors: ["N Infante", "G Conesa", "C Pérez-Enríquez", "J Capellades", "LP de Oliveira", "..."],
    journal: "Acta Neurochirurgica 167 (1), 396",
    year: 2025,
    abstract: "This study explores the indications, technical challenges, and outcomes of MRIgLITT in terms of seizure control and cognitive changes across various pathologies.",
    tags: ["Peer Reviewed"],
    links: { pdf: "https://link.springer.com/article/10.1007/s00701-025-06429-3" }
  },
    {
    id: '5',
    title: "A novel way to use cross-validation to measure connectivity by machine learning allows epilepsy surgery outcome prediction",
    authors: ["K Ivankovic", "A Principe", "J Montoya-Gálvez", "L Manubens-Gil", "R Zucca", "..."],
    image: "./src/assets/neuroimage.jpg",
    journal: "NeuroImage 306, 120990",
    year: 2025,
    abstract: "Without relying on specific connectivity variables, we focused on a general hypothesis that the epileptogenic network (EN) undergoes the greatest magnitude of connectivity change during seizure generation, compared to other brain networks. To test this hypothesis, we developed a novel method for quantifying connectivity change between network states and applied it to identify surgical resection areas",
    tags: ["Peer Reviewed"],
    links: { pdf: "https://www.sciencedirect.com/science/article/pii/S1053811924004877", code: "https://github.com/ivkarla/connectivity_change_reproducible" }
  },
    {
    id: '6',
    title: "Methods for Identifying Epilepsy Surgery Targets Using Invasive EEG: A Systematic Review",
    authors: ["K Ivankovic", "A Principe", "R Zucca", "M Dierssen", "R Rocamora"],
    journal: "Biomedicines 12 (11), 2597",
    year: 2024,
    abstract: "The pre-surgical evaluation for drug-resistant epilepsy achieves seizure freedom in only 50–60% of patients. Efforts to identify quantitative intracranial EEG (qEEG) biomarkers of epileptogenicity are needed. This review summarizes and evaluates the design of qEEG studies, discusses barriers to biomarker adoption, and proposes refinements of qEEG study protocols.",
    tags: ["Peer Reviewed"],
    links: { pdf: "https://www.mdpi.com/2227-9059/12/11/2597", code: "https://github.com/ivkarla/epirev" }
  }

];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: "Dr. Alessandro Principe",
    role: "Principal Investigator",
    image: "./src/assets/principe.jpg",
    interests: "Neurophysiology, Epilepsy, Digital biomarkers",
    links: { scholar: "#", github: "#", twitter: "#" }
  },
  {
    id: '2',
    name: "Dr. Karla Ivankovic",
    role: "Post-doctoral Fellow",
    image: "./src/assets/karla.jpg",
    interests: "Data science, Large-scale simulations, Neural Networks",
    links: { scholar: "#", github: "#" }
  },
  {
    id: '3',
    name: "Justo Montoya Galvez",
    role: "Ph.D. Candidate",
    image: "./src/assets/justo.jpeg",
    interests: "Biomedical engineering, Brain-Machine Interfaces",
    links: { github: "#", twitter: "#" }
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    date: "Jan 20, 2026",
    content: "Our review on Closed Loop Epilepsy systems was published in Applied Sciences!",
    image: "./src/assets/montoya_et_al_2025.jpg"
  },
  {
    id: '2',
    date: "Nov 18, 2025",
    content: "MultiPEC, a new data-driven method that identifies the specific neural encoding in artificial networks and the brain.",
    image: "./src/assets/multiPEC.png"
  },
  {
    id: '3',
    date: "Feb 01, 2025",
    content: "Our new paper 'A novel way to use cross-validation to measure connectivity by machine learning allows epilepsy surgery outcome prediction' is out in Neuroimage! ",
    image: ""
  }
];
