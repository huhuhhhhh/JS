

        const score = JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        }

        document.querySelector('.js-score')
            .innerHTML = `Wins : ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

        document.querySelector('.js-result')
            .innerHTML = '';

        document.querySelector('.js-moves')
            .innerHTML = '';

        let isAutoPlaying = false;
        let intervalID;

        function autoPlay() {
            if(!isAutoPlaying){
                intervalID = setInterval(() => {
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                }, 1000);
                isAutoPlaying = true;

            } else {
                clearInterval(intervalID);
                isAutoPlaying = false;
            }
        }

         document.querySelector('.js-rock-button').addEventListener('click', ()=>{
            playGame('Rock');
         });


         document.querySelector('.js-paper-button').addEventListener('click', ()=>{
            playGame('Paper');
         });

         document.querySelector('.js-scissors-button').addEventListener('click',()=>{
            playGame('Scissors')
         })

         document.body.addEventListener('keydown', (event) => {
            if(event.key == 'r') {
                playGame('Rock');
            }else if(event.key == 'p') {
                playGame('Paper')
            }else if(event.key == 's') {
                playGame('Scissors')
            }
         });
        function playGame(playerMove) {

            const computerMove = pickComputerMove();
                let result = '';

                if(playerMove === 'Scissors'){
                    if(computerMove === 'Rock'){
                        result = 'You Lose'
                    }else if (computerMove === 'Paper') {
                        result = 'You Win'
                    }else if (computerMove === 'Scissors') {
                        result = 'Tie'
                    }
                }else if(playerMove === 'Paper') {
                    if(computerMove === 'Rock'){
                        result = 'You Win'
                    }else if (computerMove === 'Paper') {
                        result = 'Tie'
                    }else if (computerMove === 'Scissors') {
                        result = 'You Lose'
                    }
                }else if(playerMove === 'Rock') {
                    if(computerMove === 'Rock'){
                        result = 'Tie'
                    }else if (computerMove === 'Paper') {
                        result = 'You Lose'
                    }else if (computerMove === 'Scissors') {
                        result = 'You Win'
                    }
                }

                if(result === 'You Win'){
                    score.wins += 1;
                } else if(result === 'You Lose') {
                    score.losses += 1;
                } else if (result === 'Tie') {
                    score.ties += 1;
                }

                console.log(score);

                localStorage.setItem('score', JSON.stringify(score));

                document.querySelector('.js-moves')
                    .innerHTML = `You
                    <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
                    <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
                    computer`;
               updateScore(result);
        }

        function updateScore(result) {
            document.querySelector('.js-score')
                    .innerHTML = `Wins : ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

            document.querySelector('.js-result')
                    .innerHTML = `${result}`;
        }

       
        
        function pickComputerMove() {
                const randonNumber = Math.random()
                let computerMove = '';

                if (randonNumber >= 0 && randonNumber < 1/3){
                    computerMove ='Rock';
                } else if (randonNumber >= 1/3 && randonNumber < 2/3) {
                    computerMove = 'Paper';
                }else if (randonNumber >=2/3 && randonNumber < 1){
                    computerMove = 'Scissors';
                }
                
                return computerMove;
        }

