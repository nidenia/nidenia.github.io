const addSound = (source, volume) => {
  const audio = new Audio();
    audio.src = source;
    audio.volume = volume;
    audio.play();
}

const links = document.querySelectorAll('.menu__item');
const agents = document.querySelectorAll('.agent');
const skills = document.querySelectorAll('.skills__item');

if (links) {
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      addSound("./../assets/audio/beep.mp3", 0.4);
    })
  });
}

if (agents) {
  agents.forEach(agent => {  
    agent.addEventListener('click', (e) => {
      agents.forEach((agent) => { 
        agent.classList.remove('_active');
      });
      e.stopPropagation();
  
      agent.classList.add('_active');
  
      addSound("./../assets/audio/choose.mp3", 0.4);
    });
  });
}

if (skills) {
  skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      addSound("./../assets/audio/beep.mp3", 0.4);
    })
  });
}
