let mainI=document.querySelector(".nave .continer>i")
let links=document.querySelector(".nave .continer  .links ")
mainI.addEventListener("click",()=>{ 
    links.classList.toggle("open")
    
})


window.addEventListener("click",(e)=>{
    if(e.target!==mainI && e.target!==links){
        if(links.classList.contains("open")){
            links.classList.remove("open")
        }   
    }
})

let moveUp=document.querySelector(".move-up")
window.addEventListener("scroll",()=>{
    if(scrollY>250){
        moveUp.style.display="inline-block"
    }else{
        moveUp.style.display="none"
    }
})
moveUp.onclick=function(){
    window.scrollTo(0,0)
}

//////////////////


const mainLinks = document.querySelectorAll('.main-links li a')
mainLinks.forEach(link => {
  link.addEventListener('click', ()=> {
    mainLinks.forEach(l => l.classList.remove('active'))
    e.currentTarget.classList.add('active')
  })
})

const numbersSection = document.querySelector('.data')
const numbers = document.querySelectorAll('.data .box div span:nth-child(1)')
let started = false;

window.addEventListener("scroll",()=> {
        if(window.scrollY >= numbersSection.offsetTop - 300){
            if(!started){
                numbers.forEach(num => {
                    const goal = num.dataset.set
                    let count = setInterval(() => {
                        num.textContent++
                        if (num.textContent == goal) {
                            clearInterval(count)
                        }
                    },1/goal);
                });
            }
        started = true;
    }
})