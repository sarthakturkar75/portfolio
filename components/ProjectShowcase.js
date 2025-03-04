import { useState } from 'react';
import ProjectCard from './ProjectCard';
import UniversalButton from './UniversalButton'; // Make sure this path is correct

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js.',
    imageUrl: '/images/project1.jpg',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    category: 'Web'
  },
  {
    id: 2,
    title: 'Mobile App',
    description: 'A cross-platform mobile app using React Native.',
    imageUrl: '/images/project2.jpg',
    tech: ['React Native', 'TypeScript'],
    category: 'Mobile'
  },
  {
    id: 3,
    title: 'Data Dashboard',
    description: 'Interactive dashboard with D3.js and Next.js.',
    imageUrl: '/images/project3.jpg',
    tech: ['React', 'D3.js', 'Next.js'],
    category: 'Data'
  }
];

const categories = ['All', 'Web', 'Mobile', 'Data'];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center space-x-4 mb-12">
        {categories.map(category => (
          <UniversalButton
          key={category}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </UniversalButton>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}