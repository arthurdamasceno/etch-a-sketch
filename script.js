let container = document.querySelector(".container");
addFlex();

function addFlex(){
    container.style.cssText = "display: flex; flex-wrap: wrap";
    makeSquares();
}

function makeSquares(){
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            let div = document.createElement('div');
            div.classList.add("square");
            div.addEventListener("mouseover", () => addHover(div));
            container.appendChild(div);
        }
    }
}

function addHover(div){
    div.classList.add("hover");
}