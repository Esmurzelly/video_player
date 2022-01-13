const video = document.querySelector('.video'),
        playBtn = document.querySelector('.controls__play'),
        stopBtn = document.querySelector('.controls__stop'),
        playBtnImg = document.querySelector('.play_btn'),
        progress = document.querySelector('.progress'),
        time = document.querySelector('.controls__time')

// play & pause video

function toggleVideoStatus() {
    if(video.paused) {
        video.play();
        playBtnImg.src = './img/pause.svg';
    } else {
        video.pause();
        playBtnImg.src = './img/play.svg';
    }
}

playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);


//stop video
function stopVideo() {
    video.currentTime = 0; //что бы шло в самое начало видео
    video.pause();
    playBtnImg.src = './img/play.svg';
}
stopBtn.addEventListener('click', stopVideo);

//timer
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //minutes
    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10) {
        minutes = '0' + String(minutes);
    }

    //seconds
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10) {
        seconds = '0' + String(seconds);
    }

    time.innerHTML = `${minutes}:${seconds}`;
}

video.addEventListener('timeupdate', updateProgress);

// set progress
function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100;
}

progress.addEventListener('change', setProgress);