
// const url = 'https://anna-logophile-backend.herokuapp.com/fetch-random-word';
const url = 'https://chrome-extensions-backend.herokuapp.com/fetch-random-word-its-over-9k';
fetch(url).then(res => res.json()).then(json => handleResponse(json));

function handleResponse(result) {
    console.log(result);

    let number = result.number;
    let word = result.character;
    let meaning = result.meaning;

    let audio = result.audio;

    if (audio !== 'none') {
        
        let audioElement = document.getElementById("audio");
        let audioSRCElement = document.getElementById("audio-src");

        audioElement.style.display = 'block';
        
        audioSRCElement.setAttribute("src", `${audio}`);

        audioElement.load();
    }
    
    let numberElement = document.querySelector('h4.number');
    numberElement.innerHTML = number;

    let wordElement = document.querySelector('h4.word');
    wordElement.innerHTML = word;

    let meaningElement = document.querySelector('h2.meaning');
    meaningElement.innerHTML = meaning;

}

document.addEventListener('DOMContentLoaded', function() {
    let meaningElementEvent = document.querySelector('button.show-meaning');

    let meaningElement = document.querySelector('h2.meaning');

    // onClick's logic below:
    meaningElementEvent.addEventListener('click', function() {
        console.log("Showing meaning...");
        meaningElement.style.display = 'block';
    });
});

// console.log(result.traditional);
// console.log(result.simplified);
// console.log(result.pinyin);
// console.log(result.meaning);