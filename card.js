document.addEventListener("DOMContentLoaded", (event) => onLoaded());

const elements = [];
function onLoaded() {
    document.getElementById("getCard").addEventListener("click", (event) => getCard());

}


async function getCard() {




    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let parent = document.getElementById("imgHome");
            data = data["cards"][0]
            let image = document.createElement("img");
            image.setAttribute("src", `${data["image"]}`)
            image.classList.add("img-fluid")
            parent.innerHTML=""
            parent.appendChild(image)
        }
        )
        .catch(err => console.log(err));


}