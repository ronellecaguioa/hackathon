let h = window.innerHeight;
let w = window.innerWidth;

// generate random numbers dependent on inner width and inner height
let randomHeight = Math.random() * h;
let randomWidth = Math.random() * w;

// set background to waldo background
const backgrounds = ["https://wallpaperplay.com/walls/full/9/5/4/92517.jpg", "https://cdn.hipwallpaper.com/i/76/50/iN5lzF.jpg", "https://i.pinimg.com/originals/9a/07/6c/9a076cf1c5447d3b55e30d928e5db5b7.jpg"];
// need to set to random image in backgrounds array
document.body.style.background = "url('https://i.pinimg.com/originals/42/34/ea/4234eadcbb998a3185441172e88a1c34.jpg')"
document.body.style.backgroundPosition = "center"
document.body.style.backgroundSize = "cover"

// create image tag with src attr to (random?) waldo image
let waldoImg = document.createElement('img');
// waldoImg.src =
// 	'https://w0.pngwave.com/png/941/403/where-s-wally-the-fantastic-journey-walker-books-children-s-literature-book-png-clip-art-thumbnail.png';

waldoImg.src = 'https://codesmith.io/876620a5b0028d26162b6e7c142be182.jpg'
waldoImg.style.opacity = 0.75
waldoImg.style.borderRadius = '50%'

	
waldoImg.classList.add('waldo');
waldoImg.style.top = `${randomHeight}px`;
waldoImg.style.left = `${randomWidth}px`;
waldoImg.addEventListener('click', playSound);

function playSound() {
	let audio = document.createElement('audio');
	audio.id = "ourAudio"
	audio.src = 'https://www.mariomayhem.com/downloads/sounds/mario_64_sound_effects/mario-woohoo.WAV';
	audio.autoplay = 'false';
	document.body.append(audio);
	let sound = document.getElementById('ourAudio');
	sound.play()
}

// append to <body> tag
setTimeout(() => {
	document.body.append(waldoImg);
}, Math.random() * 5000);


/**
 * x y 
 * 0 1 up
 * 0-1 down
 *-1 0 left
 * 1 0 right
 * -1 1
 * 1 -1
 * -1 -1
 * 1 1
 * random i from 0 to 3 => pair for direction
 */
// let randX = [0, 0, -1, 1, -1, 1, -1, 1 ]
// let randY = [1, -1, 0, 0, 1, -1, -1, 1 ]

//  // Grab all tags
//  let tags = document.getElementsByTagName('*');

//  // Iterate through tags
//  for (let tag of tags) {
// 	let i = Math.floor(Math.random() * randX.length);
// 	setInterval(() => {
// 		let currTop = tag.offsetTop;
// 		let currLeft = tag.offsetLeft;		
// 		tag.style.position = "fixed"
		
// 		tag.style.top = `${currTop + randY[i]}px`
// 		tag.style.left = `${currLeft + randX[i]}px`
// 	},1)
// }

 // store the current offset left and offset top

 // style the top with new direction
 // style the left with new direction
 

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

https://p7.hiclipart.com/preview/356/362/533/where-s-wally-desktop-wallpaper-shoe-clip-art-computer-thumbnail.jpg

https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_740,w_1100/v1555285691/shape/mentalfloss/waldomain.png?itok=SpMGe5nM

https://img.pngio.com/finger-graphics-illustration-transparent-png-image-clipart-wheres-waldo-png-900_900.png



https://i0.wp.com/www.thelocalvoice.net/oxford/wp-content/uploads/2012/06/fuknwaldos.gif


dave
https://codesmith.io/876620a5b0028d26162b6e7c142be182.jpg

backgrounds
=> https://cdn.hipwallpaper.com/i/76/50/iN5lzF.jpg

=> https://wallpaperplay.com/walls/full/9/5/4/92517.jpg

=> https://i.pinimg.com/originals/9a/07/6c/9a076cf1c5447d3b55e30d928e5db5b7.jpg
*/
