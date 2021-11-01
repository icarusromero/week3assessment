let favColorBtn = document.querySelector('#color');

const favColor = () => {
    const para = document.createElement('p');
    const ptext = document.createTextNode('Purple!');
    para.appendChild(ptext);
    const answers = document.querySelector('#answers');
    answers.appendChild(para);
}

favColorBtn.addEventListener('click', favColor);

let favePlaceBtn = document.querySelector('#place');

const favePlace = () => {
    const para = document.createElement('p');
    const ptext = document.createTextNode('The Bowling Alley');
    para.appendChild(ptext);
    const answers = document.querySelector('#answers');
    answers.appendChild(para);
}

favePlaceBtn.addEventListener('click', favePlace);

let favRitualBtn = document.querySelector('#ritual');

const faveRitual = () => {
    const para = document.createElement('p');
    const ptext = document.createTextNode('Weekly stardew game night with my friend :)');
    para.appendChild(ptext);
    const answers = document.querySelector('#answers');
    answers.appendChild(para);
}

favRitualBtn.addEventListener('click', faveRitual)