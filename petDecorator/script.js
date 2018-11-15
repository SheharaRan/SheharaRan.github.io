var img = document.getElementsByTagName('img')[1];

function moveTiara(event){
    img.style.left = event.clientX - 90+ 'px';     // Get the horizontal coordinate
    img.style.top = event.clientY - 90+ 'px';     // Get the vertical coordinate
}

