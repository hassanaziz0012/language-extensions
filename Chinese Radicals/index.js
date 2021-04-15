
// const url = 'https://anna-logophile-backend.herokuapp.com/fetch-random-word';
const url = 'https://chrome-extensions-backend.herokuapp.com/fetch-random-word-chinese-radicals';
fetch(url).then(res => res.json()).then(json => handleResponse(json));

function handleResponse(result) {
    console.log(result);

    let radical_no = result.radical_no;
    let radical = result.radical;
    let english = result.english;
    let pinyin = result.pinyin;
    let stroke_count = result.stroke_count;
    let variant = result.variant;

    let audio = result.audio;

    if (audio !== 'none') {
        
        let audioElement = document.getElementById("audio");
        let audioSRCElement = document.getElementById("audio-src");

        audioElement.style.display = 'block';
        
        audioSRCElement.setAttribute("src", `${audio}`);

        audioElement.load();
    }
    
    let radical_no_element = document.querySelector('.radical_no');
    radical_no_element.innerHTML = radical_no;

    let radical_element = document.querySelector('.radical');
    radical_element.innerHTML = radical;

    let pinyin_element = document.querySelector('.pinyin');
    pinyin_element.innerHTML = pinyin;

    let english_element = document.querySelector('.english');
    english_element.innerHTML = english;

    let stroke_count_element = document.querySelector('.stroke-count');
    stroke_count_element.innerHTML = stroke_count;

    let variant_element = document.querySelector('.variant');
    variant_element.innerHTML = variant;

}

document.addEventListener('DOMContentLoaded', function() {
    let meaningElementEvent = document.querySelector('.show-meaning');

    let pinyin_element = document.querySelector('.pinyin');
    let english_element = document.querySelector('.english');

    // onClick's logic below:
    meaningElementEvent.addEventListener('click', function() {
        console.log("Showing meaning...");
        pinyin_element.style.display = 'block';
        english_element.style.display = 'block';
    });
});
