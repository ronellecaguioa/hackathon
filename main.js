// generate random numbers dependent on inner width and inner height
const randomHeight = Math.random() * window.innerHeight;
const randomWidth = Math.random() * window.innerWidth;

// Set random waldo background image
const backgrounds = [
	'https://wallpaperplay.com/walls/full/9/5/4/92517.jpg',
	'https://cdn.hipwallpaper.com/i/76/50/iN5lzF.jpg',
	'https://i.pinimg.com/originals/9a/07/6c/9a076cf1c5447d3b55e30d928e5db5b7.jpg',
];
let i = Math.floor(Math.random() * 3);
document.body.style.background = `url(${backgrounds[i]})`;
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundSize = 'cover';

// Waldo image popup
let waldoImg = document.createElement('img');
waldoImg.src = 'https://codesmith.io/876620a5b0028d26162b6e7c142be182.jpg';
waldoImg.classList.add('waldo');
waldoImg.style.top = `${randomHeight}px`;
waldoImg.style.left = `${randomWidth}px`;
waldoImg.addEventListener('mouseover', playSound);

// Food image container
let divTag = document.createElement('div');
divTag.id = 'foodImg';
divTag.style.backgroundColor = 'white';
divTag.style.position = 'fixed';
divTag.style.textAlign = 'center';
divTag.style.zIndex = '999';
divTag.style.top = `${randomHeight + 50}px`;
divTag.style.left = `${randomWidth}px`;


/**
 * Attach onclick event that fetches from 'theMealDB' API
 */
waldoImg.onclick = function () {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then((res) => res.json())
		.then((data) => {
			divTag.innerHTML = `<h3><a href=${data.meals[0].strYoutube}>${data.meals[0].strMeal}</a></h3><br><img width="125" height="auto" src=${data.meals[0].strMealThumb}>`;
			document.body.append(divTag);
		});
};

/**
 * Event that listens to mouse over event of the waldo image tag
 */
function playSound() {
	let audio = document.createElement('audio');
	audio.id = 'ourAudio';
	audio.src =
		'https://www.mariomayhem.com/downloads/sounds/mario_64_sound_effects/mario-woohoo.WAV';
	audio.autoplay = 'false';
	document.body.append(audio);
	let sound = document.getElementById('ourAudio');
	sound.play();
}

// append to <body> tag
setTimeout(() => {
	document.body.append(waldoImg);
}, 1000);

/*
// timer or onclick or keypress
// popup html description of extension
// => sound effects on click
// => use a variety of images/other waldo characters -- store images as numbers and generate random number to select
// make Waldo appear anywhere in body, rather than in viewable window
// => create timer/tick function to make him appear randomly
// => make background waldo background
// add icon to extensio (waldo hat)
// reset and hide after clicking


// presentation: explain idea, demo, tech challenges, stretch features

dave
https://codesmith.io/876620a5b0028d26162b6e7c142be182.jpg

backgrounds
=> https://cdn.hipwallpaper.com/i/76/50/iN5lzF.jpg

=> https://wallpaperplay.com/walls/full/9/5/4/92517.jpg

=> https://i.pinimg.com/originals/9a/07/6c/9a076cf1c5447d3b55e30d928e5db5b7.jpg
*/
