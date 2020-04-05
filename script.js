
let boxCountX = 16;
let boxCountY = 16;
let container = document.querySelector('#container');
/*
let inputX = document.createElement('input');
let inputY = document.createElement('input');

let btn = document.createElement('button');
btn.textContent = 'CREATE';

let openDiv = document.createElement('div');
openDiv.setAttribute('id','openDiv');

let body = document.querySelector('body');
openDiv.appendChild(inputX);
openDiv.appendChild(inputY);
openDiv.appendChild(btn);
body.appendChild(openDiv);

btn.addEventListener('click', createBoxes);

//--Creating rows and boxes
function createBoxes() {*/
    for (j=0; j< boxCountY; j++){   
        //--Creating rows
        let rows = document.createElement('div');
        rows.setAttribute('class','boxContainer');
        container.appendChild(rows);
            //--Creating boxes
            for (i=0; i<boxCountX; i++){
            let gridboxX = document.createElement('div');
            gridboxX.setAttribute('class','box');
            gridboxX.style.width = (window.innerWidth / boxCountX) + 'px';
            gridboxX.style.height = (window.innerHeight / boxCountY) + 'px';
            rows.appendChild(gridboxX);
        }
    }
//}

//--Window resize eventListener
window.addEventListener('resize', winResize);

//--Box resize function
function winResize(){
    let box = document.querySelectorAll('.box');
    box.forEach((asd) => {
        asd.style.width = (window.innerWidth / boxCountX) + 'px';
        asd.style.height = (window.innerHeight / boxCountY) + 'px';
    })
}

//--Box mouseover eventListener
let box = document.querySelectorAll('.box');
box.forEach((asd) => {
    asd.addEventListener('mouseover', boxHover);
});

//--Mouseover random RGB Effect
function boxHover(){
   let rndmColor = `rgba(${rndm()},${rndm()},${rndm()},0.5)`;
   this.style.backgroundColor = rndmColor;
   
    

}
//--Random RGB 
function rndm() {
    let random = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    return random;
}