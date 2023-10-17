console.log("Welcome to spotify");

// initialize the variables
let songIndex = 1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('progressBar');
let songName=document.getElementById('songName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Idhera Idhera", filePath: "songs/1.mp3", coverPath: "cover/1.jpeg" },
    { songName: "Ek niranjan", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Vintunnava", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Roja Roja", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "My heart is Beating", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Chilipiga", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Nammvevo gaani", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Neeve Neeve", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" }
]



// audioElement.play();

// Handle play and pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// song list
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].textContent = songs[i].songName;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        gif.style.opacity=1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        songName.innerText=songs[songIndex-1].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 1) {
        songIndex = 1;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    songName.innerText=songs[songIndex-1].songName;
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 1;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    songName.innerText=songs[songIndex-1].songName;
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
