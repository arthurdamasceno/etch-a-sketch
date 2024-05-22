let container = document.querySelector(".container");
makeSquares();

function makeSquares(){
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            let div = document.createElement('div');
            div.classList.add("square");
            container.appendChild(div);
        }
    }
    addFlex();
}

function addFlex(){
    container.style.cssText = "display: flex; flex-wrap: wrap";
}



//div.innerHTML += '<div class="square"></div>';