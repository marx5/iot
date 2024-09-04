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
fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        const firstItem = data[0];

        temperatureValue.textContent = firstItem.Temperature;
        humidityValue.textContent = firstItem.Humidity;
        lightValue.textContent = firstItem.Light;
        function getColorForValue(value, type) {
            if (type === 'Temperature') {
                if (value < 20) return '#ADD8E6'; // Màu xanh nhạt cho nhiệt độ thấp
                if (value >= 20 && value < 25) return '#90EE90'; // Màu xanh lá cây nhạt cho nhiệt độ bình thường
                if (value >= 25 && value < 30) return '#FFFF00'; // Màu vàng cho nhiệt độ hơi cao
                if (value >= 30) return '#FF0000'; // Màu đỏ cho nhiệt độ cao
            } else if (type === 'Humidity') {
                if (value < 30) return '#F08080'; // Màu cam nhạt cho độ ẩm thấp
                if (value >= 30 && value < 60) return '#90EE90'; // Màu xanh lá cây nhạt cho độ ẩm bình thường
                if (value >= 60) return '#20B2AA'; // Màu xanh biển nhạt cho độ ẩm cao
            } else if (type === 'Light') {
                if (value < 200) return '#808080'; // Màu xám cho ánh sáng yếu
                if (value >= 200 && value < 400) return '#FFFFE0'; // Màu vàng nhạt cho ánh sáng bình thường
                if (value >= 400) return '#FFFFFF'; // Màu trắng cho ánh sáng mạnh
            }
        }
        temperatureColor.style.backgroundColor = getColorForValue(firstItem.Temperature, 'Temperature')
        humidityColor.style.backgroundColor = getColorForValue(firstItem.Humidity, 'Humidity');
        light.style.backgroundColor = getColorForValue(firstItem.Light, 'Light');
    })
    .catch(error => {
        console.error('fail JSON:', error);
    });