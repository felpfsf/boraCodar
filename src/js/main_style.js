import '../css/index.css'
import data from './db.json'

const cardGrid = document.querySelector('#card-grid')
const desafios = data.desafios

const listDesafios = desafios.map(desafio => {
  return `
  <div class="w-[328px] p-4">
    <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
      <img
        class="h-40 rounded w-full object-cover object-center mb-6"
        src=${desafio.bannerUrl}
        alt=${desafio.title}
      />
      <h3
        class="tracking-widest text-mytheme-info text-xs font-medium uppercase"
      >
        ${desafio.subtitle}
      </h3>
      <h2 class="text-lg text-white font-medium mb-4">${desafio.title}</h2>
      <p class="leading-relaxed text-base">
      ${desafio.description}
      </p>
      <div class="flex justify-end">
        <a
          href=${desafio.urlTo}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center font-semibold text-mytheme-primary transition-colors duration-300 ease-in-out"
        >
          <span
            class="border-b border-b-transparent hover:border-b-mytheme-info hover:text-mytheme-info transition-all duration-300 ease-in-out"
          >
            Veja mais
          </span>
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  `
})

cardGrid.innerHTML = listDesafios.join('\n')
