const myButton = document.getElementById('myButton');

if (myButton !== null){
    myButton.addEventListener('click', () => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Text added by clicking on the button!';

        document.body.appendChild(newParagraph);
    });
}
