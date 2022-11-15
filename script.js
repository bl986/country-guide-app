let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');

//from w3school: Trigger a button click on keyboard "enter" with JavaScript.
countryInp.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("search-btn").click();
    }
  });

//recall: when event click happens, the following function will run
searchBtn.addEventListener("click", ()=> {
    let countryName = countryInp.value;
    //RESTful API: Search by country full name
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(
            //     Object.keys(data[0].currencies)[0]
            // );
            // console.log(
            //     data[0].currencies[Object.keys(data[0].currencies)].name
            // );
            // console.log(
            //     Object.values(data[0].languages).toString().split(',').join(',')
            // );

            result.innerHTML = `
                <img src='${data[0].flags.svg}' class='flag-img'>
                <h2>${data[0].name.common}</h2>
                <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>

                <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>

                <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Population:</h4>
                        <span>${data[0].population}</span>
                    </div>
                </div>

                <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Currency:</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>

                <div class='wrapper'>
                    <div class='data-wrapper'>
                        <h4>Common Language(s):</h4>
                        <span>${Object.values(data[0].languages).toString().split(',').join(',')}</span>
                    </div>
                </div>
            `;
        }).catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            }
            else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        })
});