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
    title: 'Tap Tap King',
    titlePl: 'Tap Tap King',
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
  }, {    title: 'Boomfield 💣',
    titlePl: 'Boomfield 💣',
    role: 'Programmer & UI/UX Designer',
    rolePl: 'Programista & UI/UX Designer',
    team: '3',
    duration: 'In Development',
    durationPl: 'W trakcie',
    engine: 'Unreal Engine',
    image: 'carrot-heist-gameplay.mp4',
    description: 'A dynamic multiplayer arena game inspired by classic Boom Bit gameplay. Players compete by strategically placing bombs and using environmental elements to eliminate opponents. Built in Unreal Engine 5 by a team of three students.',
    descriptionPl: 'Dynamiczna arena multiplayer inspirowana klasycznym gameplayem Boom Bit. Gracze rywalizują poprzez strategiczne umieszczanie bomb i wykorzystywanie elementów środowiska do eliminowania przeciwników. Tworzona w Unreal Engine 5 przez zespół trzech studentów.',
    link: 'project3.html'
  },
  {
    title: 'Game of Spores 🃏',
    titlePL: 'Game of Spores 🃏',
    role: 'Lead Programmer & Systems Designer',
    rolePL: 'Lead Programmer & Systems Designer',
    team: '5',
    duration: 'In Development',
    durationPL: 'W trakcie',
    engine: 'Unity 2D',
    image: 'carrot-heist-gameplay.mp4',
    description: 'An innovative turn-based card game utilizing a unique combat and energy management system. Features "discard for energy" mechanics, card tagging for synergy effects, multiple game modes (Story, Dungeon, PvP, Coop), character progression, and deck building. Developed as a diploma project at Collegium Da Vinci.',
    descriptionPL: 'Innowacyjna turowa gra karciana wykorzystująca unikalny system walki i zarządzania energią. Zawiera mechanikę "odrzuć za energię", tagowanie kart dla efektów synergii, wiele trybów gry (Historia, Dungeon, PvP, Coop), progresję postaci i budowanie talii. Tworzona jako projekt dyplomowy na Collegium Da Vinci.',
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
