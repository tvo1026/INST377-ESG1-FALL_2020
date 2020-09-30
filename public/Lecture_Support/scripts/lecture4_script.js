const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}

function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}

// This might be a bit longer than the onclick attribute which calls the createParagraph method, 
//     but it will work for all buttons — no matter how many are on the page,
/*
const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
buttons[i].addEventListener('click', createParagraph);
}
*/
