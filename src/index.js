'use strict'

let image = null

let applied_filter = ""


const checkBrowser = () => new Promise((resolve, reject) => {
    let browser = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
    browser[1] === "Chrome" && browser[2] >= 52 && resolve(browser[1])
    browser[1] === "Firefox" && Browser[2] >= 49 && resolve(browser[1])
    reject("It seems that your browser doesn't support the canvas filter function, so you can only see the filter applied to the photos but you can't still download them")
})

const errorPage = (error) => {
    document.getElementById("download").innerHTML = `
        <div class="alert alert-danger">
            <strong>Please, Change Browser!</strong> ${error}
        </div>
    `
}



const checkExtension = file => new Promise((resolve, reject) => {
    file = file.split(";")
    const acceptedImageTypes = ['data:image/jpeg', 'data:image/png']
    acceptedImageTypes.includes(file[0]) ? resolve() : reject("Filetype not valid")
})

document.getElementById("add-image").onchange = function () {
    applied_filter && document.getElementById('image').classList.remove(applied_filter)
    var reader = new FileReader()
    reader.onload = function (e) {
        checkExtension(e.target.result).then(res => {
            document.getElementById("image").src = e.target.result
            document.getElementById("image").style.display = "flex"
            document.getElementById("carousel-filters").style.display = "block"
            console.log("set")
            image = event.target.result
            mapImages()
        })
            .catch(err => { return err })
    }
    reader.readAsDataURL(this.files[0]);

}

const applyFilter = (filter) => new Promise((resolve, reject) => {
    var img = new Image();

    img.crossOrigin = '';
    img.src = document.getElementById('image').src;

    img.onload = function () {
        var canvas = document.getElementById('imageCtx'),
            ctx = canvas.getContext('2d');
        canvas.width = document.getElementById("image").naturalWidth
        canvas.height = document.getElementById("image").naturalHeight
        if (typeof ctx.filter !== 'undefined') {
            ctx.filter = filter.filter
            ctx.drawImage(this, 0, 0);
            resolve()
        } else {
            ctx.drawImage(this, 0, 0);
            resolve()
        }
        reject("error applying filter, please make sure the format is correct")
    }
})

const handleSelectionFilter = (filterValue) => {
    console.log(filterValue)
    const filter = _.find(filters, f => { return f.value === filterValue })
    applied_filter && document.getElementById('image').classList.remove(applied_filter)
    applyFilter(filter).then(res => {
        document.getElementById('image').classList.add(filter.value)
        document.getElementById('download').style.display = "flex"
        applied_filter = filter.value

    })
        .catch(err => console.log(err))
}


const download = () => {
    saveAs(document.getElementById('imageCtx').toDataURL("image/jpeg"), "duckstagrammed.jpg")
}

document.onload = checkBrowser().finally(res => {
    console.log("checked")
}).catch(err => errorPage(err))
