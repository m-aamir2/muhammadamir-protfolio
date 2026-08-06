import React, { useState } from 'react';
import { projects, category } from "../../data/projects";
import { Briefcase, ChevronLeft, ChevronRight, Target, Globe } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../Animations/Fadein';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Handle category change
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setMobileProjectIndex(0);
    };

    const showPreviousProject = () => {
        setMobileProjectIndex((index) => (index - 1 + filteredProjects.length) % filteredProjects.length);
    };

    const showNextProject = () => {
        setMobileProjectIndex((index) => (index + 1) % filteredProjects.length);
    };

    const handleTouchEnd = (event) => {
        if (touchStart === null) return;
        const distance = event.changedTouches[0].clientX - touchStart;
        if (Math.abs(distance) > 45) distance > 0 ? showPreviousProject() : showNextProject();
        setTouchStart(null);
    };

    // Category Icon mapping
    const categoryIcons = {
        'All': Target,
        'Frontend Development': Globe
    };

    return (
        <section id='projects' className='relative py-20 bg-black overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
                <div className='absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3xl' />
                <div className='absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <FadeIn delay={0}>
                    <div className='text-center mb-12'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
                            <Briefcase className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium'>My work</span>
                        </div>
                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                            Featured Projects
                        </h2>
                        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                            A selection of work I'm proud of — from Figma to flawless.
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={100}>
                    <div className='flex flex-wrap justify-center gap-3 mb-16'>
                        {category.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === cat
                                        ? 'text-white'
                                        : 'text-white/60 hover:text-white'
                                }`}
                            >
                                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                                    activeCategory === cat
                                        ? 'bg-primary/10 opacity-100'
                                        : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                                }`} />
                                <div className='relative flex items-center gap-2'>
                                    {React.createElement(categoryIcons[cat] || Target, { className: 'w-4 h-4' })}
                                    <span className='text-sm'>{cat}</span>
                                </div>

                                {activeCategory === cat && (
                                    <div className='absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10' />
                                )}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Mobile project slider */}
                <FadeIn delay={200}>
                    <div className='md:hidden'>
                        <div
                            className='mobile-project-slider'
                            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
                            onTouchEnd={handleTouchEnd}
                        >
                            <ProjectCard project={filteredProjects[mobileProjectIndex]} />
                        </div>
                        <div className='flex items-center justify-center gap-4 mt-6'>
                            <button className='mobile-slider-control' onClick={showPreviousProject} aria-label='Previous project'>
                                <ChevronLeft className='w-5 h-5' />
                            </button>
                            <div className='flex items-center gap-2' aria-label={`Project ${mobileProjectIndex + 1} of ${filteredProjects.length}`}>
                                {filteredProjects.map((project, index) => (
                                    <button
                                        key={project.id}
                                        onClick={() => setMobileProjectIndex(index)}
                                        className={`mobile-slider-dot ${index === mobileProjectIndex ? 'mobile-slider-dot--active' : ''}`}
                                        aria-label={`Show project ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button className='mobile-slider-control' onClick={showNextProject} aria-label='Next project'>
                                <ChevronRight className='w-5 h-5' />
                            </button>
                        </div>
                    </div>
                </FadeIn>

                {/* Projects Grid - desktop */}
                <FadeIn delay={200}>
                    <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Projects;
