const playarea = document.querySelector('.play-area');
const item = document.querySelector('item');
const reset = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';

let player = player1;

function playGame(e) {

    console.log(e.target);
    e.target.innerHTML = player;
    if (player === player1) {
        player = player2;
    } else player = player1;
}

function resetBoard(){
    // const playarea = document.querySelector('.play-area');
    for (let i = 0; i < playarea.children.length; i++) {
        playarea.chilren[i].innerText = '';
    }
    const children = Array.from(playarea.children);
    const empty = children.filter(function(child){
        return child.innerText == 'X' || child.innerText == 'O';
    });
    console.log(empty);
}

const itemNum = document.getElementById('item1');
itemNum.addEventListener('click', )

item.addEventListener('click', (playGame) => {
    if (child.innerText = 'X');{
        console.log('X');
    } else child.innerText == 'O';
});
reset.addEventListener('click', resetBoard);