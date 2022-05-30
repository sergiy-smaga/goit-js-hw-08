import Player from '@vimeo/player';
const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const ontimeupdate = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(ontimeupdate, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));


