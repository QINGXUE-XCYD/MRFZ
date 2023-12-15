function imgback_show(newImagePath) {
    document.body.style.backgroundImage = `url(${newImagePath})`;

    // Hide all title_bars and images inside .operator_head
    const titleBars = document.querySelectorAll('.title_bar');
    const images = document.querySelectorAll('.operator_head img');

    titleBars.forEach(titleBar => {
        titleBar.style.visibility = 'hidden';
    });

    images.forEach(image => {
        image.style.visibility = 'hidden';
    });
}

function imgback_reset() {
    document.body.style.backgroundImage = 'url(../images/bg2.png)';

    // Show all title_bars and images inside .operator_head
    const titleBars = document.querySelectorAll('.title_bar');
    const images = document.querySelectorAll('.operator_head img');

    titleBars.forEach(titleBar => {
        titleBar.style.visibility = 'visible';
    });

    images.forEach(image => {
        image.style.visibility = 'visible';
    });
}

function videoback_show(newVideoPath) {
    const titleBars = document.querySelectorAll('.title_bar');
    const images = document.querySelectorAll('.operator_head img');
    titleBars.forEach(titleBar => {
        titleBar.style.visibility = 'hidden';
    });

    images.forEach(image => {
        image.style.visibility = 'hidden';
    });
    // Show the video background
    const videoBackground = document.getElementById('videoBackground');
    videoBackground.src = newVideoPath;
    videoBackground.style.visibility = 'visible';
}

function videoback_reset() {
    const titleBars = document.querySelectorAll('.title_bar');
    const images = document.querySelectorAll('.operator_head img');
    titleBars.forEach(titleBar => {
        titleBar.style.visibility = 'visible';
    });
    images.forEach(image => {
        image.style.visibility = 'visible';
    });
    // Hide the video background
    const videoBackground = document.getElementById('videoBackground');
    videoBackground.style.visibility = 'hidden';
}