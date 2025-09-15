let mainI=document.querySelector(".nave .continer>i")
let ul=document.querySelector(".nave .continer  .links ul")
let links=document.querySelector(".nave .continer  .links ")
mainI.addEventListener("click",function(){
    ul.style.display="flex"
    ul.style.flexDirection="column"
    
})


let moveUp=document.querySelector(".move-up")
window.onscroll=function(){
    if(scrollY>250){
        moveUp.style.display="inline-block"
    }else{
        moveUp.style.display="none"
    }
}
moveUp.onclick=function(){
    window.scrollTo(0,0)
}

