document.addEventListener('DOMContentLoaded', function () {
    const inputTeacher = document.querySelector('.autocomplete-teacher');

    if (inputTeacher) {
        inputTeacher.addEventListener('input', function (e) {
            const query = e.target.value;
            const url = e.target.getAttribute('data-autocomplete-url');

            if (query.length >= 2) { // Minimalna długość zapytania
                fetch(`${url}?q=${query}`)
                    .then(response => response.json())
                    .then(data => {
                        const suggestions = data.results.map(result => {
                            return `<li data-id="${result.id}">${result.text}</li>`;
                        }).join('');

                        // Wstawianie sugestii do DOM
                        const suggestionBox = document.createElement('ul');
                        suggestionBox.classList.add('autocomplete-suggestions');
                        suggestionBox.innerHTML = suggestions;
                        e.target.parentElement.appendChild(suggestionBox);

                        // Obsługa kliknięcia w sugestię
                        suggestionBox.addEventListener('click', function (event) {
                            if (event.target.tagName === 'LI') {
                                inputTeacher.value = event.target.textContent;
                                suggestionBox.remove();
                            }
                        });
                    })
                    .catch(err => console.error('Error fetching autocomplete data:', err));
            }
        });
    }
});