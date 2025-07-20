





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





// function for dark mood
function dark() {
  let body = document.body
  let dark = document.querySelectorAll('.dark')
  if (dark) {
  dark.forEach((darko,index)=>{

    let mood
    darko.addEventListener('click', () => {
      if (localStorage.getItem('mood') === "dark") {
        body.style.backgroundColor = '#1e1e2f'
        body.style.color = '#fff'
        mood = 'light'
        darko.textContent = "☀️"
        localStorage.setItem('mood', mood)
        console.log("it's dark")
      }
      else {
        body.style.backgroundColor = '#fff'
        body.style.color = 'black'
        mood = 'dark'
        darko.textContent = "🌙"
        localStorage.setItem('mood', mood)
        console.log("it's light")
      }
    })
    if (localStorage.getItem('mood') === 'light') {
      body.style.backgroundColor = '#1e1e2f'
      body.style.color = '#fff'
      dark.forEach(btn=>{ btn.textContent = "☀️"})
    } else {
      body.style.backgroundColor = '#fff'
      body.style.color = 'black'
   dark.forEach(btn=>{ btn.textContent = "🌙"})
    }
  })
  }
}



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
   const nav = document.getElementById('navbar');
  nav.style.top = '0';
  nav.style.display = 'flex';
  }

}



document.addEventListener('DOMContentLoaded',()=>{
  if(document.querySelector('#typed')){
const typed = new Typed('#typed', {
  strings: ['Discover top brands latest models and unbeatab deals all in one place....'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
})};

if(document.querySelector('#discrabtion-one')){
const typed_tow = new Typed('#discrabtion-one', {
  strings: ['smart gadgets accessories and tech essentials.......'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
})};

if(document.querySelector('#get-email')){
const typed_three = new Typed('#get-email', {
  strings: ['Get E-mail updates about our latest shop.......'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
})};
if(document.querySelector('#typed-about')){
const typed_four = new Typed('#typed-about', {
  strings: ['Here in this page you are going to know more about us.......'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
})};
if(document.querySelector('#typed-contact')){
const typed_four = new Typed('#typed-contact', {
  strings: ['Call us anytime we are working 24/7 for you .......'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
  loop: Infinity
})};
openNavbar()
dark()
up()
})