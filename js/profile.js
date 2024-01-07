let img = document.querySelector("img")
let input = document.querySelector("input")
input.addEventListener("change", (e) => {
    img.src = URL.createObjectURL(e.target.files[0])
})