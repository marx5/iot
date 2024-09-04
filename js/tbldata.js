const tableBody = document.querySelector('tbody');
const rowCountSelect = document.getElementById('rowCount');
let jsonData = [];

function createTableRow(item) {
    const row = tableBody.insertRow();

    const idCell = row.insertCell();
    const temperatureCell = row.insertCell();
    const humidityCell = row.insertCell();
    const lightCell = row.insertCell();
    const timeCell = row.insertCell();

    idCell.textContent = item.ID;
    temperatureCell.textContent = item.Temperature;
    humidityCell.textContent = item.Humidity;
    lightCell.textContent = item.Light;
    timeCell.textContent = item.Time;
}

function renderTable(data, rowsToShow) {
    tableBody.innerHTML = '';
    const rows = data.slice(0, rowsToShow);
    rows.forEach(item => {
        createTableRow(item);
    });
}

fetch('/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        jsonData = data; // Store the JSON data
        renderTable(jsonData, rowCountSelect.value); // Render table based on initial selection
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

rowCountSelect.addEventListener('change', () => {
    renderTable(jsonData, rowCountSelect.value); // Re-render table when selection changes
});