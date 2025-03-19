// selecting side nav bar , selecting menu icon

let sideNav = document.getElementById("sidenav")

let menuIcon = document.getElementById("menuicon")

menuIcon.addEventListener("click", function () {
    sideNav.style.right = 0
})

let closeNav = document.getElementById("close-nav")
closeNav.addEventListener("click", function () {
    sideNav.style.right = "-50%"
})


let productContainer = document.getElementById("product-container")

let search = document.getElementById("search")

let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    let entredValue = event.target.value.toLowerCase()
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].querySelector("h1").textContent.toLowerCase().indexOf(entredValue) < 0){
            productList[i].style.display = "none"
        }else{
            productList[i].style.display = "block"
        }

    }
})