
const formatTime = function (count = 0) {
    let seconds = count % 60;
    let minutes = Math.floor(count/60);
    if(seconds<10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    return `${minutes} : ${seconds}`;
}

export default formatTime;
