<script>
function geheInVollbild() {
    const videoElement = document.getElementById('meinVideo');
    
    // Video anzeigen (falls es versteckt ist)
    videoElement.style.display = 'block';

    // Video von vorne starten und abspielen
    videoElement.currentTime = 0;
    videoElement.play();

    // In den Vollbildmodus wechseln
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) { /* Safari */
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { /* IE11 */
        videoElement.msRequestFullscreen();
    }

document.getElementById('trigger').addEventListener('click', geheInVollbild); 
</script>
