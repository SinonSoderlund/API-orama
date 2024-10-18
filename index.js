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
        document.getElementById("searchAlertItem").classList.add("d-none");
        input.value = "";
        let searchText = text.replace(" ", "%20");
        console.log(`https://www.swapi.tech/api/people/?name=${searchText}`);

        fetch(`https://www.swapi.tech/api/people/?name=${searchText}`)
            .then(res => res.json())
            .then(data => {
                data = data["result"][0]["properties"]
                let output = document.getElementById("StarWarInfo");
                output.value = `Name: ${data["name"]}
Height: ${data["height"]}
mass: ${data["mass"]}
gender: ${data["gender"]}
hair colour: ${data["hair_color"]}`

            }
            )
            .catch(err => console.log(err) 
             (document.getElementById("searchAlertItem").classList.remove("d-none") 
            (document.getElementById("StarWarInfo").value = `Name : ${text}`)));
    }
    else
        document.getElementById("alertItem").classList.remove("d-none");

}