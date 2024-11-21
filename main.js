const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click",() =>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})
navLink.forEach(link =>{
    link.addEventListener("click",() =>{
        navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
    })
})


const scrollup = () => {
    const scrollUpBtn =document.getElementById("scroll-up")
    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }
    else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll",scrollup)

const scrollHeader = () => {
    const header =document.getElementById("navbar")
    if(this.scrollY >=50){
      
        header.classList.add("border-b", "border-yellow-500")
    }
    else{
      
        header.classList.remove("border-b", "border-yellow-500")
    }
}
window.addEventListener("scroll",scrollHeader)






const activeLink = () => {
    const sections =  document.querySelectorAll('section')
    const navLinks = document.querySelectorAll(".nav-link")


    let current = "home"
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(this.scrollY >= sectionTop -60){
            current = section.getAttribute("id")
        }
    })
    navLink.forEach(item => {
        item.classList.remove("active")


        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}
window.addEventListener("scroll",activeLink)







const swiper = new Swiper('.swiper', {
    // Optional parameters
   speed:400,
   spaceBetween:30,
   autoplay:{
    delay:3000,
    disableOnInteraction:false
   },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });
  