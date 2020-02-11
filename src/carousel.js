let carousel = document.getElementById("data")

const elements = carousel.getAttribute("elements")

const mapImages = () => {
    carousel.innerHTML = ""
    loaded_filters.map(filter => {
        const imagePreview = document.createElement("img")
        imagePreview.classList.add("preview")
        imagePreview.classList.add("img-fluid")
        imagePreview.src = "./assets/logo.svg"
        imagePreview.classList.add(filter.value)
        imagePreview.onclick = function() {
            handleSelectionFilter(filter.value)
        }
        carousel.appendChild(imagePreview)
    })
}