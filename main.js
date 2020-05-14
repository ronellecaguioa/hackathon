let h = window.innerHeight;
let w = window.innerWidth;

// generate random numbers dependent on inner width and inner height
let randomHeight = Math.random() * h;
let randomWidth = Math.random() * w;

// Audio test
let audio = document.createElement('audio');
audio.id = "ourAudio"
audio.src = 'http://www.soundjay.com/button/beep-07.wav';
audio.autoplay = 'false';
document.body.append(audio);

// create image tag with src attr to (random?) waldo image
let waldoImg = document.createElement('img');
waldoImg.src =
	'https://w0.pngwave.com/png/941/403/where-s-wally-the-fantastic-journey-walker-books-children-s-literature-book-png-clip-art-thumbnail.png';

// waldoImg.width = "15px";
// waldoImg.height = "auto";
waldoImg.classList.add('waldo');
waldoImg.style.top = `${randomHeight}px`;
waldoImg.style.left = `${randomWidth}px`;
waldoImg.addEventListener('click', playSound);

function playSound() {
	let sound = document.getElementById('ourAudio');
	sound.play()
}

// append to <body> tag
setTimeout(() => {
	document.body.append(waldoImg);
	console.log('check')
}, Math.random() * 5000);

/*
// timer or onclick or keypress
// popup html description of extension
// => sound effects on click
// => use a variety of images/other waldo characters -- store images as numbers and generate random number to select
// make Waldo appear anywhere in body, rather than in viewable window
// => create timer/tick function to make him appear randomly
// => make background waldo background
// add icon to extensiom 


// presentation: explain idea, demo, tech challenges, stretch features

https://p7.hiclipart.com/preview/356/362/533/where-s-wally-desktop-wallpaper-shoe-clip-art-computer-thumbnail.jpg

https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_740,w_1100/v1555285691/shape/mentalfloss/waldomain.png?itok=SpMGe5nM

https://img.pngio.com/finger-graphics-illustration-transparent-png-image-clipart-wheres-waldo-png-900_900.png
*/
