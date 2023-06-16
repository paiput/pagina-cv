const projectsContainer = document.getElementById('projects-container')
const carouselButtons = document.querySelectorAll('.CAROUSEL_BUTTON')

function resetHighlightedCard() {
  projectsContainer.querySelectorAll('div[name="carousel-card"]').forEach((card) => {
    card.style.scale = '1'
  })
}

const projects = [
  {
    title: 'Calculator App',
    description: 'Desafío de desarrollo de una calculadora funcional simple asf as fsad fasf ',
    image: 'public/images/projects/calculator-app.jpg',
    tags: ['React'],
    url: 'https://paiput.github.io/calculator-app/',
    repo: 'https://github.com/paiput/calculator-app'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Desafío de desarrollo de una calculadora funcional simple asf as fsad fasf ',
    image: 'public/images/projects/social-media-dashboard.jpg',
    tags: ['HTML', 'CSS'],
    url: 'https://paiput-social-media-dashboard.netlify.app/',
    repo: 'https://github.com/paiput/frontend-mentor/tree/master/junior/14_social-media-dashboard-with-theme-switcher-master'
  },
  {
    title: 'Bootcamp Testimonials',
    description: 'Desafío de desarrollo de una calculadora funcional simple asf as fsad fasf ',
    image: 'public/images/projects/bootcamp-testimonials.jpg',
    tags: ['JS', 'HTML', 'CSS'],
    url: 'https://paiput-coding-bootcamp-testimonials.netlify.app/',
    repo: 'https://github.com/paiput/frontend-mentor/tree/master/junior/08_coding-bootcamp-testimonials-slider'
  },
  {
    title: 'Lista de compras',
    description: 'Página web sencilla que funciona como lista de compras',
    image: 'public/images/projects/shoplist.png',
    tags: ['JS', 'HTML', 'CSS'],
    url: 'https://listado-de-compras.netlify.app/index.html',
    repo: 'https://github.com/paiput/lista-de-compras'
  }
]

projects.forEach((project) => {
  const card = document.createElement('div')
  card.setAttribute('name', 'carousel-card')
  card.innerHTML = `
    <div class="h-full rounded-md overflow-hidden shadow-lg border border-neutral-900 shadow-neutral-800 w-72 bg-neutral-800">
      <div class="relative max-w-xs">
        <img src="${project.image}" alt="Project screenshot" class="w-full aspect-video" />
        <div class="absolute right-0 top-0 m-2 flex items-center gap-2 bg-black bg-opacity-30 rounded-full p-1">
          <a href="${project.url}" target="_blank" class="inline-block w-6 h-6 hover:brightness-90">
            <img src="/public/icons/website.svg" alt="Website icon" class="w-full" />
          </a>
          <a href="${project.repo}" target="_blank" class="inline-block w-5 h-5 hover:brightness-90">
            <img src="/public/icons/github.svg" alt="Github icon" class="w-full" />
          </a>
        </div>
      </div>
      <h3 class="bg-neutral-900 p-2 text-xl text-center font-semibold">${project.title}</h3>
      <div class="m-4 max-h-[114px] h-full flex flex-col justify-between">
        <p>${project.description}</p>
        <div class="mt-4">
          ${project.tags.map((tag) => (
            `<span class="text-xs inline-block box-content border rounded-md py-1 px-2">${tag}</span>`
          )).join(' ')}
        </div>
      </div>
    </div>
  `
  projectsContainer.appendChild(card)
})

let currentIndex = 1, currentPosition = '0'
const CARD_WIDTH = 288, CARD_GAP = 16

const cardItems = projectsContainer.querySelectorAll('div[name="carousel-card"]')

cardItems[currentIndex].style.scale = '1.05'
carouselButtons.forEach((button) => {
  button.addEventListener('click', (ev) => {
    
    if (ev.currentTarget.name === 'button-left') {
      if (currentIndex === 0) return
      currentPosition += (CARD_WIDTH + CARD_GAP)
      currentIndex--
    } else {
      if (currentIndex === projects.length-1) return
      currentPosition -= (CARD_WIDTH + CARD_GAP)
      currentIndex++
    }

    resetHighlightedCard()


    const currentCardItem = projectsContainer.querySelector(`div[name="carousel-card"]:nth-child(${currentIndex+1})`)
    
    projectsContainer.style.translate = `${currentPosition}px 0`
    
    currentCardItem.style.scale = '1.05'
    currentCardItem.classList.add('transition-all', 'duration-500', 'ease-in-out')
  })
})