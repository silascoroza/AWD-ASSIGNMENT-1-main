let searchTerm = '';

function displaySearchTerm() {
    searchTerm = document.getElementById('search-bar').value;
    
    document.getElementById('search-output').innerText = `You searched for: ${searchTerm}`;
    
    if (searchTerm === '') {
        document.getElementById('search-output').innerText = "Please enter a search term.";
    } else if (searchTerm.length < 3) {
        document.getElementById('search-output').innerText = "Search term is too short. Try again.";
    } else {
        document.getElementById('search-output').innerText = `YOU SEARCHED FOR: ${searchTerm}`;
    }

    let suggestions = ['HTML', 'CSS', 'JavaScript', 'Python', 'Silas Rhys Coroza',];
    let filteredSuggestions = [];

    for (let i = 0; i < suggestions.length; i++) {
        if (suggestions[i].toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== '') {
            filteredSuggestions.push(suggestions[i]);
        }
    }

    if (filteredSuggestions.length > 0) {
        document.getElementById('search-output').innerHTML += `<br>SUGGESTIONS: ${filteredSuggestions.join(', ')}`;
    } else {
        document.getElementById('search-output').innerHTML += "<br>No suggestions found.";
    }
}
