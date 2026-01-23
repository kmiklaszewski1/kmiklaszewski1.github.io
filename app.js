// Projects Data
const projectsData = [
    {
        title: 'Carrot Heist',
        titlePL: 'Carrot Heist',
        role: 'Lead Programmer & UI Designer',
        rolePL: 'Lead Programmer & UI Designer',
        team: '4',
        duration: '8 months',
        durationPL: '8 miesięcy',
        engine: 'Unity',
        image: 'carrot-heist-gameplay.mp4',
        description: 'Carrot Heist is a game inspired by Fireboy and Watergirl. In this project I was a multitasker creating animations, programming, implementing victory and defeat screens, and creating the main menu.',
        descriptionPL: 'Carrot Heist to gra zainspirowana grą Ogień i Woda. W tym projekcie byłem multitaskerem tworząc animacje, programując, implementując ekrany wygranej i przegranej, aż po tworzenie menu głównego.',
        link: 'project1.html',
        isVideo: true
    }
    // Add more projects here
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    const currentLang = document.documentElement.lang;
    
    container.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const title = currentLang === 'pl' ? project.titlePL : project.title;
        const role = currentLang === 'pl' ? project.rolePL : project.role;
        const description = currentLang === 'pl' ? project.descriptionPL : project.description;
        const duration = currentLang === 'pl' ? project.durationPL : project.duration;
        
        projectCard.innerHTML = `
            <div class="project-image-wrapper">
                ${project.isVideo ? 
                    `<video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;">
                        <source src="${project.image}" type="video/mp4">
                    </video>` : 
                    `<img src="${project.image}" alt="${title}" class="project-image">`
                }
            </div>
            <div class="project-content">
                <div class="project-meta">
                    <span><i class="fas fa-users"></i> ${project.team}</span>
                    <span><i class="fas fa-clock"></i> ${duration}</span>
                    <span><i class="fab fa-${project.engine.toLowerCase() === 'unity' ? 'unity' : 'unreal'}"></i> ${project.engine}</span>
                </div>
                <a href="${project.link}" class="project-title">${title}</a>
                <p class="project-role">${role}</p>
                <p class="project-desc">${description}</p>
                <div class="project-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Initial render
renderProjects();
