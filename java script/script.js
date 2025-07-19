

const typed = new Typed('#typed', {
  strings: ['Discover top brands,latest models, and unbeatab deals all in one place.'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
});
const typed_tow = new Typed('#discrabtion-one', {
  strings: ['smart gadgets, accessories, and tech essentials.'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
});



// open navbar 
function openNavbar() {
  let bar = document.querySelector('.bar')
  if (bar) {
    if (!localStorage.getItem('position')) {
      localStorage.setItem('position', 'open')
    }
    let position = localStorage.getItem('position') || 'open'
    let navbar = document.querySelector(".setnav")
    bar.addEventListener("click", () => {
      if (localStorage.getItem('position') === 'open') {
        navbar.style.marginRight = "0"
        console.log(' I am working')
        position = 'close'
      } else {
        navbar.style.marginRight = "-100%"
        console.log(' I am not working')
        position = 'open'
      }

      localStorage.setItem('position', position)
    })
    
      window.addEventListener('click', e => {
        e.stopPropagation()
        if (!navbar.contains(e.target) && !bar.contains(e.target) ) {
          navbar.style.marginRight = "-100%"
          console.log(' I am not working')
          position = 'open'
          localStorage.setItem('position', position)
        }
      })
  }
}

openNavbar()
