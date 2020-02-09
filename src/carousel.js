/*
                    <img class="preview img-fluid" />
                    <p id="filter-name"></p>
*/

let carousel = document.getElementById("data")
const elements = carousel.getAttribute("elements")

const mapImages = () => {
    carousel.innerHTML = ""
    filters.map(filter => {
        const imagePreview = document.createElement("img")
        imagePreview.classList.add("lazy")
        imagePreview.classList.add("preview")
        imagePreview.classList.add("img-fluid")
        imagePreview.src = "./assets/logo.svg"
        imagePreview.classList.add(filter.value)
        imagePreview.addEventListener("click", () => {
            handleSelectionFilter(filter.value)
        })
        carousel.appendChild(imagePreview)
    })
}


/*
let div = document.createElement("div")
        div.style.backgroundImage = `url("./assets/logo.svg")`
        div.style.border = "1px solid grey"
        div.classList.add("img-fluid")
        div.classList.add("preview")
        div.classList.add(filter.value)
        div.addEventListener("click",()=>{
            handleSelectionFilter(filter.value)
        })
        carousel.appendChild(div)
*/