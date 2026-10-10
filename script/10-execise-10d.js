        const buttonElement = document.querySelector('button');

        
        function toggleButton(buttonElement) {
            console.log(buttonElement);
            const PreviousButton = document.querySelector('.is-toggled');
            console.log(PreviousButton);
            if(!buttonElement.classList.contains('is-toggled')) {
                offPreviousButton(PreviousButton);
                buttonElement.classList.add('is-toggled');
            }else if(buttonElement.classList.contains('is-toggled')) {
                buttonElement.classList.remove('is-toggled')
            }
        }

        function offPreviousButton(PreviousButton) {
            if(PreviousButton) {
                PreviousButton.classList.remove('is-toggled');
            }
        }