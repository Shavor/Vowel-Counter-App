'use strict'

const btn = document.querySelector('.btn'),
    result = document.querySelector('.result'),
    world = document.querySelector('.input-text');

const countVowel = () => {
    let vowelCount = 0;
    let worldValue = world.value.toLowerCase();

    for(let i = 0; i < worldValue.length; i++) {
        let letter = worldValue[i];
        if(letter.match(/([a,o,i,e,u])/)){
            vowelCount++;
        }
        result.innerHTML = `${world.value.toUpperCase()} имеет ${vowelCount} гласных`
    }
}

btn.addEventListener('click', countVowel);

