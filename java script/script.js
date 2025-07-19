

const typed = new Typed('#typed', {
  strings: ['Discover top brands latest models and unbeatab deals all in one place....'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
});
const typed_tow = new Typed('#discrabtion-one', {
  strings: ['smart gadgets accessories and tech essentials.......'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
});
const typed_three = new Typed('#get-email', {
  strings: ['Get E-mail updates about our latest shop.......'],
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
      if (!navbar.contains(e.target) && !bar.contains(e.target)) {
        navbar.style.marginRight = "-100%"
        console.log(' I am not working')
        position = 'open'
        localStorage.setItem('position', position)
      }
    })
  }
}

openNavbar()



// function for dark mood
function dark() {
  let body = document.body
  let dark = document.getElementById('dark')
  if (dark) {
    // if (!localStorage.getItem('mood')) {
    //   localStorage.setItem('mood', 'dark')
    // }
    let mood
    dark.addEventListener('click', () => {
      if (localStorage.getItem('mood') === "dark") {
        body.style.backgroundColor = '#1e1e2f'
        body.style.color = '#fff'
        mood = 'light'
        dark.textContent = "☀️"
        dark.backgroundColor = '#1e1e2f'
        localStorage.setItem('mood', mood)
        console.log("it's dark")
      }
      else {
        body.style.backgroundColor = '#fff'
        body.style.color = 'black'
        mood = 'dark'
        dark.textContent = "🌙"
        dark.backgroundColor = '#fff'
        localStorage.setItem('mood', mood)
        console.log("it's light")
      }
    })
    if (localStorage.getItem('mood') === 'light') {
      body.style.backgroundColor = '#1e1e2f'
      body.style.color = '#fff'
      dark.textContent = "☀️"
      dark.backgroundColor = '#1e1e2f'
    } else {
      body.style.backgroundColor = '#fff'
      body.style.color = 'black'
      dark.textContent = "🌙"
      dark.backgroundColor = '#fff'

    }

  }
}
dark()


// function for up button 

function up() {
  let up = document.getElementById('up')
  if(up){
    window.addEventListener('scroll',()=>{
      if(window.scrollY<400){
        up.style.display='none'
      }else{
        up.style.display='block'
      }
    })
    up.addEventListener('click',()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    })
  }

}
up()