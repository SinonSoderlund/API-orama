document.addEventListener("DOMContentLoaded", (event) => onLoaded());

const elements = [];
function onLoaded() {
    document.getElementById("search").addEventListener("click", (event) => lookUpData());

}


//gets star wars dat and displays it
async function lookUpData() {
    let input = document.getElementById("starWarSearch");
    let text = input.value;
    if (text !== "") {
        document.getElementById("alertItem").classList.add("d-none");
        input.value = "";
        text = text.replace(" ", "-");
        console.log(`https://www.swapi.tech/api/people/?name=${text}`);

        fetch(`https://www.swapi.tech/api/people/?name=${text}`)
            .then(res => res.json())
            .then(data => {
                data = data["result"][0]["properties"]
                let output = document.getElementById("StarWarInfo");
                output.value = `Height: ${data["height"]}
mass: ${data["mass"]}
gender: ${data["gender"]}
hair colour: ${data["hair_color"]}`

            }
            )
            .catch(err => console.log(err));
    }
    else
        document.getElementById("alertItem").classList.remove("d-none");

}