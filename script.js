let container = document.querySelector(".container");
let btn = document.querySelector("button");
let squareNumber = 0;
addFlex();

btn.addEventListener("click", function(e) {
    squareNumber = getNumber();
    makeSquares(squareNumber);
})

function makeSquares(squarenumber){
    container.innerHTML = '';
    for (let i = 0; i < (squarenumber * squareNumber); i++){
        let div = document.createElement('div');
        div.classList.add("square");
        div.addEventListener("mouseover", () => addRandomColor(div));
        setSquareSize(squarenumber, div);
        container.appendChild(div);
    }
}

function addRandomColor(div){
    let rgbColor1 = Math.floor(Math.random() * 255);
    let rgbColor2 = Math.floor(Math.random() * 255);
    let rgbColor3 = Math.floor(Math.random() * 255);
    div.style.backgroundColor = `rgb(${rgbColor1}, ${rgbColor2}, ${rgbColor3})`;
    console.log(div.style.backgroundColor)
}

function getNumber(){
    let answer = '';
    do {
        answer = parseInt(prompt("How many squares per line?"));
    } while(answer <= 0 || answer > 100);
    return answer;
}

function setSquareSize(squarenumber, div){
    console.log(container.style.width)
    div.style.width = parseInt(container.style.width) / squarenumber - 2 + 'px';
    div.style.height = div.style.width;
    console.log(div.style.width)
}

function addFlex(){
    container.style.cssText = "width: 900px; display: flex; flex-wrap: wrap;";
}