// const url = 'https://anna-logophile-backend.herokuapp.com/fetch-random-word';
const url = 'https://chrome-extensions-backend.herokuapp.com/fetch-random-word-anna-logophile';
fetch(url).then(res => res.json()).then(json => handleResponse(json));

function handleResponse(result) {
    console.log(result);

    let traditional = result.traditional;
    let simplified = result.simplified;
    let pinyin = result.pinyin;
    let meaning = result.meaning;

    let audio = result.audio;

    if (audio !== 'none') {
        
        let audioElement = document.getElementById("audio");
        let audioSRCElement = document.getElementById("audio-src");

        audioElement.style.display = 'block';
        
        audioSRCElement.setAttribute("src", `${audio}`);

        audioElement.load();
    }
    
    let traditionalElement = document.querySelector('.traditional');
    traditionalElement.innerHTML = traditional;

    let simplifiedElement = document.querySelector('.simplified');
    simplifiedElement.innerHTML = simplified;

    let pinyinElement = document.querySelector('.pinyin');
    pinyinElement.innerHTML = pinyin;

    let meaningElement = document.querySelector('.meaning');
    meaningElement.innerHTML = meaning;

}

document.addEventListener('DOMContentLoaded', function() {
    let meaningElementEvent = document.querySelector('.show-meaning');

    let pinyinElement = document.querySelector('.pinyin');
    let meaningElement = document.querySelector('.meaning');

    // onClick's logic below:
    meaningElementEvent.addEventListener('click', function() {
        console.log("Showing meaning...");
        meaningElement.style.display = 'block';
        pinyinElement.style.display = 'block';
    });
});

// console.log(result.traditional);
// console.log(result.simplified);
// console.log(result.pinyin);
// console.log(result.meaning);