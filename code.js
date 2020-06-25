/*
`let clickFunc = () => {
    console.log('You clicked!')
}
let anotherFunc = () => {
    alert("Hey I clicked")
    button.removeEventListener("click", anotherFunc)
    
}`

//const button = document.querySelector("button");


//This is old and not used anymore
//button.onclick = clickFunc//this doesn't run
`button.onclick = anotherFunc`

//button.addEventListener("click", clickFunc)
//button.addEventListener("click", anotherFunc)

//window.addEventListener("resize", ()=>{
//    console.log(window.innerWidth)
//})`

//window.addEventListener("resize", function(evt){
//    console.log(evt)
//    console.log(window.innerWidth)
//})
//button.addEventListener('click', event=>{
//    console.log(event)
//})
*/

let button = document.querySelector("#add-element")

const createCard = (title, content, extra) =>{
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");

    let newH2 = document.createElement("h2");
    newH2.innerText = title;

    let newP = document.createElement("p");
    newP.append(content);

    let newEp = document.createElement("p");
    newEp.setAttribute("class", "extra");
    newEp.innerText=extra;

    newCard.append(newH2,newP,newEp);
    
    return newCard;
    //let cards = document.getElementById("cards");
    //cards.append(newCard)

}

button.addEventListener('click', (evt)=>{
    console.log(evt.target)
    let titleInput = document.getElementById("card-title")
    let contentInput = document.getElementById("card-content")
    let extraInput = document.getElementById("card-extra")
    console.dir(titleInput.value)

    let newCard = createCard(titleInput.value, contentInput.value, extraInput.value)
    document.getElementById("cards").append(newCard)

    titleInput.value = "";
    contentInput.value = "";
    extraInput.value = "";
})

