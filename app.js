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
    description: 'A multiplayer game inspired by Fireboy and Watergirl. I was responsible for programming mechanics, UI implementation, and creating the main menu.',
    descriptionPL: 'Multiplayer game inspirowana gra Ogoń i Woda. Odpowiadałem za programowanie mechaniki, implementację UI i tworzenie menu głównego.',
    link: 'project1.html'
  },
 {
    title: 'Tap Tap King 🪐👑',
    titlePl: 'Tap Tap King 🪐👑',
    role: 'Solo Developer',
    rolePl: 'Solo Developer',
    team: '1',
    duration: '2 months',
    durationPl: '2 miesiące',
    engine: 'Unity',
    image: 'taptapking-gameplay.mp4',
    description: 'A hyper-casual iOS tapping game built in Unity. Cosmic challenge: tap the planet button as fast as you can for 10 seconds to beat your records!',
    descriptionPL: 'Hyper-casualowa gra mobilna na iOS stworzona w Unity. Kosmiczne wyzwanie: tapuj przycisk z planetą tak szybko jak możesz przez 10 sekund, aby pobić swoje rekordy!',
    link: 'project2.html'
  }, {
    title: 'Game Programming 3',
    titlePL: 'Programowanie Gier 3',
    role: 'Solo Developer',
    rolePl: 'Solo Developer',
    team: '3',
    duration: '6 weeks',
    durationPL: '6 tygodni',
    engine: 'Unreal Engine',
    image: 'carrot-heist-gameplay.mp4',
    description: 'An advanced game development project with complex systems and professional-grade gameplay.',
    descriptionPL: 'Zaawansowany projekt gry z złożonymi systemami i grawką na profesjonalnym poziomie.',
    link: 'project3.html'
  },
  {
    title: 'Game Programming 4',
    titlePL: 'Programowanie Gier 4',
    role: 'Lead Game Programmer',
    rolePL: 'Lead Game Programmer',
    team: '4',
    duration: '8 weeks',
    durationPL: '8 tygodni',
    engine: 'C++',
    image: 'carrot-heist-gameplay.mp4',
    description: 'A comprehensive game development project demonstrating mastery of game programming principles and best practices.',
    descriptionPL: 'Kompleksowy projekt gry demonstrujący opanowanie zasad programowania gier i best practices.',
    link: 'project4.html'
  }
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
        <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover;">
          <source src="${project.image}" type="video/mp4">
        </video>
      </div>
      <div class="project-meta-top">
        <span><i class="fas fa-users"></i> ${project.team}</span>
        <span><i class="fas fa-clock"></i> ${duration}</span>
        <span><i class="fas fa-code"></i> ${project.engine}</span>
      </div>
      <div class="project-content">
        <a href="${project.link}" class="project-title" target="_blank" rel="noopener noreferrer">${title}</a>
        <p class="project-role">${role}</p>
        <p class="project-desc">${description}</p>
      </div>
      <div class="project-arrow-wrapper">
        <button class="project-arrow" data-link="${project.link}" aria-label="View ${title}">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    `;
    
    container.appendChild(projectCard);
  });
  
  // Handle arrow button clicks
  document.querySelectorAll('.project-arrow').forEach(btn => {
    const link = btn.getAttribute('data-link');
    btn.onclick = () => {
      window.open(link, '_blank', 'noopener,noreferrer');
    };
  });
}

// Initial render
renderProjects();
