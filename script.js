const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const refresh = document.querySelector('#refresh');
const check = document.querySelector('#check');
const player1 =  document.querySelector('#player1');
const player2 =  document.querySelector('#player2');
const needCheck =  document.querySelector('#needCheck');

let clicks = 0;
let number = 23;

let array = [];
var nc;




rock.addEventListener('click', function () {
    
    if (array.length < 2){
        array.push(1);
        console.log(array); 
    }
     
    needChecking();
})

paper.addEventListener('click', function () {
    
    if (array.length < 2){
        array.push(2);
        console.log(array);
    }
    
    needChecking();
    
})

scissor.addEventListener('click', function () {
    
    if (array.length < 2){
        array.push(3);
        console.log(array);
    }
    
    needChecking();
    
})

refresh.addEventListener('click', function () {
    array = [];
    console.log(array);

    player1.innerHTML = 'Not played yet';
    player2.innerHTML = 'Not played yet';
    needCheck.innerHTML = 'lets play'; 
})

check.addEventListener('click', function () {

    if (array[0] == 1 && array[1] == 3 || array[0] == 2 && array[1] == 1 || array[0] == 3 && array[1] == 2)
    {
        needCheck.innerHTML = '<h1>Player 1 win </h1> : <br> Restart game'; 
    }
    if (array[0] == 1 && array[1] == 2 || array[0] == 2 && array[1] == 3 || array[0] == 3 && array[1] == 1)
    {
        needCheck.innerHTML = '<h1>Player 2 win </h1>: <br> Restart game'; 
    }
    if (array[0] == 1 && array[1] == 1 || array[0] == 2 && array[1] == 2 || array[0] == 3 && array[1] == 3)
    {
        needCheck.innerHTML = '<h1>Players Draw </h1>: <br> Restart game'; 
    }

    
})


function needChecking() {
    if (array.length == 1) {
        player1.innerHTML = 'played';
    }
    if (array.length == 2) {
        player2.innerHTML = 'played';
    }
}





// var btn = document.querySelector("#root2");
// var option = document.createElement("button");
// var optionText = ["Button 1", "Button 2", "Button 3", "Button 4"];

// btn.addEventListener("click", function(){
//   buttonSelect();
// })

// function buttonSelect() {
//     for(var i = 0; i < optionText.length; i++){
//       var option = document.createElement("button");
//       document.body.appendChild(option);
//       option.innerHTML = optionText[i];
//     }
//   }

