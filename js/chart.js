const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
        datasets: [
            {
                label: 'Dữ liệu 1',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y', // Chỉ định trục Y này cho dataset này
            },
            {
                label: 'Dữ liệu 2',
                data: [2, 3, 20, 5, 1, 4],
                type: 'line', // Loại biểu đồ: đường
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y', // Chỉ định trục Y này cho dataset này
            },
            {
                label: 'Dữ liệu 3',
                data: [2, 3, 20, 5, 1, 4],
                type: 'line', // Loại biểu đồ: đường
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y1', // Chỉ định trục Y này cho dataset này
            }
        ]
    },
    options: {
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value; // Tùy chỉnh định dạng của giá trị trục Y đầu tiên
                    }
                }
            },
            y1: {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + " Lux"; // Tùy chỉnh định dạng của giá trị trục Y thứ hai
                    }
                },
                grid: {
                    drawOnChartArea: true
                }
            }
        }
    }
});