document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dateList = document.getElementById('date-list');
            data.dates.forEach(date => {
                const dateCard = document.createElement('div');
                dateCard.className = 'date-card';
                dateCard.innerHTML = `
                    <img src="${date.image}" alt="${date.name}">
                    <h2>${date.name}</h2>
                    <p>${date.description}</p>
                    <p><strong>Price:</strong> ${date.price}</p>
                    <a href="${date.link}" target="_blank">More Info</a>
                `;
                dateList.appendChild(dateCard);
            });
        })
        .catch(error => console.error('Error loading data:', error));
});
