const sourceImage = (name) => `https://muhammadaamir-portfolio.netlify.app/images/projects/${name}`;

export const projects = [
    {
        id: 1,
        title: 'Atlantian Crown Gold (EATC) Identity Portal',
        description: 'Secure migration portal for Atlantian Crown Gold users. Built the Next.js and Tailwind CSS frontend, including sign-in, email verification, guided KYC UI, and existing backend API integration.',
        image: sourceImage('atlantian.png'), category: 'Frontend Development',
        technologies: ['Next.js', 'Tailwind CSS', 'KYC', 'Blockchain'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://www.atlantiancrown.com/', githubUrl: 'https://github.com/m-aamir2'
    },
    {
        id: 2, title: 'VideoCrafter.io',
        description: 'AI-powered video-ad creation tool converted from Figma, including pixel-perfect UI components and integrations for AI voiceover and script-to-clip features.',
        image: sourceImage('crafter.png'), category: 'Frontend Development',
        technologies: ['Next.js', 'CSS', 'JavaScript', 'AI'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://shanicraft.vercel.app', githubUrl: 'https://github.com/m-aamir2'
    },
    {
        id: 3, title: 'Cloned Sites',
        description: 'Built by analyzing and cloning 50+ e-commerce storefronts, rebuilding responsive, reusable UI components and layouts for modern UX needs.',
        image: sourceImage('excel.png'), category: 'Frontend Development',
        technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Vanilla JS'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://docs.google.com/spreadsheets/d/1myHpFBAw2zMCD2yzi7WIL0TfRQxziG1iUZkfteOZPJc/edit?usp=sharing', githubUrl: 'https://github.com/m-aamir2'
    },
    {
        id: 4, title: 'VAT Registration Questionnaire',
        description: 'Converted a complex VAT registration questionnaire from Figma into a fully functional, responsive web form for MoreThan Accountants, with form UX and validation states.',
        image: sourceImage('morethan.png'), category: 'Frontend Development',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Figma to Code'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://morethan-dfq.pages.dev/', githubUrl: ''
    },
    {
        id: 5, title: 'AdMultiplier.io Landing Page',
        description: 'Converted a high-conversion SaaS landing page from Figma into a fully responsive and interactive website, including custom animations and micro-interactions.',
        image: sourceImage('admul.png'), category: 'Frontend Development',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Figma to Code'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://shaniadmul.netlify.app', githubUrl: ''
    },
    {
        id: 6, title: 'E-Learning App',
        description: 'A fully interactive e-learning platform featuring course-listing UI, reusable components, and a clean, responsive interface.',
        image: sourceImage('e-learning.png'), category: 'Frontend Development',
        technologies: ['HTML', 'CSS', 'JavaScript'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://shanie-learning.netlify.app', githubUrl: 'https://github.com/m-aamir2'
    },
    {
        id: 7, title: 'SproutGigs Clone',
        description: 'Functional SproutGigs clone that replicates the UI/UX in React with reusable components and full responsiveness for a client.',
        image: sourceImage('sprout.png'), category: 'Frontend Development',
        technologies: ['React', 'UI/UX'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://before-login.netlify.app', githubUrl: 'https://github.com/m-aamir2'
    },
    {
        id: 8, title: 'QuickCampaigns',
        description: 'Ad campaign builder frontend enabling brands to build campaigns 20x faster. Reusable React and Next.js components were connected to backend APIs, reducing build time by 90% and errors by 99%.',
        image: sourceImage('quick.png'), category: 'Frontend Development',
        technologies: ['Next.js', 'React', 'Figma'], metrices: 'Role: Frontend Development',
        demoUrl: 'https://quickcam.vercel.app', githubUrl: 'https://github.com/m-aamir2'
    }
];

export const category = ['All', 'Frontend Development'];
