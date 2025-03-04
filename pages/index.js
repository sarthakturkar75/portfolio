import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/ContactCard';
import AboutMeCard from '../components/AboutMeCard';
import ProjectList from '../components/ProjectList';
import '../styles/index.css';

// Example project data
const projectData = [
	{
		id: 1,
		title: 'E-commerce Platform',
		subtitle: 'Next.js Store',
		description: 'A full-featured e-commerce platform.',
		imageUrl: '/images/project1.jpg',
	},
	{
		id: 2,
		title: 'Mobile App',
		subtitle: 'React Native',
		description: 'A cross-platform mobile app.',
		imageUrl: '/images/project2.jpg',
	},
	{
		id: 3,
		title: 'Data Dashboard',
		subtitle: 'Interactive D3',
		description: 'Dashboard with advanced data viz.',
		imageUrl: '/images/project3.jpg',
	}
];

export default function Home() {
	const [scrollDirection, setScrollDirection] = useState(null);
	const [lastScrollTop, setLastScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const sections = document.querySelectorAll("section");

			sections.forEach((section) => {
				const rect = section.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.8) {
					section.classList.add("visible");
					section.classList.remove("hidden");
				} else {
					// If scrolling up, apply exit transition
					if (scrollTop < lastScrollTop) {
						section.classList.add("hidden");
						section.classList.remove("visible");
					}
				}
			});

			setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
			setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For mobile scrolling
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollTop]);

	return (
		<div className="bg-gray-900 text-white min-h-screen w-full">

			{/* INTRO SECTION (Cube in between About Me & Project List) */}
			<section id="intro" className="hidden">
				<motion.div className="about-me">
					<AboutMeCard />
				</motion.div>

				<motion.div className="cube-container">
					<Card />
				</motion.div>

				<motion.div className="project-list">
					<ProjectList />
				</motion.div>
			</section>

			{/* PROJECTS + CONTACT SECTION (Combined) */}
			<section id="projects-contact-wrapper" className="hidden">

				<motion.div className="project-cards">
					{projectData.map((proj) => (
						<ProjectCard
							key={proj.id}
							title={proj.title}
							subtitle={proj.subtitle}
							description={proj.description}
							imageUrl={proj.imageUrl}
						/>
					))}
				</motion.div>

				{/* CONTACT CARD - Now part of the same section */}
				<motion.div className="contact-card">
					<Button />
				</motion.div>
			</section>
		</div>
	);
}