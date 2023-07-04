const number = document.querySelectorAll('.number')
        const letter = document.querySelectorAll('.letter')
        const circle = document.querySelector('.circle')

        function generateRandom(min = 0, max = 100) {

            // find diff
            let difference = max - min;

            // generate random number 
            let rand = Math.random();

            // multiply with difference 
            rand = Math.floor(rand * difference);

            // add with min value 
            rand = rand + min;

            return rand;
        }

        console.log(generateRandom(1, 4));

        for (let i = 0; i < number.length; i++) {
            number[i].onclick = () => {
                let j = generateRandom(1, 4)
                circle.classList.add('show-' + j)
                setTimeout(() => {
                    circle.classList.remove('show-' + j)
                }, 1000)
            }

        }

        for (let i = 0; i < letter.length; i++) {
            letter[i].onclick = () => {
                let j = generateRandom(1, 4)
                circle.classList.add('show-' + j)
                setTimeout(() => {
                    circle.classList.remove('show-' + j)
                }, 1000)
            }
        }