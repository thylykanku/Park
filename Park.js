const searchButton = document.getElementById('search');
let searchQuery = "";

function getSearch(e){
    e.preventDefault();

    const parent = e.target.closest("form");
    const input = parent.querySelector("input");
    const inputValue = input.value;
    if(inputValue !== ""){
        searchQuery = inputValue;
    }
    document.getElementById('searched').innerHTML = `<strong>${searchQuery} ${nationalParksArray.length}</strong>`;

}

searchButton.addEventListener("click", getSearch);