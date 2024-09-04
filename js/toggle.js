document.getElementById('toggleFan').addEventListener('change', function () {
    var fanImage = document.getElementById('fanImage');

    if (this.checked) {
        fanImage.src = '/image/fanon.gif';
    } else {
        fanImage.src = '/image/fanoff.png';
    }
});
document.getElementById('toggleAir').addEventListener('change', function () {
    var airIamge = document.getElementById('airImage');

    if (this.checked) {
        airImage.src = '/image/airon.gif';
    } else {
        airImage.src = '/image/airoff.png';
    }
});
document.getElementById('toggleLight').addEventListener('change', function () {
    var lightIamge = document.getElementById('lightImage');

    if (this.checked) {
        lightImage.src = '/image/lighton.png';
    } else {
        lightImage.src = '/image/lightoff.png';
    }
});