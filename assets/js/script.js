var citySearch = $("#searchField");
var currentTimeDateEl = moment().format("dddd MMM Do, YYYY");
$("#dateEl").text("Today is " + currentTimeDateEl + ". The weather in ");

function getApi(cityName) {
  console.log(cityName);
  var APIkey = "a2b5590f2ab8007b0bdbeb2adbb4cc35"
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`;

  // Fetch() API retrive data from thrid party apis
  //when we call fetch the 1st argument will be the url that we want to hit in order to retrive data

  //fecth uses promise objects - returns us a promise object -- 3 states pending , resolved , rejected  -- Promise object use 2 methods; then()  // catch()
  // catch checks errors
  // i request data (pending)
  fetch(requestUrl)
    // i got data back from API
    // (resolved)
    // response is a parameter and can be called what ever we want
    .then(function (response) {
      // with data received we execute this code block
      return response.json();
    })
    // once data is back and in a format code can read (json) execute  function with data attribute
    .then(function (data) {
      // examine console log to identify keys and thier values
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function loadHistory() {
  console.log("here");
}

function initLocalStorage() {
  var stringifyExistingSearches = localStorage.getItem("city");
  console.log(stringifyExistingSearches);
  var parseExistingSearches = JSON.parse(stringifyExistingSearches);

  if (parseExistingSearches === null) {
    localStorage.setItem("city", JSON.stringify([]));
    return;
  } else {
    loadHistory();
  }
}
// Store City to Local Storage
$(".searchButton").on("click", function (event) {
  event.preventDefault();
  var searchEntry = citySearch.val();
  //   console.log(searchEntry);
  var savedSearches = JSON.parse(localStorage.getItem("city"));
  //   console.log(savedSearches);
  savedSearches.push(searchEntry);
  //   console.log(savedSearches);
  localStorage.setItem("city", JSON.stringify(savedSearches));
  getApi(searchEntry);
});

initLocalStorage();
