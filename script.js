function scrollIntoSections(){ 

  const linksInternos = document.querySelectorAll('[href^="#"]');

  function smoothScroll(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  linksInternos.forEach((link) =>{
    link.addEventListener('click', smoothScroll);
  })
}

scrollIntoSections();

function slideAnimation(){ 
  const animaisLista = document.querySelectorAll('.js-animais li');
  const sections = document.querySelectorAll('.js-section section');
  sections[0].classList.add('ativo');

  function showDescription(index){
    sections.forEach((item) =>{
      item.classList.remove('ativo');
    })
    sections[index].classList.add('ativo');
  }

  animaisLista.forEach((img, index) =>{
    img.addEventListener('click', () =>{
      showDescription(index);
    })
  })
}

slideAnimation();

function accordionList(){ 
  const accordion = document.querySelectorAll('.js-faq dt');
  accordion[0].nextElementSibling.classList.add('ativo');

  accordion.forEach((item) =>{
    item.addEventListener('click', () =>{
      item.nextElementSibling.classList.toggle('ativo');
    })
  })
}

accordionList();

const sections = document.querySelectorAll('.js-scroll');
sections[0].classList.add('ativo');

function slowScroll(){ 

  function slideLeft(){
    sections.forEach((sec) =>{

      const height = window.innerHeight * 0.8;
      const top = sec.getBoundingClientRect().top - height;
      if(top < 0){
        sec.classList.add('ativo');
      }else{
        sec.classList.remove('ativo');
      }
    })
  }

  window.addEventListener('scroll', slideLeft)
}

slowScroll();