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
        link: 'project1.html',   // tutaj podstawisz docelowy link do Carrot Heist
        isVideo: true,
    {
      title: 'Game Programming 2',
      titlePl: 'Game Programming 2',
      role: 'Game Programmer',
      rolePl: 'Game Programmer',
      team: '2',
      duration: '4 weeks',
      durationPl: '4 tygodnie',
      engine: 'Unity',
      image: 'carrot-heist-gameplay.mp4',
      description: 'A challenging game development project showcasing advanced programming techniques and innovative gameplay mechanics.',
      descriptionPl: 'Ambitny projekt tworzenia gry demonstrujący zaawansowane techniki programowania i innowacyjną mechanikę gry.',
      link: 'project1.html',
      isVideo: true
    },
    {
      title: 'Game Programming 3',
      titlePl: 'Game Programming 3',
      role: 'Game Programmer',
      rolePl: 'Game Programmer',
      team: '3',
      duration: '6 weeks',
      durationPl: '6 tygodni',
      engine: 'Unreal Engine',
      image: 'carrot-heist-gameplay.mp4',
      description: 'An advanced game development project with complex systems and professional-grade gameplay.',
      descriptionPl: 'Zaawansowany projekt gry z złożonymi systemami i grą na profesjonalnym poziomie.',
      link: 'project1.html',
      isVideo: true
    },
    {
      title: 'Game Programming 4',
      titlePl: 'Game Programming 4',
      role: 'Lead Game Programmer',
      rolePl: 'Lead Game Programmer',
      team: '4',
      duration: '8 weeks',
      durationPl: '8 tygodni',
      engine: 'C++',
      image: 'carrot-heist-gameplay.mp4',
      description: 'A comprehensive game development project demonstrating mastery of game programming principles and best practices.',
      descriptionPl: 'Kompleksowy projekt tworzenia gry demonstrujący opanowanie zasad programowania gier i best practices.',
      link: 'project1.html',
      isVideo: true
    }
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
                <a href="${project.link}" class="project-title" target="_blank" rel="noopener noreferrer">${title}</a>
                <p class="project-role">${role}</p>
                <p class="project-desc">${description}</p>
                <button class="project-arrow" data-link="${project.link}" aria-label="Zobacz ${title}">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        container.appendChild(projectCard);
    });

    // Obsługa kliknięcia strzałek – otwiera ten sam link co tytuł
    document.querySelectorAll('.project-arrow').forEach(btn => {
        const link = btn.getAttribute('data-link');
        btn.onclick = () => {
            window.open(link, '_blank', 'noopener,noreferrer');
        };
    });
}

// Initial render
renderProjects();
