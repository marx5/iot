const tableBody = document.querySelector('tbody');
const rowCountSelect = document.getElementById('rowCount');
let jsonData = [];

function createTableRow(item) {
    const row = tableBody.insertRow();

    const idCell = row.insertCell();
    const deviceCell = row.insertCell();
    const actionCell = row.insertCell();
    const timeCell = row.insertCell();

    idCell.textContent = item.ID;
    deviceCell.textContent = item.Device;
    actionCell.textContent = item.Action;
    timeCell.textContent = item.Time;
}

function renderTable(data, rowsToShow) {
    tableBody.innerHTML = '';
    const rows = data.slice(0, rowsToShow);
    rows.forEach(item => {
        createTableRow(item);
    });
}

fetch('/actiondata.json')
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