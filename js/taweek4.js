      const board = document.querySelector('.board');
      const resetButton = document.getElementById('reset');
      const player1 = 'X';
      const player2 = 'O';
      let player = player1;

      function addPiece(e) {
          console.log(e.target);
          e.target.innerHTML = player;
          if (player === player1) player = player2;
          else player = player1;
      }
      // table version
      function resetBoard() {
          console.dir(board);
          for (let i = 0; i < board.rows.length; i++) {
              let row = board.rows[i];
              for (let j = 0; j < row.cells.length; j++) {
                  row.cells[j].innerHTML = '';
              }
          }
      }
      board.addEventListener('click', addPiece);
      divBoard.addEventListener('click', addPiece);
      reset.addEventListener('click', resetBoardDiv);


      // This was the code I tried working with. It's close but it doesn't work.

      // const playarea = document.querySelector('.play-area');
      // const item = document.querySelector('item');
      // const reset = document.getElementById('reset');
      // const player1 = 'X';
      // const player2 = 'O';

      // let player = player1;

      // function playGame(e) {

      //     console.log(e.target);
      //     e.target.innerHTML = player;
      //     if (player === player1) {
      //         player = player2;
      //     } else player = player1;
      // }

      // function resetBoard(){
      //     // const playarea = document.querySelector('.play-area');
      //     for (let i = 0; i < playarea.children.length; i++) {
      //         playarea.chilren[i].innerText = '';
      //     }
      //     const children = Array.from(playarea.children);
      //     const empty = children.filter(function(child){
      //         return child.innerText == 'X' || child.innerText == 'O';
      //     });
      //     console.log(empty);
      // }

      // const itemNum = document.getElementById('item1');
      // itemNum.addEventListener('click', )

      // item.addEventListener('click', (playGame) => {
      //     if (child.innerText = 'X');{
      //         console.log('X');
      //     } else child.innerText == 'O';
      // });
      // reset.addEventListener('click', resetBoard);