// selecting side nav bar , selecting menu icon

let sideNav = document.getElementById("sidenav")

let menuIcon = document.getElementById("menuicon")

menuIcon.addEventListener("click",function(){
    sideNav.style.right = 0
})

let closeNav = document.getElementById("close-nav")
closeNav.addEventListener("click" ,function(){
    sideNav.style.right ="-50%"
})