console.log("page loaded...");


function playVideo(video) {
    video.play();
    video.muted = true;
}
    
function pauseVideo(video) {
    video.pause();  
    // video.currentTime =0;
}

