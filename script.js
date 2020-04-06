
let boxCountX = 30;
let boxCountY = 30;
let barHeight = 75;
let regEx = new RegExp(/^[1-9]\d{0,}/);

let labelX = document.createElement('label')
let labelY = document.createElement('label')
labelX.textContent = 'ROW:';
labelY.textContent = 'COLUMN:';

let inputX = document.createElement('input');
inputX.setAttribute('id', 'x');
let inputY = document.createElement('input');
inputY.setAttribute('id', 'y');


//--Button & Navbar------------------------------------------------------------------------
let btn = document.createElement('button');
btn.textContent = 'GENERATE';

let navBar = document.querySelector('#navBar');
navBar.style.height = barHeight+'px';
navBar.appendChild(labelX);
navBar.appendChild(inputY);
navBar.appendChild(labelY);
navBar.appendChild(inputX);
navBar.appendChild(btn);


let container = document.querySelector('#container');

//--Creating rows--------------------------------------------------------------------------
function createBoxes() {
    for (j=0; j< inputY.value; j++){   
        let rows = document.createElement('div');
        rows.setAttribute('class','boxContainer');
        container.appendChild(rows);
        //--Creating boxes-----------------------------------------------------------------
        for (i=0; i<inputX.value; i++){
            let gridboxX = document.createElement('div');
            gridboxX.setAttribute('class','box');
            gridboxX.style.width = (window.innerWidth / inputX.value) + 'px';
            gridboxX.style.height = ((window.innerHeight-barHeight) / inputY.value) + 'px';
            rows.appendChild(gridboxX);
        }
    }
}
//-----------------------------------------------------------------------------------------

//--On-click grid redraw-------------------------------------------------------------------
btn.addEventListener('click', reDraw);
function reDraw() {
    if (regEx.test(inputX.value) && regEx.test(inputY.value)) {
        container.innerHTML = '';
        createBoxes();
        let box = document.querySelectorAll('.box');
        box.forEach((asd) => {
            asd.addEventListener('mouseover', boxHover);
        });
    }
    else{
        alert('Csak 0-nál nagyobb számokat írj be!')
    }

}     
//-----------------------------------------------------------------------------------------


//--Window resize eventListener------------------------------------------------------------
//--Box resize function--------------------------------------------------------------------
window.addEventListener('resize', winResize);
function winResize(){
    let box = document.querySelectorAll('.box');
    box.forEach((asd) => {
        asd.style.width = (window.innerWidth / inputX.value) + 'px';
        asd.style.height = (((window.innerHeight)-barHeight) / inputY.value) + 'px';
    })
}
//-----------------------------------------------------------------------------------------


//--Box mouseover eventListener------------------------------------------------------------
let box = document.querySelectorAll('.box');
box.forEach((asd) => {
    asd.addEventListener('mouseover', boxHover);
});
//-----------------------------------------------------------------------------------------

//--Mouseover random RGB Effect------------------------------------------------------------
function boxHover(){
    let rndmColor = `rgba(${rndm()},${rndm()},${rndm()},0.5)`;
    this.style.backgroundColor = rndmColor;   
    
}
//-----------------------------------------------------------------------------------------


//--Random RGB-----------------------------------------------------------------------------
function rndm() {
    let random = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    return random;
}
//-----------------------------------------------------------------------------------------


 
        
