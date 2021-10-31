import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VIDEO_PROGRESS = 'videoprogress';

const player = new Player(document.querySelector('iframe'));

player.on('timeupdate', throttle(event => {
  localStorage.setItem(VIDEO_PROGRESS, event.seconds);
}, 1000));

const videoProgress = localStorage.getItem(VIDEO_PROGRESS);
if (videoProgress) {
  player.setCurrentTime(videoProgress)
};