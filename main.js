let msg = "hola mundo"

console.log(msg)

document.addEventListener("DOMContentLoaded",init)

function init(event) {
    let title = document.getElementById("title")
    title.style.color = "red"
    title.innerHTML = msg
    loadData("data.json")
}

function loadData(url) {
    fetch(url)
        .then(response => json = response.json())
        .then(data => pintasMisHobbies(data))
        
}

function pintasMisHobbies(json) {
    console.log(json)
}
